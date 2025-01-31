import React, {
  useState,
  useEffect,
  FC
} from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { useGlobalControls } from '../../hooks/useGlobalControls';

type FormData = {
  selectedTraits: string[];
  selectedBackstory: string;
  customBackstory: string;
  motivation: string;
  selectedSkills: string[];
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

const MAX_TRAITS = 10;

const CharacterCreation: FC = () => {
  const { selectedCharacter, updateCharacterAttributes, updateConsciousId } = useCharacter();
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [paneFocus, setPaneFocus] = useState<'left' | 'right'>('left');
  const [contentIndex, setContentIndex] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    selectedTraits: [],
    selectedBackstory: '',
    customBackstory: '',
    motivation: '',
    selectedSkills: []
  });

  useEffect(() => {
    if (!selectedCharacter?.attributes) return;

    const getValue = (key: string) => {
      if (!selectedCharacter?.attributes) return '';
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

  function getTabData(): string[] {
    switch (TABS[tabIndex]) {
      case 'Traits': return TRAIT_OPTIONS;
      case 'Backstory': return BACKSTORY_OPTIONS;
      case 'Motivation': return MOTIVATION_PRESETS;
      case 'Skills': return SKILL_OPTIONS;
      default: return [];
    }
  }

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

  function handleToggleTrait(trait: string) {
    setFormData(prev => {
      const inList = prev.selectedTraits.includes(trait);
      if (inList) {
        return {
          ...prev,
          selectedTraits: prev.selectedTraits.filter(t => t !== trait)
        };
      } else {
        if (prev.selectedTraits.length >= MAX_TRAITS) {
          alert(`You have reached the maximum of ${MAX_TRAITS} traits.`);
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

  function handlePressE() {
    if (tabIndex < TABS.length - 1) {
      setTabIndex(tabIndex + 1);
      setPaneFocus('left');
      setContentIndex(0);
    } else {
      handleCreateCharacter();
    }
  }

  useGlobalControls({
    onEscape: () => {
      // Possibly close overlay or do nothing
    },
    onUp: () => {
      if (paneFocus === 'left') {
        setTabIndex(prev => Math.max(0, prev - 1));
      } else {
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
        setPaneFocus('right');
        setContentIndex(0);
      } else {
        handleSelectItem(contentIndex);
      }
    },
    onB: () => {
      if (paneFocus === 'right') {
        setPaneFocus('left');
      }
    },
    onE: handlePressE
  });

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
                text-left px-3 py-1 font-ocra text-sm border-2 rounded-md
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

  function renderTabContent() {
    const data = getTabData();
    const activeTab = TABS[tabIndex];

    // For traits, let's do a 3-column grid
    const gridClass =
      activeTab === 'Traits'
        ? 'grid grid-cols-3 gap-2'
        : 'grid grid-cols-1 gap-2';

    return (
      <div className="flex flex-col w-full p-4 space-y-2 overflow-y-auto h-full">
        <h2 className="font-ocra text-xl text-white mb-2">
          {activeTab}
        </h2>

        {activeTab === 'Traits' && (
          <div className="mb-2 text-white text-sm">
            Selected {formData.selectedTraits.length} / {MAX_TRAITS}
          </div>
        )}

        <div className={gridClass}>
          {data.map((item, i) => {
            const isFocused = (paneFocus === 'right') && (contentIndex === i);
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

            return (
              <button
                key={`${activeTab}-${item}-${i}`}
                onClick={() => {
                  setContentIndex(i);
                  setPaneFocus('right');
                  handleSelectItem(i);
                }}
                className={`
                  w-full px-2 py-1 text-left text-sm rounded-md border-2
                  ${isFocused ? 'border-yellow-400 bg-yellow-300/20' : 'border-transparent bg-gray-700/20'}
                  flex items-center justify-between
                  ${selected ? 'bg-green-600/50' : ''}
                `}
              >
                <span>{item === 'custom' ? 'Custom...' : item}</span>
                {selected && <span className="text-yellow-400 font-bold">✔</span>}
              </button>
            );
          })}
        </div>

        {isCustomOptionSelected() && activeTab === 'Backstory' && (
          <textarea
            value={formData.customBackstory}
            onChange={(e) => handleCustomBackstoryChange(e.target.value)}
            placeholder="Write your custom backstory..."
            className="mt-2 border border-gray-700 rounded-lg p-2 w-full h-24
                       bg-gray-800 text-white text-sm focus:outline-none focus:ring
                       focus:ring-yellow-500"
          />
        )}

        {isCustomOptionSelected() && activeTab === 'Motivation' && (
          <input
            type="text"
            value={formData.motivation}
            onChange={(e) => handleMotivationInput(e.target.value)}
            placeholder="Enter your custom motivation..."
            className="mt-2 border border-gray-700 rounded p-2 bg-gray-800 text-white
                       text-sm focus:outline-none focus:ring focus:ring-yellow-500"
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

          <div className="flex-1 overflow-y-auto">
            {renderTabContent()}
          </div>

          <div className="p-3 border-t-4 border-[#333d02] flex justify-center">
            <button
              onClick={handlePressE}
              className="border-4 border-[#333d02] text-[#333d02] font-[MekMono] uppercase text-md px-6 py-2 hover:bg-yellow-400/30"
            >
              {tabIndex < TABS.length - 1 ? 'Next (E)' : 'Finalize (E)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreation;