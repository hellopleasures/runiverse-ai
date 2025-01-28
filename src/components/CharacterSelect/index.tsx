import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { useRouter } from 'next/router';
// We'll assume there's a global controls hook to unify D-Pad / WASD usage
import { useGlobalControls } from '../../hooks/useGlobalControls';

const WIZARD_CONTRACT = '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42';
const WARRIOR_CONTRACT = '0x9690b63eb85467be5267a3603f770589ab12dc95';
const BABY_CONTRACT = '0x4b1e130ae84c97b931ffbe91ead6b1da16993d45';
const SOUL_CONTRACT = '0x251b5f14a825c537ff788604ea1b58e49b70726f';

const CHARACTERS = [
  { id: '1', contract: WIZARD_CONTRACT },
  { id: '2', contract: WIZARD_CONTRACT },
  { id: '10', contract: WARRIOR_CONTRACT },
  { id: '42', contract: BABY_CONTRACT },
  { id: '99', contract: SOUL_CONTRACT },
  { id: '100', contract: WIZARD_CONTRACT },
  { id: '101', contract: WIZARD_CONTRACT },
  { id: '102', contract: WARRIOR_CONTRACT },
  { id: '103', contract: BABY_CONTRACT },
  { id: '104', contract: SOUL_CONTRACT },
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
        onClick={() => {
          setLeftIndex(globalIndex);
          setPaneFocus('left');
        }}
        className={`
          flex items-center mb-2 px-2 py-1 cursor-pointer border-2
          ${isSelected ? 'border-yellow-400 bg-yellow-300/20' : 'border-transparent bg-transparent'}
          transition-colors
        `}
      >
        <img
          src={imageUrl}
          alt={`Character ${charData.id}`}
          className="w-10 h-10 object-contain mr-2"
        />
        <div className="text-white text-sm">
          {getContractLabel(charData.contract)} #{charData.id}
        </div>
      </div>
    );
  }

  function renderSubMenuItem(item: string, index: number) {
    const isSelected = index === rightIndex && paneFocus === 'right';
    return (
      <div
        key={item}
        className={`
          mb-1 px-2 py-1 text-sm cursor-default border
          ${isSelected ? 'border-yellow-400 bg-yellow-300/20' : 'border-gray-600 bg-gray-700/20'}
        `}
      >
        {item}
      </div>
    );
  }

  function renderSelectedCharacter() {
    if (!selectedCharacter) {
      return <div className="mt-2 text-sm font-bold">No character selected</div>;
    }
    const label = getContractLabel(selectedCharacter.contract);
    return (
      <div className="mt-2 text-sm">
        <strong>Currently Selected:</strong> {label} #{selectedCharacter.id}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-900 to-black">
      <div
        className="w-11/12 h-5/6 max-w-4xl border-4 border-gray-200 bg-gray-900
                   flex flex-row overflow-hidden"
      >
        {/* Left Pane: Character list */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-center text-white mt-2 mb-2 text-xl font-bold font-ocra">
            Character Select
          </h2>
          <div className="flex-1 overflow-y-auto px-2">
            {currentItems.map((_, idx) => {
              const globalIndex = startIndex + idx;
              return renderCharacterRow(idx, globalIndex);
            })}
          </div>
          <div className="text-center text-white my-2 text-sm">
            Page {currentPage + 1} / {totalPages}
          </div>
        </div>

        {/* Right Pane: Sub menu */}
        <div className="flex-1 border-l border-white flex flex-col p-2 text-white">
          <h2 className="text-center text-lg mb-2 font-bold font-ocra">Sub Menu</h2>
          <div className="flex flex-col">
            {subMenuItems.map((item, i) => renderSubMenuItem(item, i))}
          </div>
          {renderSelectedCharacter()}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;