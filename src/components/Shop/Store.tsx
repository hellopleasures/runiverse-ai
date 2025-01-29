import React, { useState, useEffect, useCallback } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import CharacterPreview from './CharacterPreview';
import { useGlobalControls } from '../../hooks/useGlobalControls';
import { useRouter } from 'next/router';

interface StoreItem {
  name: string;
  path: string;
}

interface Focusable {
  type: 'EXIT' | 'TAB' | 'ITEM' | 'PAGINATION_PREV' | 'PAGINATION_NEXT';
  label: string;
  name?: string;
  index?: number;
}

export default function Store() {
  const router = useRouter();
  const { selectedCharacter, updateCharacterAttributes } = useCharacter();
  const [activeTab, setActiveTab] = useState('eye_accessories');
  const [items, setItems] = useState<{ [key: string]: StoreItem[] }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Single dimension array
  const [focusIndex, setFocusIndex] = useState(0);

  const itemsPerPage = 12;
  const columns = 3;
  const categories = ['eye_acc', 'body', 'prop', 'hats', 'tops', 'bottoms'];

  // Load store items
  useEffect(() => {
    if (!selectedCharacter?.contract) return;
    fetch(`/api/store/outfits?contract=${selectedCharacter.contract}`)
      .then(r => r.json())
      .then(data => {
        setItems({
          eye_accessories: data.head || [],
          body: data.body || [],
          prop: data.prop || [],
          hats: data.hats || [],
          tops: data.tops || [],
          bottoms: data.bottoms || [],
        });
      })
      .catch(e => {
        console.error(e);
        setErrorMessage('Failed to fetch store items.');
      });
  }, [selectedCharacter]);

  // Ensure certain attributes exist
  useEffect(() => {
    if (!selectedCharacter?.attributes) return;
    const needed = ['tops', 'bottoms', 'hats'];
    let updated = [...selectedCharacter.attributes];
    let changed = false;

    const normalize = (x: string) => x.replace(/\s+/g, '_').toLowerCase();

    needed.forEach(t => {
      const lower = normalize(t);
      const hasIt = updated.some(a => normalize(a.trait_type) === lower);
      if (!hasIt) {
        updated.push({ trait_type: t, value: 'none', filename: null });
        changed = true;
      }
    });

    if (changed) updateCharacterAttributes(updated);
  }, [selectedCharacter, updateCharacterAttributes]);

  // Equip logic
  const normalizeTraitType = useCallback((traitType: string) => {
    return traitType.replace(/\s+/g, '_').toLowerCase();
  }, []);

  function equipTrait(attributes: any[], category: string, newValue: string) {
    const bodyTrait = attributes.find(a => normalizeTraitType(a.trait_type) === 'body');
    const isOnesie = typeof bodyTrait?.value === 'string' && bodyTrait.value.endsWith('_onesie');
    const cat = normalizeTraitType(category);

    const unify = (traitType: string, val: string) => {
      const idx = attributes.findIndex(a => normalizeTraitType(a.trait_type) === normalizeTraitType(traitType));
      if (idx >= 0) {
        attributes[idx] = { ...attributes[idx], value: val };
      }
    };

    // If equipping top/bottom, remove onesie
    if (cat === 'tops' || cat === 'bottoms') {
      if (isOnesie) {
        unify('body', 'none');
        // revert head if it ends with _onesie
        const headIndex = attributes.findIndex(a => normalizeTraitType(a.trait_type) === 'head');
        if (headIndex >= 0) {
          let hv = attributes[headIndex].value;
          if (typeof hv === 'string' && hv.endsWith('_onesie')) {
            hv = hv.replace('_onesie', '');
            attributes[headIndex] = { ...attributes[headIndex], value: hv };
          }
        }
      }
      unify('body', 'none');
    } else if (cat === 'body') {
      const isNowOnesie = newValue.endsWith('_onesie');
      if (isNowOnesie) {
        unify('tops', 'none');
        unify('bottoms', 'none');
        unify('hats', 'none');
        const headIndex = attributes.findIndex(a => normalizeTraitType(a.trait_type) === 'head');
        if (headIndex >= 0) {
          let hv = attributes[headIndex].value;
          if (typeof hv === 'string' && !hv.endsWith('_onesie')) {
            attributes[headIndex] = { ...attributes[headIndex], value: `${hv}_onesie`.toLowerCase() };
          }
        }
      }
    } else if (cat === 'hats' && isOnesie) {
      return attributes; // can't equip hats if onesie
    }

    // set item
    const itemIndex = attributes.findIndex(a => normalizeTraitType(a.trait_type) === cat);
    if (itemIndex >= 0) {
      attributes[itemIndex] = { ...attributes[itemIndex], value: newValue };
    }
    return attributes;
  }

  const handleItemClick = useCallback((category: string, itemName: string) => {
    if (!selectedCharacter?.attributes) return;
    try {
      const newValue = itemName.replace(/\s+/g, '_').toLowerCase();
      const updated = equipTrait([...selectedCharacter.attributes], category, newValue);
      // remove duplicates
      const unique = updated.filter((a, i, self) => i === self.findIndex(tt => tt.trait_type === a.trait_type));
      updateCharacterAttributes(unique);
    } catch (err) {
      console.error(err);
    }
  }, [selectedCharacter, updateCharacterAttributes, normalizeTraitType]);

  // Pagination
  function getAllItems() {
    return items[activeTab] || [];
  }
  function getDisplayedItems() {
    const start = (currentPage - 1) * itemsPerPage;
    return getAllItems().slice(start, start + itemsPerPage);
  }
  const displayedItems = getDisplayedItems();
  const totalPages = Math.ceil(getAllItems().length / itemsPerPage);

  // Update pagination handlers to loop
  const handlePrevPage = () => {
    setCurrentPage(p => p > 1 ? p - 1 : totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage(p => p < totalPages ? p + 1 : 1);
  };

  // Update onAction case
  const onAction = () => {
    const currentF = focusable[focusIndex];
    if (!currentF) return;
    switch (currentF.type) {
      case 'EXIT':
        router.push('/');
        break;
      case 'TAB':
        setActiveTab(currentF.name!);
        setCurrentPage(1);
        break;
      case 'PAGINATION_PREV':
        handlePrevPage();
        break;
      case 'PAGINATION_NEXT':
        handleNextPage();
        break;
      case 'ITEM':
        handleItemClick(activeTab, currentF.name!);
        break;
      default:
        break;
    }
  };

  // Build focus array
  function buildFocusable(): Focusable[] {
    const arr: Focusable[] = [];
    arr.push({ type: 'EXIT', label: 'Exit' });
    categories.forEach(cat => {
      arr.push({ type: 'TAB', label: cat.replace(/_/g, ' '), name: cat });
    });
    arr.push({ type: 'PAGINATION_PREV', label: 'Prev Page' });
    displayedItems.forEach((item, idx) => {
      arr.push({ type: 'ITEM', label: item.name, name: item.name, index: idx });
    });
    arr.push({ type: 'PAGINATION_NEXT', label: 'Next Page' });
    return arr;
  }
  const focusable = buildFocusable();

  // Move selection with arrow keys
  useGlobalControls({
    onUp: () => {
      const currentF = focusable[focusIndex];
      if (currentF?.type === 'ITEM') {
        // Move up a row
        const row = Math.floor((currentF.index ?? 0) / columns);
        if (row > 0) {
          const newIndex = (currentF.index ?? 0) - columns;
          const newF = focusable.findIndex(f => f.type === 'ITEM' && f.index === newIndex);
          if (newF >= 0) {
            setFocusIndex(newF);
            return;
          }
        } else {
          // jump to pagination or tabs
          // If row = 0, let's move up to pagination prev
          const prevFocus = focusable.findIndex(f => f.type === 'PAGINATION_PREV');
          if (prevFocus >= 0) {
            setFocusIndex(prevFocus);
            return;
          }
        }
      } else if (currentF?.type === 'PAGINATION_PREV' || currentF?.type === 'PAGINATION_NEXT') {
        // jump to tabs
        const firstTabIndex = focusable.findIndex(f => f.type === 'TAB');
        if (firstTabIndex >= 0) setFocusIndex(firstTabIndex);
        return;
      } else if (currentF?.type === 'TAB') {
        // move up to exit if not already exit
        const exitIndex = focusable.findIndex(f => f.type === 'EXIT');
        if (exitIndex >= 0) setFocusIndex(exitIndex);
        return;
      }
      // fallback
      setFocusIndex(prev => Math.max(0, prev - 1));
    },
    onDown: () => {
      const currentF = focusable[focusIndex];
      if (currentF?.type === 'EXIT') {
        // move down to first tab
        const firstTabIndex = focusable.findIndex(f => f.type === 'TAB');
        if (firstTabIndex >= 0) setFocusIndex(firstTabIndex);
        return;
      } else if (currentF?.type === 'TAB') {
        // move to pagination
        const prevFocus = focusable.findIndex(f => f.type === 'PAGINATION_PREV');
        if (prevFocus >= 0) {
          setFocusIndex(prevFocus);
          return;
        }
      } else if (currentF?.type === 'PAGINATION_PREV' || currentF?.type === 'PAGINATION_NEXT') {
        // move to first row of items if any
        if (displayedItems.length > 0) {
          const newF = focusable.findIndex(f => f.type === 'ITEM' && f.index === 0);
          if (newF >= 0) {
            setFocusIndex(newF);
            return;
          }
        }
      } else if (currentF?.type === 'ITEM') {
        // move down a row if possible
        const row = Math.floor((currentF.index ?? 0) / columns);
        const newIndex = (currentF.index ?? 0) + columns;
        if (newIndex < displayedItems.length) {
          const newF = focusable.findIndex(f => f.type === 'ITEM' && f.index === newIndex);
          if (newF >= 0) {
            setFocusIndex(newF);
            return;
          }
        } else {
          // if can't, move to pagination next
          const nextFocus = focusable.findIndex(f => f.type === 'PAGINATION_NEXT');
          if (nextFocus >= 0) setFocusIndex(nextFocus);
          return;
        }
      }
      // fallback
      setFocusIndex(prev => Math.min(focusable.length - 1, prev + 1));
    },
    onLeft: () => {
      const currentF = focusable[focusIndex];
      if (currentF?.type === 'ITEM') {
        if ((currentF.index ?? 0) % columns !== 0) {
          const newIndex = (currentF.index ?? 0) - 1;
          const newF = focusable.findIndex(f => f.type === 'ITEM' && f.index === newIndex);
          if (newF >= 0) {
            setFocusIndex(newF);
            return;
          }
        }
      }
      setFocusIndex(prev => Math.max(0, prev - 1));
    },
    onRight: () => {
      const currentF = focusable[focusIndex];
      if (currentF?.type === 'ITEM') {
        if (((currentF.index ?? 0) + 1) % columns !== 0) {
          const newIndex = (currentF.index ?? 0) + 1;
          if (newIndex < displayedItems.length) {
            const newF = focusable.findIndex(f => f.type === 'ITEM' && f.index === newIndex);
            if (newF >= 0) {
              setFocusIndex(newF);
              return;
            }
          }
        }
      }
      setFocusIndex(prev => Math.min(focusable.length - 1, prev + 1));
    },
    onAction: onAction,
    onEscape: () => {
      router.push('/');
    }
  });

  // Also allow click with mouse
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    // find that tab in focusable
    const ix = focusable.findIndex(f => f.type === 'TAB' && f.name === tab);
    if (ix >= 0) setFocusIndex(ix);
  };

  const handleItemMouseClick = (itemName: string) => {
    handleItemClick(activeTab, itemName);
  };

  const handleClickExit = useCallback(() => {
    router.push('/');
  }, [router]);

  const displayedFocusType = focusable[focusIndex]?.type;
  const displayedFocusName = focusable[focusIndex]?.name;
  const displayedFocusItemIndex = focusable[focusIndex]?.index;

  return (
    <div className="py-4 flex items-center justify-center bg-[#697c01]">
      <div className="w-[100%] h-[100%] flex flex-col gap-2">
        {/* Left panel */}
        <div className="flex flex-col items-center">
          <div className="origin-top-left">
            <CharacterPreview />
          </div>
          <div className="w-full flex flex-row justify-between">
          <div className="text-[#333d02] text-xl uppercase font-[MekMono]">
            <strong>Dubloons:</strong> 999
          </div>
          <button
            onClick={handleClickExit}
            className="font-[MekMono] uppercase text-xl text-[#333d02]"
          >
            Exit
          </button>
          </div>
        </div>

        {/* Right panel */}
        <div className=" flex flex-col border-4 border-[#333d02]">
          {errorMessage && (
            <div className="text-red-500 mb-2 p-2">{errorMessage}</div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 p-2">
            {categories.map(tab => {
              const isSelected = (displayedFocusType === 'TAB' && displayedFocusName === tab);
              const active = (tab === activeTab);
              return (
                <div
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`
                    flex-1 p-2 text-center cursor-pointer font-[MekMono] uppercase text-[#333d02]
                    ${isSelected ? 'border-4 border-yellow-400 bg-yellow-400/30 blinking-border' : ''}
                    ${active && !isSelected ? 'border-4 border-[#333d02] bg-white/5' : ''}
                    ${!active && !isSelected ? 'border-4 border-[#333d02] bg-transparent' : ''}
                  `}
                >
                  {tab.replace(/_/g, ' ')}
                </div>
              );
            })}
          </div>

          {/* Items Grid */}
          <div className="flex-1 grid grid-cols-3 gap-2 p-2 bg-[#333d02]/10 overflow-y-auto min-h-0">
            {displayedItems.map((item, idx) => {
              const isSelected = (
                displayedFocusType === 'ITEM' &&
                displayedFocusItemIndex === idx
              );
              return (
                <div
                  key={item.path + idx}
                  className={`
                    flex flex-col items-center justify-center p-2 cursor-pointer
                    ${isSelected ? 'border-4 border-yellow-400 bg-yellow-400/30 blinking-border' : 'border-4 border-[#333d02] bg-white/5'}
                  `}
                  onClick={() => handleItemMouseClick(item.name)}
                >
                  <span className="text-[#333d02] mb-1 text-sm text-center font-[MekMono] w-[150px] truncate uppercase">
                    {item.name.replace(/_/g, ' ')}
                  </span>
                  <img
                    src={item.path}
                    alt={item.name}
                    className="w-16 h-16 object-contain mb-1"
                  />
                  <button className="bg-[#333d02] text-[#697c01] border-none px-2 py-1 cursor-pointer text-sm font-[MekMono] uppercase">
                    Buy for 10g
                  </button>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 p-2">
            <button
              onClick={handlePrevPage}
              className={`
                px-3 py-2 font-[MekMono] uppercase text-[#333d02]
                ${displayedFocusType === 'PAGINATION_PREV' ? 'border-4 border-yellow-400 bg-yellow-400/30 blinking-border' : 'border-4 border-[#333d02] bg-white/5'}
              `}
            >
              Prev
            </button>
            <span className="text-[#333d02] font-[MekMono]">
              {currentPage} / {totalPages || 1}
            </span>
            <button
              onClick={handleNextPage}
              className={`
                px-3 py-2 font-[MekMono] uppercase text-[#333d02]
                ${displayedFocusType === 'PAGINATION_NEXT' ? 'border-4 border-yellow-400 bg-yellow-400/30 blinking-border' : 'border-4 border-[#333d02] bg-white/5'}
              `}
            >
              Next
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
}