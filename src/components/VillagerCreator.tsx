import React, { useEffect, useState, useRef } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';

type VillagerAssets = {
  background?: string[];
  bottoms?: string[];
  tops?: string[];
  facial_hair?: string[];
  heads?: string[];
  [key: string]: string[] | undefined;
};

interface VillagerCreatorProps {
  onClose?: () => void;
}

interface SelectedParts {
  [key: string]: string;
}

/** Text-based categories that won't have images. */
const EXTRA_CATEGORIES_DATA: Record<string, string[]> = {
  skinTone: ['light', 'med', 'dark', 'odd'],
  eyeColor: ['black', 'blue', 'brown', 'green', 'purple']
};

/** The main categories. We handle 'hair' with a special 3-level approach. */
const CATEGORY_ORDER = [
  'skinTone',
  'eyeColor',
  'head',
  'hair',       // special
  'facial_hair',
  'tops',
  'bottoms',
  'background'
];

/** PaneFocus for multi-level approach. */
type PaneFocus =
  | 'traits'
  | 'items'
  | 'hairStyle'
  | 'hairColor';

/** Check if a trait is image-based for a 2-col grid (except hair). */
function isImageTrait(trait: string) {
  if (trait === 'skinTone' || trait === 'eyeColor') return false;
  return true;
}

/** Convert raw filename or category to a nice label. */
function getSanitizedLabel(item: string): string {
  if (item === 'none') return 'None';
  if (item === 'hair_0.png') return 'No Hair';

  let label = item.replace(/\.[^.]+$/, ''); // remove extension
  label = label.replace(/_/g, ' ');         // underscores => spaces
  label = label.replace(/\b\w/g, c => c.toUpperCase()); // uppercase each word
  return label.trim();
}

