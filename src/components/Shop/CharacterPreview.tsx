import React, { useState } from 'react';
import { useCharacter } from '../../context/CharacterContext';

const WIZARD_CONTRACT = "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42";
const WARRIOR_CONTRACT = "0x9690b63eb85467be5267a3603f770589ab12dc95";
const BABY_CONTRACT = "0x4b1e130ae84c97b931ffbe91ead6b1da16993d45";
const SOUL_CONTRACT = "0x251b5f14a825c537ff788604ea1b58e49b70726f";

interface Attribute {
  trait_type: string;
  value: string | number;
  filename: string | null;
  original_value?: string | number;
}

interface EquippedItems {
  [key: string]: string | null;
}

function getCollectionFolder(contract: string) {
  switch (contract?.toLowerCase()) {
    case WIZARD_CONTRACT.toLowerCase():
      return 'wizards';
    case WARRIOR_CONTRACT.toLowerCase():
      return 'warriors';
    case BABY_CONTRACT.toLowerCase():
      return 'babies';
    case SOUL_CONTRACT.toLowerCase():
      return 'souls';
    default:
      return '';
  }
}

export default function CharacterPreview() {
  const { selectedCharacter } = useCharacter();
  const [equippedItems, setEquippedItems] = useState<EquippedItems>({});
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  if (!selectedCharacter || !selectedCharacter.attributes) {
    return <div style={{ color: '#ccc' }}>Loading...</div>;
  }

  const traitOrder: { [key: string]: number } = {
    familiar: 1,
    bottoms: 2,
    tops: 3,
    body: 4,
    prop: 5,
    head: 6,
    eye_accessory: 7,
    hats: 8
  };

  const sortedAttributes = [...selectedCharacter.attributes]
    .filter(attr => traitOrder.hasOwnProperty(attr.trait_type.toLowerCase()))
    .sort((a, b) => {
      const aKey = a.trait_type.toLowerCase();
      const bKey = b.trait_type.toLowerCase();
      return (traitOrder[aKey] || 99) - (traitOrder[bKey] || 99);
    });

  function getTraitImage(attr: Attribute, zIndex: number) {
    if (!selectedCharacter) return null;
    const folder = getCollectionFolder(selectedCharacter.contract);
    const traitValue = typeof attr.value === 'string'
      ? attr.value.replace(/\s+/g, '_').toLowerCase()
      : attr.value;

    const equippedValue = equippedItems[attr.trait_type.toLowerCase()];
    const finalValue = equippedValue !== undefined ? equippedValue : attr.value;
    if (finalValue === 'none' || !folder) return null;

    return (
      <img
        key={`${attr.trait_type}-${finalValue}`}
        src={`/assets/${folder}/${attr.trait_type.toLowerCase()}/${traitValue}.png`}
        alt={`${attr.trait_type} - ${finalValue}`}
        className="absolute inset-0 w-[200px] h-[200px] object-contain"
        style={{ zIndex }}
      />
    );
  }

  function handleToggleTrait(traitType: string, currentValue: string) {
    setEquippedItems(prev => {
      const key = traitType.toLowerCase();
      if (prev[key] === 'none') {
        return { ...prev, [key]: currentValue };
      }
      return { ...prev, [key]: prev[key] === currentValue ? 'none' : currentValue };
    });
  }

  const handleDownload = async () => {
    if (!canvasRef.current || !selectedCharacter) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 200;

    for (const attr of sortedAttributes) {
      const folder = getCollectionFolder(selectedCharacter.contract);
      const traitValue = typeof attr.value === 'string'
        ? attr.value.replace(/\s+/g, '_').toLowerCase()
        : attr.value;
      
      if (traitValue === 'none' || !folder) continue;

      try {
        const img = await loadImage(`/assets/${folder}/${attr.trait_type.toLowerCase()}/${traitValue}.png`);
        ctx.drawImage(img, 0, 0, 200, 200);
      } catch (error) {
        console.error(`Failed to load image for ${attr.trait_type}:`, error);
      }
    }

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedCharacter.name || 'character'}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  return (
    <div className="border-4 border-[#333d02] p-4 flex flex-row gap-3 items-center">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      <div className="relative w-[200px] h-[200px]">
        {sortedAttributes.map((attr, i) => {
          const z = traitOrder[attr.trait_type.toLowerCase()] || i;
          return getTraitImage(attr, z);
        })}
      </div>

      <div className="">
        <strong className="text-[#333d02] text-xl font-mek-mono uppercase">Character Name</strong>
        <p className="text-2xl leading-none text-[#333d02] font-[MekMono] uppercase">
          {selectedCharacter.name || 'Unknown Name'}
        </p>
        <p className="uppercase text-xl text-[#333d02]">Equipped Items:</p>
        {sortedAttributes.map((attr) => {
          const val = attr.value;
          if (val && val !== 'none') {
            return (
              <div key={attr.trait_type} className="uppercase text-[#333d02] text-2xl font-[MekMono] leading-none">
                {attr.trait_type.replace(/_/g, ' ')}: {String(val).replace(/_/g, ' ')}
              </div>
            );
          }
          return null;
        })}
        
        <button
          onClick={handleDownload}
          className="mt-2 px-2 py-1 bg-[#333d02] uppercase font-[MekMono] text-white rounded hover:bg-[#4a5803] transition-colors"
        >
          Download
        </button>
      </div>
    </div>
  );
}