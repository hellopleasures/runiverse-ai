import React, { useState, useEffect, useCallback } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import CharacterPreview from './CharacterPreview';
import { useGlobalControls } from '../../hooks/useGlobalControls';

interface StoreItem {
  name: string;
  path: string;
}

export default function Store() {
  const { selectedCharacter, updateCharacterAttributes } = useCharacter();
  const [activeTab, setActiveTab] = useState('eye_accessories');
  const [items, setItems] = useState<{ [key: string]: StoreItem[] }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // We'll store a selectionIndex to highlight an item
  const [selectionIndex, setSelectionIndex] = useState(0);

  const itemsPerPage = 12;
  const columns = 3;
  const categories = ['eye_accessories', 'body', 'prop', 'hats', 'tops', 'bottoms'];

  // Load data
  useEffect(() => {
    (async () => {
      if (!selectedCharacter?.contract) return;
      try {
        const resp = await fetch(`/api/store/outfits?contract=${selectedCharacter.contract}`);
        if (!resp.ok) throw new Error('Failed to fetch store items.');
        const data = await resp.json();
        setItems({
          eye_accessories: data.head || [],
          body: data.body || [],
          prop: data.prop || [],
          hats: data.hats || [],
          tops: data.tops || [],
          bottoms: data.bottoms || [],
        });
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to fetch store items.');
      }
    })();
  }, [selectedCharacter]);

  // Ensure character attributes have certain traits
  useEffect(() => {
    if (!selectedCharacter?.attributes) return;
    const needed = ['tops', 'bottoms', 'hats'];
    let updated = [...selectedCharacter.attributes];
    let changed = false;

    needed.forEach(trait => {
      const lower = trait.toLowerCase();
      const hasIt = updated.some(a => a.trait_type.toLowerCase() === lower);
      if (!hasIt) {
        updated.push({ trait_type: lower, value: 'none', filename: null });
        changed = true;
      }
    });

    if (changed) {
      updateCharacterAttributes(updated);
    }
  }, [selectedCharacter, updateCharacterAttributes]);

  function normalize(traitType: string) {
    return traitType.replace(/\s+/g, '_').toLowerCase();
  }

  // Equip logic
  const handleItemClick = useCallback((category: string, itemName: string) => {
    if (!selectedCharacter?.attributes) return;
    try {
      const newValue = itemName.replace(/\s+/g, '_').toLowerCase();
      const updated = equipTrait([...selectedCharacter.attributes], category, newValue);
      updateCharacterAttributes(updated);
    } catch (error) {
      console.error('Error equipping item:', error);
    }
  }, [selectedCharacter, updateCharacterAttributes]);

  function equipTrait(attributes: any[], category: string, newValue: string) {
    const bodyTrait = attributes.find(a => normalize(a.trait_type) === 'body');
    const isOnesie = typeof bodyTrait?.value === 'string' && bodyTrait?.value.endsWith('_onesie');
    const cat = normalize(category);

    const unify = (traitType: string, val: string) => {
      const idx = attributes.findIndex(a => normalize(a.trait_type) === normalize(traitType));
      if (idx >= 0) {
        attributes[idx] = { ...attributes[idx], value: val };
      }
    };

    if (cat === 'tops' || cat === 'bottoms') {
      if (isOnesie) {
        // remove onesie
        unify('body', 'none');
        // revert head if it ends with _onesie
        const headIndex = attributes.findIndex(a => normalize(a.trait_type) === 'head');
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
        const headIndex = attributes.findIndex(a => normalize(a.trait_type) === 'head');
        if (headIndex >= 0) {
          let hv = attributes[headIndex].value;
          if (typeof hv === 'string' && !hv.endsWith('_onesie')) {
            attributes[headIndex] = { ...attributes[headIndex], value: `${hv}_onesie`.toLowerCase() };
          }
        }
      }
    } else if (cat === 'hats' && isOnesie) {
      return attributes;
    }

    // set item
    const itemIndex = attributes.findIndex(a => normalize(a.trait_type) === cat);
    if (itemIndex >= 0) {
      attributes[itemIndex] = { ...attributes[itemIndex], value: newValue };
    }
    return attributes;
  }

  // Pagination
  function getItemsForActiveTab() {
    return items[activeTab] || [];
  }

  function getItemsToDisplay() {
    const list = getItemsForActiveTab();
    const startIndex = (currentPage - 1) * itemsPerPage;
    return list.slice(startIndex, startIndex + itemsPerPage);
  }

  const displayedItems = getItemsToDisplay();
  const totalPages = Math.ceil(getItemsForActiveTab().length / itemsPerPage);

  // Key handling for item selection
  useGlobalControls({
    onUp: () => {
      // Move selection up by #columns
      setSelectionIndex(prev => {
        let next = prev - columns;
        if (next < 0) next += displayedItems.length;
        return next;
      });
    },
    onDown: () => {
      // Move selection down
      setSelectionIndex(prev => {
        let next = prev + columns;
        if (next >= displayedItems.length) next %= displayedItems.length;
        return next;
      });
    },
    onLeft: () => {
      setSelectionIndex(prev => {
        let next = prev - 1;
        if (next < 0) next = displayedItems.length - 1;
        return next;
      });
    },
    onRight: () => {
      setSelectionIndex(prev => (prev + 1) % displayedItems.length);
    },
    onAction: () => {
      // e.g. equip or buy item
      if (displayedItems[selectionIndex]) {
        const item = displayedItems[selectionIndex];
        handleItemClick(activeTab, item.name);
      }
    },
    onSecondary: () => {
      // e.g. switch tab or something else
    },
    onEscape: () => {
      // do nothing here, store page uses parent's escape
    }
  });

  // Once activeTab changes or page changes, reset selection index
  useEffect(() => {
    setSelectionIndex(0);
  }, [activeTab, currentPage]);

  function handleTabClick(tab: string) {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectionIndex(0);
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      {/* Left side: Character Preview */}
      <div style={{ width: '30%', minWidth: '220px', padding: '0.5rem' }}>
        <CharacterPreview />
      </div>

      {/* Right side: Items */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.5rem' }}>
        {/* Dubloons placeholder */}
        <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
          {errorMessage && (
            <div style={{ color: 'red' }}>{errorMessage}</div>
          )}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              padding: '0.25rem 0.5rem',
            }}
          >
            Dubloons: 999
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', marginBottom: '0.5rem', gap: '0.25rem' }}>
          {categories.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                flex: 1,
                backgroundColor: activeTab === tab ? '#ffeb3b' : '#333',
                color: activeTab === tab ? '#000' : '#fff',
                border: 'none',
                padding: '0.3rem',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {tab.replace(/_/g, ' ')}
            </button>
          ))}
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
            const isSelected = idx === selectionIndex;
            return (
              <div
                key={item.path}
                onClick={() => handleItemClick(activeTab, item.name)}
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
              >
                <span style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
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

        {/* Pagination controls */}
        <div style={{
          marginTop: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            style={{
              backgroundColor: '#444',
              color: '#fff',
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
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            style={{
              backgroundColor: '#444',
              color: '#fff',
              border: 'none',
              padding: '0.4rem 0.8rem',
              cursor: 'pointer'
            }}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}