/** The hair style + color lists. */
const HAIR_STYLES = ['none', 'afro', 'bangs', 'long', 'messy', 'pigtails', 'ponytail', 'wavy'];
const HAIR_COLORS = ['black', 'blonde', 'blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'white'];

export default function VillagerCreator({ onClose }: VillagerCreatorProps) {
  // Basic states
  const [skinTone, setSkinTone] = useState('light');
  const [eyeColor, setEyeColor] = useState('blue');
  const [assets, setAssets] = useState<VillagerAssets>({});

  const [traitIndex, setTraitIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const [paneFocus, setPaneFocus] = useState<PaneFocus>('traits');
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({});

  // Filtered heads based on skinTone
  const [filteredHeads, setFilteredHeads] = useState<string[]>([]);

  // hair style + color indexes
  const [hairStyleIndex, setHairStyleIndex] = useState(0);
  const [hairColorIndex, setHairColorIndex] = useState(0);

  // We'll track the "last chosen hair color" so that when we highlight a new style,
  // we can do a live preview with hair_{style}_{lastColor}.png
  const [lastHairColor, setLastHairColor] = useState('black'); // default if user never picked a color

  // Refs for scrolling
  const traitListRef = useRef<HTMLDivElement>(null);
  const itemListRef = useRef<HTMLDivElement>(null);

  /** On mount, fetch assets (except hair, which is handled statically). */
  useEffect(() => {
    async function fetchAssets() {
      try {
        const res = await fetch('/api/villager-assets');
        const data: VillagerAssets = await res.json();

        // ensure "none" for facial hair if not present
        if (data.facial_hair && !data.facial_hair.includes('none')) {
          data.facial_hair.unshift('none');
        }

        setAssets(data);

        // init selectedParts
        const initParts: SelectedParts = {};
        CATEGORY_ORDER.forEach(cat => {
          if (cat === 'hair') {
            initParts[cat] = 'hair_0.png'; // default to no hair
          }
          else if (EXTRA_CATEGORIES_DATA[cat]) {
            initParts[cat] = EXTRA_CATEGORIES_DATA[cat][0] || '';
          } else {
            const arr = data[cat === 'facial_hair' ? 'facial_hair' : cat] || [];
            initParts[cat] = arr.length > 0 ? arr[0] : '';
          }
        });
        initParts.facial_hair = 'beard_0.png'; // Changed from hair_0.png
        setSelectedParts(initParts);
      } catch (err) {
        console.error('Error fetching villager assets:', err);
      }
    }

    fetchAssets();
  }, []);

  /** Filter heads by skinTone. */
  useEffect(() => {
    if (!assets.heads || assets.heads.length === 0) {
      setFilteredHeads([]);
      return;
    }
    const headsForTone = assets.heads.filter(h =>
      h.toLowerCase().includes(`_${skinTone}.`)
    );
    setFilteredHeads(headsForTone);
  }, [assets.heads, skinTone]);

  /** If the selected head is not in filteredHeads, reset it. */
  useEffect(() => {
    const currentHead = selectedParts.head;
    if (filteredHeads.length > 0 && !filteredHeads.includes(currentHead)) {
      setSelectedParts(prev => ({ ...prev, head: filteredHeads[0] }));
    }
  }, [filteredHeads, selectedParts.head]);

  /** getPossibleItemsForTrait => normal items for a trait (except hair). */
  function getPossibleItemsForTrait(trait: string): string[] {
    if (trait === 'head') {
      return filteredHeads;
    }
    if (EXTRA_CATEGORIES_DATA[trait]) {
      return EXTRA_CATEGORIES_DATA[trait];
    }
    if (trait === 'hair') {
      return []; // we do hair sub-menus
    }
    if (trait === 'facial_hair') {
      return [
        'beard_0.png',        // Default clean-shaven
        'beard_black.png',
        'beard_blonde.png',
        'beard_blue.png',
        'beard_brown.png',
        'beard_orange.png',
        'mustache_black.png',
        'mustache_blonde.png',
        'mustache_blue.png',
        'mustache_brown.png',
        'mustache_orange.png'
      ];
    }
    const realKey = trait === 'facial_hair' ? 'facial_hair' : trait;
    return assets[realKey] || [];
  }

  /** Preview an item in the normal item list. */
  function previewItemSelection(trait: string, item: string) {
    setSelectedParts(prev => {
      const updated = { ...prev, [trait]: item };
      if (trait === 'skinTone') setSkinTone(item);
      if (trait === 'eyeColor') setEyeColor(item);
      return updated;
    });
  }

  function saveVillager() {
    console.log('Villager metadata:', { ...selectedParts, skinTone, eyeColor });
  }

  /** handleAction => from traits → items/hair, or finalize item → traits, or handle hair style/color. */
  function handleAction() {
    if (paneFocus === 'traits') {
      const trait = CATEGORY_ORDER[traitIndex];
      if (trait === 'hair') {
        // go to hairStyle sub menu
        setPaneFocus('hairStyle');
        setHairStyleIndex(0);
        // do an immediate preview for style index 0
        previewHairStyle(0);
      } else {
        // normal items approach
        setPaneFocus('items');
        setItemIndex(0);
        const items = getPossibleItemsForTrait(trait);
        const currentVal = selectedParts[trait];
        const startIdx = items.indexOf(currentVal);
        setItemIndex(startIdx >= 0 ? startIdx : 0);
      }
    }
    else if (paneFocus === 'items') {
      // finalize => back to traits
      setPaneFocus('traits');
    }
    else if (paneFocus === 'hairStyle') {
      // user picks style
      const style = HAIR_STYLES[hairStyleIndex];
      if (style === 'none') {
        // finalize => hair_0.png
        setSelectedParts(prev => ({ ...prev, hair: 'hair_0.png' }));
        setPaneFocus('traits');
      } else {
        // go to hairColor
        setHairColorIndex(0);
        // also do an immediate preview for color 0
        previewHairColor(hairColorIndex, style);
        setPaneFocus('hairColor');
      }
    }
    else if (paneFocus === 'hairColor') {
      // finalize => hair_{style}_{color}.png
      const style = HAIR_STYLES[hairStyleIndex];
      const color = HAIR_COLORS[hairColorIndex];
      finalizeHair(style, color);
      setPaneFocus('traits');
    }
  }

  /** B => go back within sub menus, or do nothing in traits. */
  function handleSecondary() {
    if (paneFocus === 'items') {
      setPaneFocus('traits');
    }
    else if (paneFocus === 'hairStyle') {
      setPaneFocus('traits');
    }
    else if (paneFocus === 'hairColor') {
      // go back to hairStyle
      setPaneFocus('hairStyle');
      // revert preview to the style-level highlight
      previewHairStyle(hairStyleIndex);
    }
  }

  /** For 2D navigation in items (non-hair). */
  function moveItemHighlight(deltaRow: number, deltaCol: number) {
    const trait = CATEGORY_ORDER[traitIndex];
    const items = getPossibleItemsForTrait(trait);
    const columns = isImageTrait(trait) ? 2 : 1;
    const total = items.length;
    if (total === 0) return;

    const row = Math.floor(itemIndex / columns);
    const col = itemIndex % columns;
    const rowCount = Math.ceil(total / columns);

    let newRow = row + deltaRow;
    let newCol = col + deltaCol;

    if (newRow < 0) newRow = 0;
    if (newRow >= rowCount) newRow = rowCount - 1;
    if (newCol < 0) newCol = 0;
    if (newCol >= columns) newCol = columns - 1;

    let newIndex = newRow * columns + newCol;
    if (newIndex >= total) {
      // clamp to last item in that row
      const lastInRow = rowCount === (newRow + 1)
        ? total - 1
        : (newRow + 1) * columns - 1;
      newIndex = Math.min(newIndex, lastInRow);
    }

    previewItemSelection(trait, items[newIndex]);
    setItemIndex(newIndex);
    scrollIntoView(itemListRef, newIndex, total);
  }

  /** hairStyle => single column, immediate preview with last color or black. */
  function moveHairStyleHighlight(delta: number) {
    const length = HAIR_STYLES.length;
    if (length === 0) return;
    let newIndex = hairStyleIndex + delta;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= length) newIndex = length - 1;
    setHairStyleIndex(newIndex);
    scrollIntoView(itemListRef, newIndex, length);
    previewHairStyle(newIndex);
  }

  /** hairColor => single column, immediate preview. */
  function moveHairColorHighlight(delta: number) {
    const length = HAIR_COLORS.length;
    if (length === 0) return;
    let newIndex = hairColorIndex + delta;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= length) newIndex = length - 1;
    setHairColorIndex(newIndex);
    scrollIntoView(itemListRef, newIndex, length);

    // preview style + color
    const style = HAIR_STYLES[hairStyleIndex];
    previewHairColor(newIndex, style);
  }

  /** If user highlights a style in the style menu, we do a fallback color => lastHairColor or 'black'. */
  function previewHairStyle(newStyleIndex: number) {
    const style = HAIR_STYLES[newStyleIndex];
    if (style === 'none') {
      // hair_0
      setSelectedParts(prev => ({ ...prev, hair: 'hair_0.png' }));
    } else {
      const color = lastHairColor || 'black';
      const filename = `hair_${style}_${color}.png`;
      setSelectedParts(prev => ({ ...prev, hair: filename }));
    }
  }

  /** If user highlights a color in the color menu, we do style + color. */
  function previewHairColor(newColorIndex: number, style: string) {
    const color = HAIR_COLORS[newColorIndex];
    const filename = `hair_${style}_${color}.png`;
    setSelectedParts(prev => ({ ...prev, hair: filename }));
  }

  /** finalize hair => store style+color in lastHairColor, set hair, etc. */
  function finalizeHair(style: string, color: string) {
    setLastHairColor(color);
    const filename = `hair_${style}_${color}.png`;
    setSelectedParts(prev => ({ ...prev, hair: filename }));
  }

  function handleUp() {
    if (paneFocus === 'traits') {
      setTraitIndex(prev => {
        const newIndex = (prev - 1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
        scrollIntoView(traitListRef, newIndex, CATEGORY_ORDER.length);
        return newIndex;
      });
    }
    else if (paneFocus === 'items') {
      moveItemHighlight(-1, 0);
    }
    else if (paneFocus === 'hairStyle') {
      moveHairStyleHighlight(-1);
    }
    else if (paneFocus === 'hairColor') {
      moveHairColorHighlight(-1);
    }
  }

  function handleDown() {
    if (paneFocus === 'traits') {
      setTraitIndex(prev => {
        const newIndex = (prev + 1) % CATEGORY_ORDER.length;
        scrollIntoView(traitListRef, newIndex, CATEGORY_ORDER.length);
        return newIndex;
      });
    }
    else if (paneFocus === 'items') {
      moveItemHighlight(1, 0);
    }
    else if (paneFocus === 'hairStyle') {
      moveHairStyleHighlight(1);
    }
    else if (paneFocus === 'hairColor') {
      moveHairColorHighlight(1);
    }
  }

  function handleLeft() {
    if (paneFocus === 'items') {
      moveItemHighlight(0, -1);
    }
  }

  function handleRight() {
    if (paneFocus === 'items') {
      moveItemHighlight(0, 1);
    }
  }

  function scrollIntoView(ref: React.RefObject<HTMLDivElement>, idx: number, length: number) {
    if (!ref.current) return;
    const children = ref.current.children;
    const normalized = (idx + length) % length;
    if (normalized < 0 || normalized >= children.length) return;
    const child = children[normalized] as HTMLElement;
    child.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  useGlobalControls({
    onUp: handleUp,
    onDown: handleDown,
    onLeft: handleLeft,
    onRight: handleRight,
    onAction: handleAction,
    onSecondary: handleSecondary,
    onStart: saveVillager
  });

  const currentTraitKey = CATEGORY_ORDER[traitIndex];
  const selectedValue = selectedParts[currentTraitKey] || '';

  function getAssetUrl(trait: string, item: string) {
    if (!isImageTrait(trait)) return null;
    if (item === 'none') return null;

    // Use the item directly as it matches filenames
    const filename = item.split('/').pop() || item;
    return `/assets/villagers/${trait}/${filename}`;
  }

  function getPreviewLabel(): string {
    return getSanitizedLabel(selectedValue);
  }

  // The items for non-hair traits
  const possibleItems = getPossibleItemsForTrait(currentTraitKey);

  function renderTraitList() {
    return (
      <div
        ref={traitListRef}
        className="flex-1 overflow-y-auto border-2 border-[#333d02] p-2 no-scrollbar absolute inset-0"
      >
        {CATEGORY_ORDER.map((trait, i) => {
          const isSelected = (i === traitIndex);
          const label = getSanitizedLabel(trait);
          return (
            <div
              key={trait}
              className={`
                mb-1 px-2 py-1 uppercase text-[12px] font-['MekMono'] cursor-default break-all
                ${isSelected ? 'bg-yellow-400/30 border border-yellow-400 blinking-border' : 'border border-transparent'}
              `}
            >
              {label}
              {isSelected && (
                <style jsx>{`
                  @keyframes borderBlink {
                    0% { border-color: #facc15; }
                    50% { border-color: transparent; }
                    100% { border-color: #facc15; }
                  }
                  .blinking-border {
                    animation: borderBlink 1s ease-in-out infinite;
                  }
                `}</style>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function renderItemsMenu() {
    // normal items approach for non-hair traits
    const trait = CATEGORY_ORDER[traitIndex];
    const columns = isImageTrait(trait) ? 2 : 1;
    const gridClass = columns === 2 ? 'grid grid-cols-2 gap-2' : 'block';

    return (
      <div
        ref={itemListRef}
        className={`
          flex-1 overflow-y-auto border-2 border-[#333d02] p-2 no-scrollbar
          absolute inset-0
          ${gridClass}
        `}
      >
        {possibleItems.map((item, idx) => {
          const isSelected = (idx === itemIndex);
          const src = getAssetUrl(trait, item);
          const label = getSanitizedLabel(item);
          return (
            <div
              key={`${item}-${idx}`}
              className={`
                relative flex items-center justify-center 
                uppercase text-[12px] font-['MekMono'] cursor-default break-all
                border border-transparent
                ${isSelected ? 'bg-yellow-400/30 border border-yellow-400 blinking-border' : ''}
                px-1 py-1
              `}
              style={{ minHeight: '48px' }}
            >
              {src ? (
                <img
                  src={src}
                  alt={label}
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
              ) : (
                <span>{label}</span>
              )}
              {isSelected && (
                <style jsx>{`
                  @keyframes borderBlink {
                    0% { border-color: #facc15; }
                    50% { border-color: transparent; }
                    100% { border-color: #facc15; }
                  }
                  .blinking-border {
                    animation: borderBlink 1s ease-in-out infinite;
                  }
                `}</style>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function renderHairStyleMenu() {
    return (
      <div
        ref={itemListRef}
        className="flex-1 overflow-y-auto border-2 border-[#333d02] p-2 no-scrollbar absolute inset-0"
      >
        {HAIR_STYLES.map((style, idx) => {
          const isSelected = (idx === hairStyleIndex);
          const label = (style === 'none')
            ? 'No Hair'
            : style.replace(/\b\w/g, c => c.toUpperCase());
          return (
            <div
              key={style}
              className={`
                mb-1 px-2 py-1 uppercase text-[12px] font-['MekMono'] cursor-default break-all
                border border-transparent
                ${isSelected ? 'bg-yellow-400/30 border border-yellow-400 blinking-border' : ''}
              `}
            >
              {label}
              {isSelected && (
                <style jsx>{`
                  @keyframes borderBlink {
                    0% { border-color: #facc15; }
                    50% { border-color: transparent; }
                    100% { border-color: #facc15; }
                  }
                  .blinking-border {
                    animation: borderBlink 1s ease-in-out infinite;
                  }
                `}</style>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function renderHairColorMenu() {
    return (
      <div
        ref={itemListRef}
        className="flex-1 overflow-y-auto border-2 border-[#333d02] p-2 no-scrollbar absolute inset-0"
      >
        {HAIR_COLORS.map((color, idx) => {
          const isSelected = (idx === hairColorIndex);
          const label = color.replace(/\b\w/g, c => c.toUpperCase());
          return (
            <div
              key={color}
              className={`
                mb-1 px-2 py-1 uppercase text-[12px] font-['MekMono'] cursor-default break-all
                border border-transparent
                ${isSelected ? 'bg-yellow-400/30 border border-yellow-400 blinking-border' : ''}
              `}
            >
              {label}
              {isSelected && (
                <style jsx>{`
                  @keyframes borderBlink {
                    0% { border-color: #facc15; }
                    50% { border-color: transparent; }
                    100% { border-color: #facc15; }
                  }
                  .blinking-border {
                    animation: borderBlink 1s ease-in-out infinite;
                  }
                `}</style>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#697c01] text-white flex flex-col relative">
      {/* Main row => left preview, right menu */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* LEFT: preview */}
        <div className="flex-1 border-r-2 border-[#333d02] p-2 flex flex-col items-center justify-start">
          <h1 className="text-[16px] uppercase font-['MekMono'] mb-1">Character Creator</h1>
          <div
            className="relative bg-white border border-gray-700"
            style={{ width: '160px', height: '160px' }}
          >
            {selectedParts.background && <img src={getAssetUrl('background', selectedParts.background)} alt="bg" className="absolute w-full h-full object-contain" />}
            {selectedParts.bottoms && <img src={getAssetUrl('bottoms', selectedParts.bottoms)} alt="bottoms" className="absolute w-full h-full object-contain" />}
            {selectedParts.tops && <img src={getAssetUrl('tops', selectedParts.tops)} alt="tops" className="absolute w-full h-full object-contain" />}
            {selectedParts.head && <img src={getAssetUrl('head', selectedParts.head)} alt="head" className="absolute w-full h-full object-contain" />}
            {selectedParts.hair && <img src={getAssetUrl('hair', selectedParts.hair)} alt="hair" className="absolute w-full h-full object-contain" />}
            {selectedParts.facial_hair && <img src={getAssetUrl('facial_hair', selectedParts.facial_hair)} alt="facial_hair" className="absolute w-full h-full object-contain" />}
          </div>
          <div className="mt-2 text-center text-[11px] uppercase font-['MekMono'] leading-tight max-w-[160px] break-words">
            <p className="mb-1">Value:</p>
            <p className="whitespace-pre-wrap break-words">{getPreviewLabel()}</p>
          </div>
        </div>

        {/* RIGHT: sub menu depends on paneFocus */}
        <div className="w-[40%] h-full p-2 flex flex-col relative">
          {paneFocus === 'traits' && renderTraitList()}
          {paneFocus === 'items' && renderItemsMenu()}
          {paneFocus === 'hairStyle' && renderHairStyleMenu()}
          {paneFocus === 'hairColor' && renderHairColorMenu()}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[10px] py-1 border-t-2 border-[#333d02] font-['MekMono'] uppercase">
        <p>WASD: Move &nbsp;|&nbsp; A: Select &nbsp;|&nbsp; B: Back &nbsp;|&nbsp; Start: Save</p>
      </div>
    </div>
  );
}