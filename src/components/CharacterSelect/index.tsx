import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import { useCharacter } from '../../context/CharacterContext.tsx'; 
// ^^^ FIXED: path appended '.tsx'
import { useGlobalControls } from '../../hooks/useGlobalControls';
import { FaAngleDown } from "react-icons/fa";

const WIZARD_CONTRACT = '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42';
const WARRIOR_CONTRACT = '0x9690b63eb85467be5267a3603f770589ab12dc95';
const BABY_CONTRACT = '0x4b1e130ae84c97b931ffbe91ead6b1da16993d45';
const SOUL_CONTRACT = '0x251b5f14a825c537ff788604ea1b58e49b70726f';

function getContractLabel(contract: string) {
  switch (contract.toLowerCase()) {
    case WIZARD_CONTRACT.toLowerCase():
      return 'Wizard';
    case WARRIOR_CONTRACT.toLowerCase():
      return 'Warrior';
    case BABY_CONTRACT.toLowerCase():
      return 'Baby Wizard';
    case SOUL_CONTRACT.toLowerCase():
      return 'Soul';
    default:
      return 'Unknown';
  }
}

function getCharacterImageUrl(contract: string, id: string) {
  switch (contract.toLowerCase()) {
    case WIZARD_CONTRACT.toLowerCase():
      return `https://www.forgottenrunes.com/api/art/wizards/${id}.png`;
    case WARRIOR_CONTRACT.toLowerCase():
      return `https://portal.forgottenrunes.com/api/warriors/img/${id}.png`;
    case BABY_CONTRACT.toLowerCase():
      return `https://www.forgottenrunes.com/api/art/wizards/${id}.png`;
    case SOUL_CONTRACT.toLowerCase():
      return `https://portal.forgottenrunes.com/api/souls/img/${id}`;
    default:
      return '/assets/no-image.png';
  }
}

interface CharacterData {
  id: string;
  contract: string;
}

const subMenuItems = [
  'Villager Creator',
  'Items',
  'Store',
  'Edit Character',
  'Character Page',
  'Equip',
];

type PaneFocus = 'left' | 'right';

export interface CharacterSelectProps {
  onClose: () => void;
  onOpenVillagerCreator?: () => void;
  id?: string;
  contract?: string;
  onSelect?: (character: { id: string; contract: string }) => void;
  isSelected?: boolean;
  className?: string;
}

interface CharacterSelectPropsInternal extends CharacterSelectProps {
}

const CHARACTERS: CharacterData[] = [
  { id: '1', contract: WIZARD_CONTRACT },
  { id: '7889', contract: WIZARD_CONTRACT },
  { id: '10', contract: WARRIOR_CONTRACT },
  { id: '42', contract: BABY_CONTRACT },
  { id: '16', contract: SOUL_CONTRACT },
  { id: '100', contract: WIZARD_CONTRACT },
  { id: '101', contract: WIZARD_CONTRACT },
  { id: '102', contract: WARRIOR_CONTRACT },
  { id: '103', contract: BABY_CONTRACT },
  { id: '105', contract: WIZARD_CONTRACT },
  { id: '106', contract: WIZARD_CONTRACT },
];

