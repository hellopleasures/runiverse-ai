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
  const categories = ['eye_accessories', 'body', 'prop', 'hats', 'tops', 'bottoms'];

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
    onAction: () => {
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
          setCurrentPage(p => Math.max(1, p - 1));
          break;
        case 'PAGINATION_NEXT':
          setCurrentPage(p => Math.min(totalPages, p + 1));
          break;
        case 'ITEM':
          handleItemClick(activeTab, currentF.name!);
          break;
        default:
          break;
      }
    },
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
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div style={{ width: '25%', minWidth: '180px', padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}>
          <CharacterPreview />
        </div>
        <div style={{ marginTop: '0.5rem', color: '#fff', textAlign: 'center' }}>
          <strong>Dubloons:</strong> 999
        </div>
        <button
          onClick={handleClickExit}
          style={{
            backgroundColor: '#900',
            color: '#fff',
            border: 'none',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            marginTop: '0.75rem'
          }}
        >
          Exit
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.5rem' }}>
        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '0.5rem' }}>{errorMessage}</div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', marginBottom: '0.5rem', gap: '0.25rem' }}>
          {categories.map(tab => {
            const isSelected = (displayedFocusType === 'TAB' && displayedFocusName === tab);
            const active = (tab === activeTab);
            return (
              <div
                key={tab}
                onClick={() => handleTabClick(tab)}
                style={{
                  flex: 1,
                  backgroundColor: isSelected ? '#ffeb3b' : (active ? '#777' : '#333'),
                  color: isSelected ? '#000' : '#fff',
                  padding: '0.3rem',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                {tab.replace(/_/g, ' ')}
              </div>
            );
          })}
        </div>

        {/* Items Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '0.5rem',
          overflowY: 'auto',
          backgroundColor: '#222'
        }}>
          {displayedItems.map((item, idx) => {
            const isSelected = (
              displayedFocusType === 'ITEM' &&
              displayedFocusItemIndex === idx
            );
            return (
              <div
                key={item.path + idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isSelected ? '#555' : '#333',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  outline: isSelected ? '2px solid #ffd700' : 'none'
                }}
                onClick={() => handleItemMouseClick(item.name)}
              >
                <span
                  style={{
                    color: '#fff',
                    marginBottom: '0.25rem',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    whiteSpace: 'normal'
                  }}
                >
                  {item.name.replace(/_/g, ' ')}
                </span>
                <img
                  src={item.path}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    objectFit: 'contain',
                    marginBottom: '0.25rem'
                  }}
                />
                <button
                  style={{
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    border: 'none',
                    padding: '0.3rem 0.6rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  Buy for 10g
                </button>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div style={{
          marginTop: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          {(() => {
            const isPrevFocus = (displayedFocusType === 'PAGINATION_PREV');
            const isNextFocus = (displayedFocusType === 'PAGINATION_NEXT');
            return (
              <>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  style={{
                    backgroundColor: isPrevFocus ? '#ffeb3b' : '#444',
                    color: isPrevFocus ? '#000' : '#fff',
                    border: 'none',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer'
                  }}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span style={{ margin: '0 1rem' }}>
                  {currentPage} / {totalPages || 1}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  style={{
                    backgroundColor: isNextFocus ? '#ffeb3b' : '#444',
                    color: isNextFocus ? '#000' : '#fff',
                    border: 'none',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer'
                  }}
                  disabled={currentPage === totalPages || totalPages === 0}
                >
                  Next
                </button>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}