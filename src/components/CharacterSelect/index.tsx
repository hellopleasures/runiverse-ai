import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { useRouter } from 'next/router';
import { useGlobalControls } from '../../hooks/useGlobalControls';
import { FaAngleDown } from "react-icons/fa";

const WIZARD_CONTRACT = '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42';
const WARRIOR_CONTRACT = '0x9690b63eb85467be5267a3603f770589ab12dc95';
const BABY_CONTRACT = '0x4b1e130ae84c97b931ffbe91ead6b1da16993d45';
const SOUL_CONTRACT = '0x251b5f14a825c537ff788604ea1b58e49b70726f';

const CHARACTERS = [
  { id: '1', contract: WIZARD_CONTRACT },
  { id: '7889', contract: WIZARD_CONTRACT },
  { id: '10', contract: WARRIOR_CONTRACT },
  { id: '42', contract: BABY_CONTRACT },
  { id: '16', contract: SOUL_CONTRACT },
  { id: '100', contract: WIZARD_CONTRACT },
  { id: '101', contract: WIZARD_CONTRACT },
  { id: '102', contract: WARRIOR_CONTRACT },
  { id: '103', contract: BABY_CONTRACT },
  { id: '16', contract: SOUL_CONTRACT },
  { id: '105', contract: WIZARD_CONTRACT },
  { id: '106', contract: WIZARD_CONTRACT },
];

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

interface CharacterSelectProps {
  onClose: () => void;
}

const subMenuItems = [
  'Mint new character',
  'Items',
  'Store',
  'Edit Character',
  'Character Page',
  'Equip',
];

type PaneFocus = 'left' | 'right';

const CharacterSelect: FC<CharacterSelectProps> = ({ onClose }) => {
  const { setSelectedCharacter, selectedCharacter } = useCharacter();
  const router = useRouter();

  const [paneFocus, setPaneFocus] = useState<PaneFocus>('left');
  const [leftIndex, setLeftIndex] = useState(0);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(CHARACTERS.length / itemsPerPage);
  const currentPage = Math.floor(leftIndex / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = CHARACTERS.slice(startIndex, endIndex);

  const [rightIndex, setRightIndex] = useState(0);

  // Use a global controls hook that can unify WASD/dpad
  useGlobalControls({
    onEscape: onClose
  });

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
          if (selected === 'Mint new character') {
            router.push('/villager-creator');
          } else if (selected === 'Store') {
            router.push('/store');
          } else if (selected === 'Equip') {
            router.push('/equip');
          } else {
            console.log(`Submenu selected: ${selected}`);
          }
        }
      }
    },
    [paneFocus, leftIndex, rightIndex, onClose, setSelectedCharacter, router]
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
    let imageUrl = '/assets/no-image.png';

    switch (charData.contract.toLowerCase()) {
      case WIZARD_CONTRACT.toLowerCase():
        imageUrl = `https://www.forgottenrunes.com/api/art/wizards/${charData.id}.png`;
        break;
      case WARRIOR_CONTRACT.toLowerCase():
        imageUrl = `https://portal.forgottenrunes.com/api/warriors/img/${charData.id}.png`;
        break;
      case BABY_CONTRACT.toLowerCase():
        imageUrl = `https://www.forgottenrunes.com/api/art/wizards/${charData.id}.png`;
        break;
      case SOUL_CONTRACT.toLowerCase():
        imageUrl = `https://portal.forgottenrunes.com/api/souls/img/${charData.id}`;
        break;
    }

    return (
      <div
        key={`${charData.contract}-${charData.id}`}
        className={`
          flex items-center mb-2 p-2 cursor-pointer
          ${isSelected ? 'bg-yellow-400/30 border-4 border-yellow-400 blinking-border' : 'border border-transparent'}
        `}
        onClick={() => {
          setLeftIndex(globalIndex);
          setPaneFocus('left');
        }}
      >
        <img
          src={imageUrl}
          alt={`Character ${charData.id}`}
          className="w-[60px] h-[60px] object-contain mr-4"
        />
        <div className="text-[#333d02] font-[MekMono] uppercase text-xl">
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
          my-2 p-2 cursor-default text-center font-[MekMono] uppercase text-xl
          ${isSelected ? 'border-4 border-yellow-400 bg-yellow-400/30 blinking-border' : 'border-4 border-[#333d02] bg-white/5'}
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
        <div className="mt-4">
          <strong>No character selected</strong>
        </div>
      );
    }
    const label = getContractLabel(selectedCharacter.contract);
    return (
      <div className="text-[#333d02] uppercase text-lg text-center">
        <strong>Currently Selected:<br/></strong> {label} #{selectedCharacter.id}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#697c01]">
      <div className="w-[90%] h-[90%]  flex flex-row gap-8 overflow-hidden">
        {/* Left half: character list */}
        <div className="w-1/2 flex flex-col border-4 border-[#333d02]">
          <h2 className="text-center text-[#333d02] my-4 text-xl uppercase">
            Character Select
          </h2>
          {/* The scrollable list container */}
          <div className="flex-1 overflow-hidden px-4">
            {currentItems.map((_, idx) => {
              const globalIndex = startIndex + idx;
              return renderCharacterRow(idx, globalIndex);
            })}
          </div>

          {/* Pagination */}
          <div className="blinking-title flex justify-center items-center text-[#333d02] my-2" >
          <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        .blinking-title {
          animation: blink 1.5s ease-in-out infinite;
        }
      `}</style>
          < FaAngleDown />
          </div>
        </div>

        {/* Right half: sub menu */}
        <div className="w-1/2 flex flex-col p-4 text-[#333d02] border-4 border-[#333d02]">
          <h2 className="text-center mb-4 text-xl uppercase">
            Sub Menu
          </h2>
          {/* Submenu items */}
          {subMenuItems.map((item, i) => renderSubMenuItem(item, i))}

          {/* Display currently selected character info */}
          {renderSelectedCharacter()}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;