import React, {
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
  FC
} from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { useGlobalControls } from '../../hooks/useGlobalControls';

type FormData = {
  selectedTraits: string[]; // Up to 10
  selectedBackstory: string; // one of the suggested or custom
  customBackstory: string;
  motivation: string; // from suggestions or custom
  selectedSkills: string[]; // Up to 5
};

const TRAIT_OPTIONS = [
  'Brave', 'Cunning', 'Wise', 'Devout', 'Chaotic', 'Kind',
  'Noble', 'Savage', 'Stoic', 'Wanderer', 'Merciful', 'Furious',
  'Ambitious', 'Loyal', 'Mischievous', 'Heroic'
];

const BACKSTORY_OPTIONS = [
  'Grew up in a small farming village, discovered ancient ruins nearby',
  'Orphaned by a dragon attack, vowed revenge',
  'Son of a blacksmith who forged legendary blades',
  'Raised by traveling merchants, accustomed to trade routes',
  'Exiled noble who lost their birthright',
  'Apprentice to a powerful wizard, parted ways after a feud',
  'Part of a secret order that guards hidden artifacts',
  'Survivor of a cataclysmic event, seeking answers',
  'Runaway aristocrat disguised as a commoner',
  'Cursed by an unknown entity, searching for redemption',
  'custom'
];

const MOTIVATION_PRESETS = [
  'Wealth and glory',
  'Knowledge of ancient magic',
  'Reclaim a lost homeland',
  'Break a family curse',
  'Protect the powerless',
  'Find a legendary artifact',
  'custom'
];

const SKILL_OPTIONS = [
  'Swordsmanship', 'Archery', 'Alchemy', 'Stealth', 'Diplomacy',
  'Arcana', 'Smithing', 'Bardic Performance', 'Herbalism', 'Riding',
  'Navigation', 'Lockpicking', 'Enchanting', 'Brewing'
];

type TabType = 'Traits' | 'Backstory' | 'Motivation' | 'Skills';
const TABS: TabType[] = ['Traits', 'Backstory', 'Motivation', 'Skills'];