const CharacterSelect: FC<CharacterSelectPropsInternal> = ({ onClose, onOpenVillagerCreator }) => {
  const { setSelectedCharacter, selectedCharacter } = useCharacter();
  const [paneFocus, setPaneFocus] = useState<PaneFocus>('left');
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useGlobalControls({
    onEscape: onClose,
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(CHARACTERS.length / itemsPerPage);
  const currentPage = Math.floor(leftIndex / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = CHARACTERS.slice(startIndex, endIndex);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === 'escape') {
        onClose();
        return;
      }

      if (paneFocus === 'left') {
        if (key === 'arrowup' || key === 'w') {
          setLeftIndex((prev) => Math.max(0, prev - 1));
        } else if (key === 'arrowdown' || key === 's') {
          setLeftIndex((prev) => Math.min(CHARACTERS.length - 1, prev + 1));
        } else if (key === 'arrowright' || key === 'd') {
          setPaneFocus('right');
        } else if (key === ' ' || key === 'enter') {
          const item = CHARACTERS[leftIndex];
          setSelectedCharacter({ id: item.id, contract: item.contract });
        }
      } else {
        if (key === 'arrowup' || key === 'w') {
          setRightIndex((prev) => Math.max(0, prev - 1));
        } else if (key === 'arrowdown' || key === 's') {
          setRightIndex((prev) => Math.min(subMenuItems.length - 1, prev + 1));
        } else if (key === 'arrowleft' || key === 'a') {
          setPaneFocus('left');
        } else if (key === ' ' || key === 'enter') {
          const selected = subMenuItems[rightIndex];
          if (selected === 'Villager Creator') {
            if (onOpenVillagerCreator) {
              onOpenVillagerCreator();
            }
          } else if (selected === 'Store') {
            window.location.href = '/store';
          } else if (selected === 'Equip') {
            window.location.href = '/equip';
          } else {
            console.log(`Submenu selected: ${selected}`);
          }
        }
      }
    },
    [paneFocus, leftIndex, rightIndex, onClose, setSelectedCharacter, onOpenVillagerCreator]
  );

  useEffect(() => {
    function onWindowKeyDown(ev: KeyboardEvent) {
      handleKeyDown(ev);
    }
    window.addEventListener('keydown', onWindowKeyDown as any);
    return () => {
      window.removeEventListener('keydown', onWindowKeyDown as any);
    };
  }, [handleKeyDown]);

  function renderCharacterRow(index: number, globalIndex: number) {
    const charData = currentItems[index];
    const isSelected = globalIndex === leftIndex && paneFocus === 'left';

    const imageUrl = getCharacterImageUrl(charData.contract, charData.id);

    return (
      <div
        key={`${charData.contract}-${charData.id}`}
        className={`
          flex items-center mb-2 p-2 cursor-pointer
          ${isSelected ? 'bg-yellow-400/30 border-2 border-yellow-400 blinking-border' : 'border border-transparent'}
        `}
        onClick={() => {
          setLeftIndex(globalIndex);
          setPaneFocus('left');
        }}
      >
        <img
          src={imageUrl}
          alt={`Character ${charData.id}`}
          className="w-[40px] h-[40px] object-contain mr-4"
        />
        <div className="text-[#333d02] font-[MekMono] uppercase text-[12px]">
          {getContractLabel(charData.contract)} #{charData.id}
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
    );
  }

  function renderSubMenuItem(item: string, index: number) {
    const isSelected = index === rightIndex && paneFocus === 'right';
    return (
      <div
        key={item}
        className={`
          my-1 cursor-default text-center font-[MekMono] uppercase text-[12px]
          ${isSelected ? 'border-2 border-yellow-400 bg-yellow-400/30 blinking-border' : 'border-2 border-[#333d02] bg-white/5'}
        `}
      >
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
        {item}
      </div>
    );
  }

  function renderSelectedCharacter() {
    if (!selectedCharacter) {
      return (
        <div className="mt-1 text-center uppercase text-[12px] text-[#333d02]">
          <strong>No character selected</strong>
        </div>
      );
    }
    const label = getContractLabel(selectedCharacter.contract);
    return (
      <div className="mt-1 text-center text-[#333d02] uppercase text-[12px]">
        <strong>Currently Selected:<br/></strong> {label} #{selectedCharacter.id}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#697c01] relative">
      <div className="w-full h-full p-2 flex flex-row gap-4 overflow-hidden relative">
        {/* Left half: character list */}
        <div className="w-1/2 flex flex-col border-2 border-[#333d02]">
          <h2 className="text-center text-[#333d02] my-2 text-[12px] uppercase">
            Character Select
          </h2>
          {/* The scrollable list container */}
          <div className="flex-1 overflow-hidden px-2">
            {currentItems.map((_, idx) => {
              const globalIndex = startIndex + idx;
              return renderCharacterRow(idx, globalIndex);
            })}
          </div>
          {/* Pagination indicator */}
          <div className="blinking-title flex justify-center items-center text-[#333d02] my-2">
            <FaAngleDown />
          </div>
        </div>

        {/* Right half: sub menu */}
        <div className="w-1/2 flex flex-col p-2 text-[#333d02] border-2 border-[#333d02]">
          <h2 className="text-center mb-1 text-[12px] uppercase">
            Sub Menu
          </h2>
          {subMenuItems.map((item, i) => renderSubMenuItem(item, i))}

          {renderSelectedCharacter()}

          {/* Show selected character image right below */}
          {selectedCharacter && (
            <div className="mt-2 flex justify-center">
              <img
                src={getCharacterImageUrl(selectedCharacter.contract, selectedCharacter.id)}
                alt="Selected"
                className="w-[70px] h-[70px] object-contain border-2 border-[#333d02] bg-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;