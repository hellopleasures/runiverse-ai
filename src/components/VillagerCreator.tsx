import React, { useEffect, useState, useRef } from 'react';
import { useGlobalControls } from '../hooks/useGlobalControls';
import { ConfirmLeaveModal } from './ConfirmLeaveModal';

type PaneFocus = 'traits' | 'items';

/** Mark which categories show text vs images. */
const TEXT_CATEGORIES = ['skinTone','headNumber','eyeColor'] as const;

/** The main categories in the desired order. */
const CATEGORY_ORDER = [
  'skinTone',
  'headNumber',
  'eyeColor',
  'hairStyle',
  'hairColor',
  'facial_hair',
  'tops',
  'bottoms',
  'background',
];

/** Constants for text-based categories. */
const SKIN_TONES = ['light','med','dark','odd'];
const HEAD_NUMBERS = ['Head 1','Head 2','Head 3','Head 4'];
const EYE_COLORS = ['black','blue','brown','green','purple'];

/** Hair style/color. */
const HAIR_STYLES = ['none','afro','bangs','long','messy','pigtails','ponytail','wavy'];
const HAIR_COLORS = ['black','blonde','blue','brown','green','orange','pink','purple','red','white'];

/** Convert HEAD_NUMBERS label -> numeric string. */
function parseHeadNumber(label: string): string {
  // e.g. "Head 2" => "2"
  const match = label.match(/\d+$/);
  if (!match) return '1';
  return match[0];
}

/** Check if a category is text or image-based. */
function isTextCategory(trait: string): boolean {
  return TEXT_CATEGORIES.includes(trait as any);
}

interface VillagerAssets {
  facial_hair?: string[];
  tops?: string[];
  bottoms?: string[];
  background?: string[];
  [key: string]: string[] | undefined;   // catch-all
}

interface SelectedParts {
  // text-based categories
  skinTone: string;
  headNumber: string;
  eyeColor: string;

  // final filenames for head, eyes
  head?: string;  
  eyes?: string;

  hairStyle: string;
  hairColor: string;
  hair?: string;

  facial_hair?: string;
  tops?: string;
  bottoms?: string;
  background?: string;
}

