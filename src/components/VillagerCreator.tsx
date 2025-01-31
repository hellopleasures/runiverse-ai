import React, { useEffect, useState } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';

type CurrentIndexes = {
  [key: string]: number;
};

type SelectedParts = {
  [key: string]: string;
};

const categories = [
  'background',
  'bottoms',
  'tops',
  'hair',
  'facialHair',
  'head',
  'eyes',
];

interface VillagerCreatorProps {
  onClose: () => void;
}

export function VillagerCreator({ onClose }: VillagerCreatorProps) {
  const [skinTone, setSkinTone] = useState('light');
  const [eyeColor, setEyeColor] = useState('blue');
  const [currentIndexes, setCurrentIndexes] = useState<CurrentIndexes>({
    background: 0,
    bottoms: 0,
    tops: 0,
    hair: 0,
    facialHair: 0,
    head: 0,
    eyes: 0,
  });
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({
    background: '',
    bottoms: '',
    tops: '',
    hair: '',
    facialHair: '',
    head: '',
    eyes: '',
  });

  const [assets, setAssets] = useState<{ [key: string]: string[] }>({
    background: ['bg_1.png', 'bg_2.png', 'bg_3.png'],
    bottoms: ['bottoms_1.png', 'bottoms_2.png'],
    tops: ['tops_1.png', 'tops_2.png'],
    hair: ['hair_1.png', 'hair_2.png'],
    facialHair: ['facial_1.png', 'facial_2.png', 'none.png'],
    head: ['head_light_1.png', 'head_light_2.png', 'head_dark_1.png'],
    eyes: ['eyes_blue_1.png', 'eyes_blue_2.png', 'eyes_green_1.png'],
  });

  // Tracks which category is currently focused
  const [categoryFocusIndex, setCategoryFocusIndex] = useState(0);

  function updateSelectedPart(category: string, index: number) {
    const newAsset = assets[category][index];
    setSelectedParts((prev) => ({
      ...prev,
      [category]: newAsset || '',
    }));
  }

  function changeAsset(category: string, direction: number) {
    setCurrentIndexes((prev) => {
      const totalAssets = assets[category].length;
      const oldIndex = prev[category] || 0;
      const newIndex = (oldIndex + direction + totalAssets) % totalAssets;
      updateSelectedPart(category, newIndex);
      return {
        ...prev,
        [category]: newIndex,
      };
    });
  }

  useEffect(() => {
    for (const category of categories) {
      updateSelectedPart(category, 0);
    }
  }, []);

  function saveVillager() {
    const metadata = {
      ...selectedParts,
      skinTone,
      eyeColor,
    };
    console.log('Villager Metadata:', metadata);
    alert('Mock: Villager saved with metadata: ' + JSON.stringify(metadata, null, 2));
  }

  // Add WASD navigation
  useGlobalControls({
    onUp: () => {
      setCategoryFocusIndex((prev) => (prev - 1 + categories.length) % categories.length);
    },
    onDown: () => {
      setCategoryFocusIndex((prev) => (prev + 1) % categories.length);
    },
    onLeft: () => {
      changeAsset(categories[categoryFocusIndex], -1);
    },
    onRight: () => {
      changeAsset(categories[categoryFocusIndex], 1);
    },
    onAction: () => {
      saveVillager();
    },
    onSecondary: () => {
      // no-op
    },
    onEscape: () => {
      onClose();
    },
  });

  return (
    <div className="p-4 bg-gray-900 w-full h-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Villager Creator</h1>

      <div
        className="relative w-72 h-72 mx-auto bg-white border border-gray-700 rounded-lg"
        style={{ width: '300px', height: '300px' }}
      >
        {/* Stacked images to represent the final composition */}
        <img
          src={selectedParts.background}
          alt="background"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.bottoms}
          alt="bottoms"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.tops}
          alt="tops"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.head}
          alt="head"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.eyes}
          alt="eyes"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.facialHair}
          alt="facial hair"
          className="absolute w-full h-full object-contain"
        />
        <img
          src={selectedParts.hair}
          alt="hair"
          className="absolute w-full h-full object-contain"
        />
      </div>

      {/* Category and item selection display */}
      <div className="text-white mt-6 flex flex-col space-y-2 items-center">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setSkinTone('light')}
            className={`px-3 py-1 rounded ${
              skinTone === 'light' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Light Skin
          </button>
          <button
            onClick={() => setSkinTone('dark')}
            className={`px-3 py-1 rounded ${
              skinTone === 'dark' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Dark Skin
          </button>
        </div>

        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setEyeColor('blue')}
            className={`px-3 py-1 rounded ${
              eyeColor === 'blue' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            Blue Eyes
          </button>
          <button
            onClick={() => setEyeColor('green')}
            className={`px-3 py-1 rounded ${
              eyeColor === 'green' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            Green Eyes
          </button>
          <button
            onClick={() => setEyeColor('brown')}
            className={`px-3 py-1 rounded ${
              eyeColor === 'brown' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            Brown Eyes
          </button>
        </div>

        {/* Show the currently focused category and item name */}
        <div className="text-center">
          <p className="text-lg">
            Focus Category: <strong>{categories[categoryFocusIndex]}</strong>
          </p>
          <p className="text-sm text-gray-300">
            Current Item: {selectedParts[categories[categoryFocusIndex]] || 'none'}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={saveVillager}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Save Villager (Enter)
        </button>
        <button
          onClick={() => onClose()}
          className="ml-2 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          Exit
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        Use W/S to change category, A/D to change items, Enter to save, ESC or Exit to close.
      </p>
    </div>
  );
}