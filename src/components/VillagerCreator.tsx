import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';

type VillagerAssets = {
  background?: string[];
  bottoms?: string[];
  tops?: string[];
  hair?: string[];
  facial_hair?: string[];
  heads?: string[];
  eyes?: string[];
  [key: string]: string[] | undefined;
};

interface VillagerCreatorProps {
  onClose?: () => void;
}

interface CurrentIndexes {
  [key: string]: number;
}

interface SelectedParts {
  [key: string]: string;
}

/**
 * This array defines the categories we can cycle through with up/down WASD,
 * in the order they appear on screen.
 */
const CATEGORY_ORDER = [
  'background',
  'bottoms',
  'tops',
  'hair',
  'facial_hair',
  'head',
  'eyes',
];

export default function VillagerCreator({ onClose }: VillagerCreatorProps) {
  // basic state
  const [skinTone, setSkinTone] = useState('light');
  const [eyeColor, setEyeColor] = useState('blue');

  // loaded assets from /api/villager-assets
  const [assets, setAssets] = useState<VillagerAssets>({});

  // track the currently selected category for WASD up/down
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  // store the current asset index for each category
  const [currentIndexes, setCurrentIndexes] = useState<CurrentIndexes>({});
  // store the actual chosen (displayed) part for each category
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({});

  /**
   * We also keep track of "filteredHeads" so we only cycle through heads that match the current skin tone.
   * Similarly for "filteredEyes", we only cycle eyes that match the current head # and eyeColor.
   */
  const [filteredHeads, setFilteredHeads] = useState<string[]>([]);
  const [filteredEyes, setFilteredEyes] = useState<string[]>([]);

  // Add this ref for the scroll container
  const containerRef = useRef<HTMLDivElement>(null);

  // on mount, fetch the villager assets
  useEffect(() => {
    async function fetchAssets() {
      try {
        const res = await fetch('/api/villager-assets');
        const data: VillagerAssets = await res.json();
        // set them
        setAssets(data);

        // init indexes for each category to 0
        const initIndexes: CurrentIndexes = {};
        CATEGORY_ORDER.forEach((cat) => { initIndexes[cat] = 0; });
        setCurrentIndexes(initIndexes);

        // pick the first item for each category if available
        const initParts: SelectedParts = {};
        for (const cat of CATEGORY_ORDER) {
          const arr = data[cat];
          if (arr && arr.length > 0) initParts[cat] = arr[0];
          else initParts[cat] = '';
        }
        setSelectedParts(initParts);
      } catch (err) {
        console.error('Error fetching villager assets:', err);
      }
    }

    fetchAssets();
  }, []);

  /**
   * filter heads by the chosen skinTone, e.g. head_1_light.png or so.
   */
  useEffect(() => {
    if (!assets.heads || assets.heads.length === 0) {
      setFilteredHeads([]);
      return;
    }
    // filter for those that have `_${skinTone}.`
    const headsForTone = assets.heads.filter((h) =>
      h.toLowerCase().includes(`_${skinTone}.`)
    );
    setFilteredHeads(headsForTone);
  }, [assets.heads, skinTone]);

  /**
   * Once we pick a head, we look for eyes that match that head number plus the eyeColor.
   * We'll store them in filteredEyes, so we only cycle among those that match.
   */
  useEffect(() => {
    if (!assets.eyes || assets.eyes.length === 0) {
      setFilteredEyes([]);
      return;
    }
    const currentHead = selectedParts.head;
    if (!currentHead) {
      setFilteredEyes([]);
      return;
    }
    // find a pattern like: head_2_light => "2"
    const match = currentHead.match(/head_(\d+)_/);
    if (!match) {
      // no match => can't filter by #, so let's just filter by eyeColor
      const eyesByColor = assets.eyes.filter((eye) =>
        eye.toLowerCase().includes(`_${eyeColor}.`)
      );
      setFilteredEyes(eyesByColor);
    } else {
      const headNum = match[1];
      const eyesMatching = assets.eyes.filter((eye) =>
        eye.toLowerCase().includes(`_${headNum}_`) &&
        eye.toLowerCase().includes(`_${eyeColor}.`)
      );
      setFilteredEyes(eyesMatching);
    }
  }, [assets.eyes, selectedParts.head, eyeColor]);

  /**
   * We'll store the "visible categories" in a memo, so that if "head" is not valid or empty, we skip it, etc.
   * But for now let's assume all categories exist in the UI.
   */
  const visibleCategories = useMemo(() => CATEGORY_ORDER, []);

  /**
   * Re-sync selectedParts.head to the first item in filteredHeads if the user changes skintone or the array changes.
   */
  useEffect(() => {
    // if we have a non-empty array, update the selectedParts with the first item
    if (filteredHeads.length > 0) {
      setSelectedParts((prev) => ({ ...prev, head: filteredHeads[0] }));
      setCurrentIndexes((prev) => ({ ...prev, head: 0 }));
    } else {
      setSelectedParts((prev) => ({ ...prev, head: '' }));
      setCurrentIndexes((prev) => ({ ...prev, head: 0 }));
    }
  }, [filteredHeads]);

  /**
   * Similarly, re-sync selectedParts.eyes when filteredEyes changes
   */
  useEffect(() => {
    if (filteredEyes.length > 0) {
      setSelectedParts((prev) => ({ ...prev, eyes: filteredEyes[0] }));
      setCurrentIndexes((prev) => ({ ...prev, eyes: 0 }));
    } else {
      setSelectedParts((prev) => ({ ...prev, eyes: '' }));
      setCurrentIndexes((prev) => ({ ...prev, eyes: 0 }));
    }
  }, [filteredEyes]);

  /**
   * A function that cycles left or right for a given category.
   * We'll do special logic for 'head' and 'eyes' so we use filteredHeads / filteredEyes if relevant.
   */
  function cycleCategory(cat: string, direction: number) {
    let arr: string[] | undefined = assets[cat];
    // if it's head, use filteredHeads
    if (cat === 'head') {
      arr = filteredHeads;
    } else if (cat === 'eyes') {
      arr = filteredEyes;
    }
    if (!arr || arr.length === 0) return;

    setCurrentIndexes((prev) => {
      const length = arr!.length;
      const newIdx = (prev[cat] + direction + length) % length;
      return { ...prev, [cat]: newIdx };
    });
    setSelectedParts((prevState) => {
      const length = arr!.length;
      const newIdx = (currentIndexes[cat] + direction + length) % length;
      return { ...prevState, [cat]: arr![newIdx] };
    });
  }

  /**
   * Save function
   */
  function saveVillager() {
    const metadata = {
      ...selectedParts,
      skinTone,
      eyeColor,
    };
    console.log('Villager metadata:', metadata);
    // TODO: handle your saving logic
  }

  /**
   * We define WASD controls:
   * - Up => selectedCategoryIndex - 1
   * - Down => selectedCategoryIndex + 1
   * - Left => cycleCategory(visibleCategories[selectedCategoryIndex], -1)
   * - Right => cycleCategory(visibleCategories[selectedCategoryIndex], +1)
   * - Escape => close if onClose
   */
  useGlobalControls({
    onUp: () => {
      setSelectedCategoryIndex((prev) => (prev - 1 + visibleCategories.length) % visibleCategories.length);
    },
    onDown: () => {
      setSelectedCategoryIndex((prev) => (prev + 1) % visibleCategories.length);
    },
    onLeft: () => {
      cycleCategory(visibleCategories[selectedCategoryIndex], -1);
    },
    onRight: () => {
      cycleCategory(visibleCategories[selectedCategoryIndex], 1);
    },
    onEscape: () => {
      if (onClose) onClose();
    },
  });

  // Add this effect to handle scroll position
  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      if (selectedCategoryIndex < children.length) {
        const child = children[selectedCategoryIndex] as HTMLElement;
        child.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedCategoryIndex]);

  // Render logic
  return (
    <div className="p-4 bg-[#697c01] min-h-screen flex flex-col items-center relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-white border-2 border-[#333d02] bg-red-500 uppercase text-[12px] py-1 px-2"
        >
          X
        </button>
      )}
        <button
          onClick={saveVillager}
          className="absolute top-2 left-2 z-10 text-white border-2 border-[#333d02] bg-green-500 uppercase text-[12px] py-1 px-2"
        >
          O
        </button>

      <h1 className="text-[24px] text-[#333d02] uppercase font-['MekMono'] font-bold">Villager Creator</h1>

      {/* Character Preview */}
      <div
        className="character-preview relative w-52 h-52 mx-auto bg-white border border-gray-700"
        style={{ width: '120px', height: '120px' }}
      >
        <img src={selectedParts.background} alt="background" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.bottoms} alt="bottoms" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.tops} alt="tops" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.head} alt="head" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.eyes} alt="eyes" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.facial_hair} alt="facial hair" className="absolute w-full h-full object-contain" />
        <img src={selectedParts.hair} alt="hair" className="absolute w-full h-full object-contain" />
      </div>

      {/* Category List + Buttons */}
      <div 
        ref={containerRef}
        className="selectors grid grid-cols-2 items-center mt-2 space-2 gap-1 h-[80px] overflow-y-auto no-scrollbar"
      >
        {visibleCategories.map((cat, idx) => {
          // highlight if idx === selectedCategoryIndex
          const isSelected = idx === selectedCategoryIndex;
          return (
            <div
              key={cat}
              className={`selector flex items-center border-2 border-[#333d02] justify-between w-full  p-0.5 text-[12px] uppercase font-['MekMono'] ${
                isSelected ? 'bg-gray-700' : ''
              }`}
            >
              <button
                onClick={() => cycleCategory(cat, -1)}
                className="px-2 py-1 border-2 border-[#697c01] text-white"
              >
                ◀
              </button>
              <span className="mx-2 text-white uppercase">{cat}</span>
              <button
                onClick={() => cycleCategory(cat, 1)}
                className="px-2 py-1   text-white border-2 border-[#697c01]"
              >
                ▶
              </button>
            </div>
          );
        })}
      </div>

      {/* Skin Tones */}
      <div className="skin-tone-selector flex justify-center items-center mt-4 space-x-2">
        <label className="text-[#333d02] text-[12px] mr-2 uppercase font-['MekMono']">Skin Tone: </label>
        {['dark', 'odd', 'med', 'light'].map((tone) => (
          <button
            key={tone}
            onClick={() => setSkinTone(tone)}
            className={`px-3 py-1 text-[12px] uppercase font-['MekMono'] text-[#333d02] ${
              skinTone === tone
                ? 'bg-blue-600 text-white'
                : 'border-2 border-[#333d02]'
            }`}
          >
            {tone}
          </button>
        ))}
      </div>

      {/* Eye Colors */}
      <div className="skin-tone-selector flex justify-center items-center mt-4 space-x-2">
      <label className="text-[#333d02] text-[12px] mr-2 uppercase font-['MekMono']">Eye Color: </label>
        {['blue', 'green', 'brown'].map((color) => (
          <button
            key={color}
            onClick={() => setEyeColor(color)}
            className={`px-3 py-1 text-[12px] uppercase font-['MekMono'] text-[#333d02] ${
              eyeColor === color
                ? 'bg-blue-600 text-white'
                : 'border-2 border-[#333d02]'
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      
    </div>
  );
} 