export default function VillagerCreator({ onClose }: { onClose?: () => void }) {
  const [paneFocus, setPaneFocus] = useState<PaneFocus>('traits');
  const [traitIndex, setTraitIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const traitListRef = useRef<HTMLDivElement | null>(null);
  const itemListRef = useRef<HTMLDivElement | null>(null);

  const [assets, setAssets] = useState<VillagerAssets>({});
  const [selectedParts, setSelectedParts] = useState<SelectedParts>({
    skinTone: 'light',
    headNumber: 'Head 1',
    eyeColor: 'blue',
    hairStyle: 'none',
    hairColor: 'black',
  });

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const res = await fetch('/api/villager-assets');
        const data: VillagerAssets = await res.json();
        if (data.facial_hair && !data.facial_hair.includes('none')) {
          data.facial_hair.unshift('none');
        }
        setAssets(data);

        const sp: SelectedParts = { ...selectedParts };

        // default for facial hair, tops, bottoms, background if available
        sp.facial_hair = data.facial_hair && data.facial_hair.length>0 
          ? data.facial_hair[0] : 'none';
        sp.tops = data.tops && data.tops.length>0 ? data.tops[0] : '';
        sp.bottoms = data.bottoms && data.bottoms.length>0 ? data.bottoms[0] : '';
        sp.background = data.background && data.background.length>0 ? data.background[0] : '';

        finalizeHeadAndEyes(sp);
        finalizeHair(sp);

        setSelectedParts(sp);
      } catch (err) {
        console.error('Failed to fetch villager assets:', err);
      }
    }
    fetchAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Recalc HEAD/EYES from headNumber, skinTone, eyeColor. */
  function finalizeHeadAndEyes(sp: SelectedParts){
    const num = parseHeadNumber(sp.headNumber);
    sp.head = `head_${num}_${sp.skinTone}.png`;
    sp.eyes = `eyes_${num}_${sp.eyeColor}.png`;
  }

  /** Recalc HAIR from hairStyle, hairColor. */
  function finalizeHair(sp: SelectedParts){
    if(sp.hairStyle==='none'){
      sp.hair = 'hair_0.png';
    } else {
      sp.hair = `hair_${sp.hairStyle}_${sp.hairColor}.png`;
    }
  }

  /** Keyboard controls */
  function handleUp() {
    if (paneFocus==='traits') {
      setTraitIndex(prev => {
        const next = (prev -1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
        scrollIntoView(traitListRef, next, CATEGORY_ORDER.length);
        return next;
      });
    } else {
      moveItemHighlight(-1,0);
    }
  }
  function handleDown() {
    if (paneFocus==='traits') {
      setTraitIndex(prev => {
        const next = (prev+1) % CATEGORY_ORDER.length;
        scrollIntoView(traitListRef, next, CATEGORY_ORDER.length);
        return next;
      });
    } else {
      moveItemHighlight(1,0);
    }
  }
  function handleLeft() {
    if (paneFocus==='items') {
      moveItemHighlight(0,-1);
    }
  }
  function handleRight() {
    if (paneFocus==='items') {
      moveItemHighlight(0,1);
    }
  }
  function handleAction() {
    if (paneFocus==='traits') {
      setPaneFocus('items');
      setItemIndex(0);
      const trait = CATEGORY_ORDER[traitIndex];
      const arr = getPossibleItems(trait);
      const currentVal = getCurrentValue(trait);
      const start = arr.indexOf(currentVal);
      setItemIndex(start>=0? start:0);
    } else {
      // close items
      setPaneFocus('traits');
    }
  }
  function handleSecondary(){
    if (paneFocus==='items') {
      setPaneFocus('traits');
    }
  }
  function handleStart(){
    saveVillager();
  }

  useGlobalControls({
    onUp: handleUp,
    onDown: handleDown,
    onLeft: handleLeft,
    onRight: handleRight,
    onAction: handleAction,
    onSecondary: handleSecondary,
    onB: handleSecondary,
    onEscape: onClose,
    onStart: handleStart
  });

  function saveVillager(){
    console.log('Saving villager: ', selectedParts);
  }

  /** Return array of possible items for a category. */
  function getPossibleItems(trait: string): string[] {
    switch(trait){
      case 'skinTone': return SKIN_TONES;
      case 'headNumber': return HEAD_NUMBERS;
      case 'eyeColor': return EYE_COLORS;
      case 'hairStyle': return HAIR_STYLES;
      case 'hairColor': return HAIR_COLORS;
      default:
        return assets[trait] || [];
    }
  }

  /** Return the current string value for a trait in selectedParts. */
  function getCurrentValue(trait: string): string {
    return (selectedParts as any)[trait] || '';
  }

  function moveItemHighlight(deltaRow: number, deltaCol: number){
    const trait = CATEGORY_ORDER[traitIndex];
    const items = getPossibleItems(trait);
    if (!items || items.length===0) return;

    const columns = isTextCategory(trait)? 1: 2;
    const total = items.length;
    const row = Math.floor(itemIndex/columns);
    const col = itemIndex%columns;
    let newRow = row+deltaRow;
    let newCol = col+deltaCol;

    const rowCount = Math.ceil(total/columns);
    if(newRow<0) newRow=0;
    if(newRow>=rowCount) newRow=rowCount-1;
    if(newCol<0) newCol=0;
    if(newCol>=columns) newCol=columns-1;

    let newIndex = newRow*columns + newCol;
    if(newIndex>=total){
      const lastInRow = (rowCount===(newRow+1)) ? (total-1) : ((newRow+1)*columns -1);
      newIndex = Math.min(newIndex,lastInRow);
    }

    previewSelection(trait, items[newIndex]);
    setItemIndex(newIndex);
    scrollIntoView(itemListRef, newIndex, total);
  }

  /** Called as user highlights an item in the items pane. */
  function previewSelection(trait: string, val: string){
    const sp = {...selectedParts};
    if(trait==='skinTone'){
      sp.skinTone = val;
      finalizeHeadAndEyes(sp);
    } else if(trait==='headNumber'){
      sp.headNumber = val;
      finalizeHeadAndEyes(sp);
    } else if(trait==='eyeColor'){
      sp.eyeColor = val;
      finalizeHeadAndEyes(sp);
    } else if(trait==='hairStyle'){
      sp.hairStyle = val;
      finalizeHair(sp);
    } else if(trait==='hairColor'){
      sp.hairColor = val;
      finalizeHair(sp);
    } else {
      // facial_hair, tops, bottoms, background
      (sp as any)[trait] = val;
    }
    setSelectedParts(sp);
  }

  /**
   * Scroll the clicked element into view.
   * Updated to accept ref as RefObject<HTMLDivElement | null>.
   */
  function scrollIntoView(ref: React.RefObject<HTMLDivElement | null>, idx: number, length: number) {
    if (!ref.current) return;
    if (idx < 0 || idx >= length) return;
    const child = ref.current.children[idx] as HTMLElement;
    if (child) child.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  /** Optional label above the items grid to show which trait is being selected. */
  function getTraitLabel(trait: string): string {
    switch(trait){
      case 'skinTone': return 'Select Your Skin Tone';
      case 'headNumber': return 'Select a Head #';
      case 'eyeColor': return 'Select Your Eye Color';
      case 'hairStyle': return 'Select Your Hairstyle';
      case 'hairColor': return 'Select Your Hair Color';
      case 'facial_hair': return 'Facial Hair';
      case 'tops': return 'Tops / Shirt';
      case 'bottoms': return 'Bottoms / Pants';
      case 'background': return 'Background';
      default: return 'Select an item';
    }
  }

  // final preview parts
  const { head, eyes, hair, facial_hair, tops, bottoms, background } = selectedParts;

  return (
    <div className="w-full h-full bg-[#697c01] text-[#333d02] flex flex-col relative p-2">
      {showConfirm && (
        <ConfirmLeaveModal
          onConfirm={() => { setShowConfirm(false); if(onClose) onClose(); }}
          onCancel={()=> setShowConfirm(false)}
        />
      )}

      <div className="flex-1 flex flex-row overflow-hidden border-2 border-[#333d02]">
        {/* Left side => preview */}
        <div className="w-[40%] border-r-2 border-[#333d02]  flex flex-col items-center">
          <h2 className="text-[14px] p-1 uppercase font-['MekMono'] text-center">Character</h2>
          <div className="relative bg-white border border-gray-700" style={{width:'130px', height:'130px'}}>
            {background && (
              <img src={background} alt="bg" className="absolute w-full h-full object-contain"/>
            )}
            {bottoms && (
              <img src={bottoms} alt="bottoms" className="absolute w-full h-full object-contain"/>
            )}
            {tops && (
              <img src={tops} alt="tops" className="absolute w-full h-full object-contain"/>
            )}
            {head && (
              <img src={`/assets/villagers/head/${head}`} alt="head" className="absolute w-full h-full object-contain"/>
            )}
            {eyes && (
              <img src={`/assets/villagers/eyes/${eyes}`} alt="eyes" className="absolute w-full h-full object-contain"/>
            )}
            {hair && (
              <img src={`/assets/villagers/hair/${hair}`} alt="hair" className="absolute w-full h-full object-contain"/>
            )}
            {facial_hair && facial_hair!=='none' && (
              <img src={facial_hair} alt="facial" className="absolute w-full h-full object-contain"/>
            )}
          </div>
        </div>

        {/* Right side => either trait list or items pane */}
        <div className="w-[60%] h-full p-2 flex flex-col relative">
          {paneFocus==='traits' ? (
            <div ref={traitListRef} className="flex-1 overflow-y-auto  p-2 no-scrollbar absolute inset-0">
              {CATEGORY_ORDER.map((trait, i)=>{
                const isSelected = (i===traitIndex);
                return (
                  <div
                    key={trait}
                    className={`
                      mb-1 px-2 py-1 uppercase text-[12px] font-['MekMono'] cursor-default break-all
                      ${isSelected? 'bg-yellow-400/30 border border-yellow-400 blinking-border':'border border-transparent'}
                    `}
                  >
                    {trait}
                    {isSelected && (
                      <style jsx>{`
                        @keyframes borderBlink {
                          0% {border-color:#facc15;}
                          50% {border-color:transparent;}
                          100% {border-color:#facc15;}
                        }
                        .blinking-border { animation: borderBlink 1s ease-in-out infinite; }
                      `}</style>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            // items pane
            <div className="flex-1 overflow-y-auto p-2 no-scrollbar absolute inset-0">
              <h3 className="text-[10px] font-['MekMono'] uppercase text-center mb-2">
                {getTraitLabel(CATEGORY_ORDER[traitIndex])}
              </h3>
              {(() => {
                const trait = CATEGORY_ORDER[traitIndex];
                const items = getPossibleItems(trait);
                if (items.length===0) {
                  return (
                    <div className="text-center text-[12px] text-gray-200 italic">
                      No items available
                    </div>
                  );
                }
                const columns = isTextCategory(trait)?1:2;
                const gridClass = (columns===1)? 'block' : 'grid grid-cols-2 gap-2';
                return (
                  <div ref={itemListRef} className={gridClass}>
                    {items.map((val, idx)=>{
                      const isSelected = idx===itemIndex;
                      let displayImg = '';
                      let displayText = '';
                      if(!isTextCategory(trait)){
                        // image-based
                        if(trait==='headNumber'){
                          // Actually user wants text, but let's skip images for head # => text-based above
                          displayText = val;
                        }
                        else if(trait==='hairStyle'){
                          if(val==='none') {
                            displayImg = '/assets/villagers/hair/hair_0.png';
                          } else {
                            displayImg = `/assets/villagers/hair/hair_${val}_${selectedParts.hairColor}.png`;
                          }
                        }
                        else if(trait==='hairColor'){
                          if(selectedParts.hairStyle==='none'){
                            displayImg = '/assets/villagers/hair/hair_0.png';
                          } else {
                            displayImg = `/assets/villagers/hair/hair_${selectedParts.hairStyle}_${val}.png`;
                          }
                        }
                        else {
                          // facial_hair, tops, bottoms, background
                          displayImg = val;
                        }
                      } 
                      else {
                        // text-based (skinTone, headNumber, eyeColor)
                        displayText = val;
                      }

                      return (
                        <div key={val} className={`
                          relative flex ${columns===2?'flex-col items-center':'items-start'}
                          cursor-default break-all uppercase text-[12px] font-['MekMono']
                          px-1 py-1 border border-transparent
                          ${isSelected?'bg-yellow-400/30 border border-yellow-400 blinking-border':''}
                        `} style={{minHeight:'48px'}}>
                          {displayImg ? (
                            <img
                              src={displayImg}
                              alt={val}
                              style={{width:'64px',height:'64px',objectFit:'contain'}}
                            />
                          ) : null}
                          {displayText? <span>{displayText}</span> : null}

                          {isSelected && (
                            <style jsx>{`
                              @keyframes borderBlink {
                                0% {border-color:#facc15;}
                                50% {border-color:transparent;}
                                100% {border-color:#facc15;}
                              }
                              .blinking-border { animation: borderBlink 1s ease-in-out infinite;}
                            `}</style>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-[12px] py-1   font-['MekMono'] uppercase">
        <p>WASD: Move | A: Select | B: Back | Start: Save</p>
      </div>
    </div>
  );
}