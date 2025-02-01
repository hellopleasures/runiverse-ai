===
import React, { useEffect, useState } from 'react';

// Declare require.context support for webpack
declare const require: {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
    keys: () => string[];
    (key: string): any;
  };
};

// Helper function to load assets from a given folder using require.context
const loadContextAssets = (folder: string): string[] => {
  if (typeof require !== 'undefined' && require.context) {
    const context = require.context(`../../public/assets/villagers/${folder}`, false, /\.(png|jpe?g|svg)$/);
    return context.keys().map((key: string) => `/assets/villagers/${folder}/${key.replace('./', '')}`);
  }
  return [];
};

interface VillagerCreatorProps {
  onClose?: () => void;
}

type CurrentIndexes = {
  [key: string]: number;
};

type SelectedParts = {
  [key: string]: string;
};

const VillagerCreator: React.FC<VillagerCreatorProps> = ({ onClose }) => {
  // State for skin tone and eye color
  const [skinTone, setSkinTone] = useState('light');
  const [eyeColor, setEyeColor] = useState('blue'); // Default eye color

  // Current index for each asset category
  const [currentIndexes, setCurrentIndexes] = useState<CurrentIndexes>({
    background: 0,
    bottoms: 0,
    tops: 0,
    hair: 0,
    facialHair: 0,
    head: 0,
  });

  // Selected asset paths for rendering the villager
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({
    background: '',
    bottoms: '',
    tops: '',
    hair: '',
    facialHair: '',
    head: '',
    eyes: '',
  });

  // Loaded assets for each part
  const [assets, setAssets] = useState<{ [key: string]: string[] }>({
    background: [],
    bottoms: [],
    tops: [],
    hair: [],
    facialHair: [],
    heads: [],
    eyes: [],
  });

  // Filtered heads based on skin tone and filtered eyes based on head and eye color
  const [filteredHeads, setFilteredHeads] = useState<string[]>([]);
  const [filteredEyes, setFilteredEyes] = useState<string[]>([]);

  // Load all asset files on mount
  useEffect(() => {
    const newAssets: { [key: string]: string[] } = {
      background: loadContextAssets('background'),
      bottoms: loadContextAssets('bottoms'),
      tops: loadContextAssets('tops'),
      hair: loadContextAssets('hair'),
      facialHair: loadContextAssets('facial_hair'),
      heads: loadContextAssets('heads'),
      eyes: loadContextAssets('eyes'),
    };

    // Debug: Log the loaded asset paths to verify proper directories are being used
    console.log('Loaded villager assets:', newAssets);

    setAssets(newAssets);
    setSelectedParts({
      background: newAssets.background[0],
      bottoms: newAssets.bottoms[0],
      tops: newAssets.tops[0],
      hair: newAssets.hair[0],
      facialHair: newAssets.facialHair[0],
      head: newAssets.heads[0],
      eyes: newAssets.eyes[0],
    });
  }, []);

  // Filter head assets based on the selected skin tone
  useEffect(() => {
    const newFilteredHeads = assets.heads.filter((file) => file.includes(`_${skinTone}.`));
    setFilteredHeads(newFilteredHeads);
    if (newFilteredHeads.length > 0) {
      setSelectedParts((prevParts) => ({
        ...prevParts,
        head: newFilteredHeads[0],
      }));
    }
  }, [skinTone, assets.heads]);

  // Filter eye assets based on the selected eye color and the head number extracted from the current head asset
  useEffect(() => {
    if (filteredHeads.length > 0) {
      const headIndex = currentIndexes.head;
      const headMatch = filteredHeads[headIndex].match(/head_(\d+)_/);
      if (headMatch) {
        const headNumber = headMatch[1];
        const newFilteredEyes = assets.eyes.filter(
          (file) => file.includes(`_${eyeColor}.`) && file.includes(`_${headNumber}_`)
        );
        setFilteredEyes(newFilteredEyes);
        if (newFilteredEyes.length > 0) {
          setSelectedParts((prevParts) => ({
            ...prevParts,
            eyes: newFilteredEyes[0],
          }));
        }
      }
    }
  }, [filteredHeads, eyeColor, currentIndexes.head, assets.eyes]);

  // Function to change asset for a given part by a direction (-1 or +1)
  const changeAsset = (part: string, direction: number) => {
    setCurrentIndexes((prev) => {
      const newIndex = (prev[part] + direction + assets[part].length) % assets[part].length;
      const newAsset = assets[part][newIndex];
      setSelectedParts((prevParts) => ({
        ...prevParts,
        [part]: newAsset,
      }));
      return { ...prev, [part]: newIndex };
    });
  };

  // Function to change head asset using filtered heads
  const changeHead = (direction: number) => {
    setCurrentIndexes((prev) => {
      const newIndex = (prev.head + direction + filteredHeads.length) % filteredHeads.length;
      const newHead = filteredHeads[newIndex];
      setSelectedParts((prevParts) => ({
        ...prevParts,
        head: newHead,
      }));
      return { ...prev, head: newIndex };
    });
  };

  // Save function to output villager metadata (replace with actual saving logic)
  const saveVillager = () => {
    const metadata = {
      ...selectedParts,
      skinTone,
      eyeColor,
    };
    console.log('Villager Metadata:', metadata);
    // Implement actual saving logic here (e.g., API call)
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen flex flex-col items-center relative">
      {onClose && (
        <button onClick={onClose} className="absolute top-2 right-2 z-10 text-white bg-red-600 px-2 py-1 rounded">
          Close
        </button>
      )}
      <h1 className="text-3xl font-bold text-white mb-8">Villager Creator</h1>
      <div className="character-preview relative w-72 h-72 mx-auto bg-white border border-gray-700 rounded-lg" style={{ width: '300px', height: '300px' }}>
        <img src={selectedParts.background} alt="background" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.bottoms} alt="bottoms" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.tops} alt="tops" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.head} alt="head" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.eyes} alt="eyes" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.facialHair} alt="facial hair" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.hair} alt="hair" className="absolute w-full h-full object-contain" />
      </div>

      <div className="selectors flex flex-col items-center mt-4 space-y-2">
        {Object.keys(currentIndexes).map((part) =>
          part !== 'head' && part !== 'eyes' ? (
            <div key={part} className="selector flex items-center justify-between w-64 my-2">
              <button onClick={() => changeAsset(part, -1)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">◀</button>
              <span className="mx-2 text-white">{part}</span>
              <button onClick={() => changeAsset(part, 1)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">▶</button>
            </div>
          ) : null
        )}
        <div className="selector flex items-center justify-between w-64 my-2">
          <button onClick={() => changeHead(-1)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">◀</button>
          <span className="mx-2 text-white">head</span>
          <button onClick={() => changeHead(1)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">▶</button>
        </div>
        <div className="selector flex items-center justify-between w-64 my-2">
          <button onClick={() => setEyeColor('blue')} className={`px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 ${eyeColor === 'blue' ? 'bg-blue-600' : ''}`}>Blue</button>
          <button onClick={() => setEyeColor('green')} className={`px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 ${eyeColor === 'green' ? 'bg-green-600' : ''}`}>Green</button>
          <button onClick={() => setEyeColor('brown')} className={`px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 ${eyeColor === 'brown' ? 'bg-brown-600' : ''}`}>Brown</button>
        </div>
      </div>

      <div className="skin-tone-selector flex justify-center mt-4 space-x-2">
        <label className="text-white mr-2">Skin Tone: </label>
        {['dark', 'odd', 'med', 'light'].map((tone) => (
          <button
            key={tone}
            onClick={() => setSkinTone(tone)}
            className={`px-3 py-1 rounded ${skinTone === tone ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
          >
            {tone}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={saveVillager} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500">
          Save Villager
        </button>
      </div>
    </div>
  );
};

export default VillagerCreator;
===