const CharacterCreation: FC = () => {
  const { selectedCharacter, updateCharacterAttributes, updateConsciousId } = useCharacter();
  // Which tab is active
  const [tabIndex, setTabIndex] = useState<number>(0);
  // Focus: 'left' for tabs, 'right' for tab content
  const [paneFocus, setPaneFocus] = useState<'left' | 'right'>('left');
  // Highlight index for the items in the content area
  const [contentIndex, setContentIndex] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    selectedTraits: [],
    selectedBackstory: '',
    customBackstory: '',
    motivation: '',
    selectedSkills: []
  });

  // On load, retrieve existing attributes
  useEffect(() => {
    if (!selectedCharacter?.attributes) return;

    const getValue = (key: string) => {
      const found = selectedCharacter.attributes.find(attr => attr.trait_type === key);
      return found?.value || '';
    };

    const existingTraits = getValue('traits');
    const existingBackstory = getValue('backstory');
    const existingMotivation = getValue('motivation');
    const existingSkills = getValue('skills');

    setFormData({
      selectedTraits:
        typeof existingTraits === 'string' && existingTraits
          ? existingTraits.split(',')
          : [],
      selectedBackstory:
        typeof existingBackstory === 'string' ? existingBackstory : '',
      customBackstory: '',
      motivation:
        typeof existingMotivation === 'string' ? existingMotivation : '',
      selectedSkills:
        typeof existingSkills === 'string' && existingSkills
          ? existingSkills.split(',')
          : []
    });
  }, [selectedCharacter]);

  // Auto-save formData into character attributes
  useEffect(() => {
    const finalTraits = formData.selectedTraits.join(',');
    const finalBackstory =
      formData.selectedBackstory === 'custom'
        ? formData.customBackstory
        : formData.selectedBackstory;
    const finalMotivation = formData.motivation;
    const finalSkills = formData.selectedSkills.join(',');

    const newAttributes = [
      { trait_type: 'traits', value: finalTraits, filename: null },
      { trait_type: 'backstory', value: finalBackstory, filename: null },
      { trait_type: 'motivation', value: finalMotivation, filename: null },
      { trait_type: 'skills', value: finalSkills, filename: null }
    ];
    updateCharacterAttributes(newAttributes);
  }, [
    formData,
    updateCharacterAttributes
  ]);

  // Data for the currently active tab
  function getTabData(): string[] {
    switch (TABS[tabIndex]) {
      case 'Traits': return TRAIT_OPTIONS;
      case 'Backstory': return BACKSTORY_OPTIONS;
      case 'Motivation': return MOTIVATION_PRESETS;
      case 'Skills': return SKILL_OPTIONS;
      default: return [];
    }
  }

  // Is custom text input relevant to this tab?
  function isCustomOptionSelected(): boolean {
    const activeTab = TABS[tabIndex];
    if (activeTab === 'Backstory' && formData.selectedBackstory === 'custom') {
      return true;
    }
    if (
      activeTab === 'Motivation' &&
      !!formData.motivation &&
      !MOTIVATION_PRESETS.includes(formData.motivation)
    ) {
      return true;
    }
    return false;
  }

  // Selection handlers
  function handleToggleTrait(trait: string) {
    setFormData(prev => {
      const inList = prev.selectedTraits.includes(trait);
      if (inList) {
        return {
          ...prev,
          selectedTraits: prev.selectedTraits.filter(t => t !== trait)
        };
      } else {
        if (prev.selectedTraits.length >= 10) {
          alert('You can select up to 10 traits.');
          return prev;
        }
        return {
          ...prev,
          selectedTraits: [...prev.selectedTraits, trait]
        };
      }
    });
  }

  function handleSelectBackstory(backstory: string) {
    setFormData(prev => ({
      ...prev,
      selectedBackstory: backstory,
      ...(backstory !== 'custom' ? { customBackstory: '' } : {})
    }));
  }

  function handleCustomBackstoryChange(value: string) {
    setFormData(prev => ({
      ...prev,
      customBackstory: value,
      selectedBackstory: 'custom'
    }));
  }

  function handleSelectMotivation(motivation: string) {
    setFormData(prev => ({
      ...prev,
      motivation
    }));
  }

  function handleMotivationInput(value: string) {
    setFormData(prev => ({
      ...prev,
      motivation: value
    }));
  }

  function handleToggleSkill(skill: string) {
    setFormData(prev => {
      const inList = prev.selectedSkills.includes(skill);
      if (inList) {
        return {
          ...prev,
          selectedSkills: prev.selectedSkills.filter(s => s !== skill)
        };
      } else {
        if (prev.selectedSkills.length >= 5) {
          alert('You can select up to 5 skills.');
          return prev;
        }
        return {
          ...prev,
          selectedSkills: [...prev.selectedSkills, skill]
        };
      }
    });
  }

  function handleSelectItem(index: number) {
    const tab = TABS[tabIndex];
    const data = getTabData();
    const item = data[index] || '';
    switch (tab) {
      case 'Traits':
        handleToggleTrait(item);
        break;
      case 'Backstory':
        handleSelectBackstory(item);
        break;
      case 'Motivation':
        handleSelectMotivation(item);
        break;
      case 'Skills':
        handleToggleSkill(item);
        break;
    }
  }

  // Submit final
  async function handleCreateCharacter() {
    try {
      const response = await fetch('/api/consciousnft/character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: selectedCharacter?.name,
          backstory:
            formData.selectedBackstory === 'custom'
              ? formData.customBackstory
              : formData.selectedBackstory,
          motivation: formData.motivation
        })
      });

      const responseText = await response.text();
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} - ${responseText}`);
      }

      const result = JSON.parse(responseText);
      if (result.characterId) {
        updateConsciousId(result.characterId);
      }
      alert('Character info submitted!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting character info!');
    }
  }

  // Move to next tab or finalize on the last tab
  function handlePressE() {
    if (tabIndex < TABS.length - 1) {
      setTabIndex(tabIndex + 1);
      setPaneFocus('left');
      setContentIndex(0);
    } else {
      // If on the last tab, do a final save or submission
      handleCreateCharacter();
    }
  }

  useGlobalControls({
    onEscape: () => {
      // Possibly close overlay or do nothing
    },
    onUp: () => {
      if (paneFocus === 'left') {
        // Move between tabs
        setTabIndex(prev => Math.max(0, prev - 1));
      } else {
        // Move selection in content
        setContentIndex(prev => Math.max(0, prev - 1));
      }
    },
    onDown: () => {
      if (paneFocus === 'left') {
        setTabIndex(prev => Math.min(TABS.length - 1, prev + 1));
      } else {
        const data = getTabData();
        setContentIndex(prev => Math.min(data.length - 1, prev + 1));
      }
    },
    onLeft: () => {
      if (paneFocus === 'right') {
        setPaneFocus('left');
      }
    },
    onRight: () => {
      if (paneFocus === 'left') {
        setPaneFocus('right');
      }
    },
    onA: () => {
      if (paneFocus === 'left') {
        // Switch to right pane on tab select
        setPaneFocus('right');
        setContentIndex(0);
      } else {
        // Toggle the item
        handleSelectItem(contentIndex);
      }
    },
    onB: () => {
      // Go back to tabs from content
      if (paneFocus === 'right') {
        setPaneFocus('left');
      }
    },
    onE: handlePressE
  });

  // Tab button rendering
  function renderTabButtons() {
    return (
      <div className="flex flex-col p-4 space-y-4">
        {TABS.map((tab, idx) => {
          const isSelectedTab = idx === tabIndex;
          const isFocused = paneFocus === 'left' && isSelectedTab;
          return (
            <button
              key={tab}
              onClick={() => {
                setTabIndex(idx);
                setPaneFocus('left');
                setContentIndex(0);
              }}
              className={`
                text-left px-3 py-1 font-ocra text-sm border-2 rounded-md transition-colors
                ${isFocused ? 'border-yellow-400 bg-yellow-300/20' : 'border-transparent bg-gray-700'}
                ${isSelectedTab ? 'font-bold text-white' : 'text-gray-300'}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    );
  }

  // Main content rendering
  function renderTabContent() {
    const data = getTabData();
    const activeTab = TABS[tabIndex];

    return (
      <div className="flex flex-col w-full p-4 space-y-2 overflow-y-auto h-full">
        {/* Title for the tab */}
        <h2 className="font-ocra text-xl text-white mb-2">
          {activeTab}
        </h2>
        {data.map((item, i) => {
          // Check if item is selected
          let selected = false;
          if (activeTab === 'Traits') {
            selected = formData.selectedTraits.includes(item);
          } else if (activeTab === 'Backstory') {
            selected = formData.selectedBackstory === item;
          } else if (activeTab === 'Motivation') {
            selected = formData.motivation === item;
          } else if (activeTab === 'Skills') {
            selected = formData.selectedSkills.includes(item);
          }

          const isFocused = (paneFocus === 'right') && (contentIndex === i);
          return (
            <button
              key={`${activeTab}-${item}-${i}`}
              onClick={() => {
                setContentIndex(i);
                setPaneFocus('right');
                handleSelectItem(i);
              }}
              className={`
                w-full px-2 py-1 text-left text-sm rounded-md border-2 transition-colors
                ${isFocused ? 'border-yellow-400 bg-yellow-300/20' : 'border-transparent bg-gray-700/20'}
                flex items-center justify-between
              `}
            >
              <span>{item === 'custom' ? 'Custom...' : item}</span>
              {selected && <span className="text-yellow-400 font-bold">✔</span>}
            </button>
          );
        })}

        {/* If custom is selected for backstory or motivation, show input */}
        {isCustomOptionSelected() && activeTab === 'Backstory' && (
          <textarea
            value={formData.customBackstory}
            onChange={(e) => handleCustomBackstoryChange(e.target.value)}
            placeholder="Write your custom backstory..."
            className="mt-2 border border-gray-700 rounded-lg p-2 w-full h-24
                       bg-gray-800 text-white text-sm focus:outline-none focus:ring
                       focus:ring-yellow-500 transition-all"
          />
        )}
        {isCustomOptionSelected() && activeTab === 'Motivation' && (
          <input
            type="text"
            value={formData.motivation}
            onChange={(e) => handleMotivationInput(e.target.value)}
            placeholder="Enter your custom motivation..."
            className="mt-2 border border-gray-700 rounded p-2 bg-gray-800 text-white
                       text-sm focus:outline-none focus:ring focus:ring-yellow-500 transition-all"
          />
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#697c01] flex items-center justify-center">
      <div 
        className="w-11/12 h-5/6 max-w-4xl border-4 border-[#333d02] bg-[#697c01] flex flex-row overflow-hidden"
      >
        {/* Left Pane: Tab list */}
        <div className="w-1/3 h-full border-r-4 border-[#333d02] flex flex-col">
          <h2 className="font-[MekMono] text-center text-[#333d02] mt-2 mb-2 text-xl uppercase">
            Character Creation
          </h2>
          {renderTabButtons()}
        </div>

        {/* Right Pane: Content */}
        <div className="flex flex-col w-2/3 h-full">
          {/* Display selected character (if any) at top */}
          {selectedCharacter && (
            <div className="text-center text-[#333d02] py-2 border-b-4 border-[#333d02]">
              {selectedCharacter.image && (
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="mx-auto w-16 h-16 border-4 border-[#333d02] object-cover rounded-full mb-2"
                />
              )}
              <h2 className="font-[MekMono] text-lg uppercase">
                {selectedCharacter.name || 'Unnamed Hero'}
              </h2>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1 overflow-y-auto">
            {renderTabContent()}
          </div>

          {/* Footer: E to Save/Next or final create */}
          <div className="p-3 border-t-4 border-[#333d02] flex justify-center">
            <button
              onClick={handlePressE}
              className="border-4 border-[#333d02] text-[#333d02] font-[MekMono] uppercase text-md px-6 py-2 hover:bg-yellow-400/30 transition-colors"
            >
              {tabIndex < TABS.length - 1 ? 'Next (E)' : 'Finalize (E)'}
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
};

export default CharacterCreation;