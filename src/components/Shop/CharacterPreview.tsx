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
}

interface EquippedItems {
  [key: string]: string | null;
}

function getCollectionFolder(contract: string) {
  switch (contract.toLowerCase()) {
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
    return <div className="text-gray-700">Loading...</div>;
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
      const atA = a.trait_type.toLowerCase();
      const atB = b.trait_type.toLowerCase();
      return (traitOrder[atA] || 99) - (traitOrder[atB] || 99);
    });

  function getTraitImage(trait: Attribute, zIndex: number) {
    const folder = getCollectionFolder(selectedCharacter.contract);
    const traitValue =
      typeof trait.value === 'string'
        ? trait.value.replace(/\s+/g, '_').toLowerCase()
        : trait.value;
    const path = `/assets/${folder}/${trait.trait_type.toLowerCase()}/${traitValue}.png`;

    const equippedValue = equippedItems[trait.trait_type.toLowerCase()];
    // If the user toggled it off
    const finalValue = equippedValue !== undefined ? equippedValue : trait.value;
    if (finalValue === 'none' || finalValue === '' || !folder) {
      return null;
    }

    return (
      <img
        key={`${trait.trait_type}-${finalValue}`}
        src={path}
        alt={`${trait.trait_type}-${finalValue}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex
        }}
        width={250}
        height={250}
        onClick={() => handleToggleTrait(trait.trait_type, String(finalValue))}
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

  function handleResetEquipped() {
    setEquippedItems({});
  }

  function handleBuyEquipped() {
    console.log('Buying equipped items:', equippedItems);
  }

  return (
    <div
      className="bg-white shadow-md rounded p-4"
      style={{ width: '240px', position: 'relative' }}
    >
      <div style={{ marginBottom: '0.5rem' }}>
        <strong>Character ID</strong>
        <div
          style={{
            backgroundColor: '#eee',
            padding: '0.25rem',
            marginTop: '0.25rem',
            borderRadius: '4px'
          }}
        >
          {selectedCharacter.name || 'Unknown Name'}
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '240px',
          overflow: 'hidden',
          marginBottom: '1rem',
          backgroundColor: '#ddd'
        }}
      >
        {sortedAttributes.map((trait, i) => {
          const traitType = trait.trait_type.toLowerCase();
          const z = traitOrder[traitType] || i;
          return getTraitImage(trait, z);
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={{
            backgroundColor: '#2196f3',
            border: 'none',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            cursor: 'pointer'
          }}
          onClick={handleBuyEquipped}
          disabled={Object.keys(equippedItems).length === 0}
        >
          Buy Equipped
        </button>
        <button
          style={{
            backgroundColor: '#777',
            border: 'none',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            cursor: 'pointer'
          }}
          onClick={handleResetEquipped}
          disabled={Object.keys(equippedItems).length === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}