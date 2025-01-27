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
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex
        }}
        width={240}
        height={240}
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

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '0.5rem',
        width: '240px'
      }}
    >
      {/* Character ID */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <strong style={{ color: '#333' }}>Character Name</strong>
        <div
          style={{
            backgroundColor: '#eee',
            padding: '0.25rem',
            marginTop: '0.25rem',
            borderRadius: '4px',
            fontSize: '0.85rem',
            color: '#333',
            whiteSpace: 'normal' // allow wrapping
          }}
        >
          {selectedCharacter.name || 'Unknown Name'}
        </div>
      </div>

      {/* Character Image */}
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '240px',
          backgroundColor: '#ccc',
          overflow: 'hidden'
        }}
      >
        {sortedAttributes.map((attr, i) => {
          const z = traitOrder[attr.trait_type.toLowerCase()] || i;
          return getTraitImage(attr, z);
        })}
      </div>

      {/* Under the character: small listing of attributes */}
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#555' }}>
        <div><strong>Equipped Items:</strong></div>
        {sortedAttributes.map((attr) => {
          const val = attr.value;
          if (val && val !== 'none') {
            return (
              <div key={attr.trait_type} style={{ whiteSpace: 'normal' }}>
                {attr.trait_type.replace(/_/g, ' ')}: {String(val).replace(/_/g, ' ')}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}