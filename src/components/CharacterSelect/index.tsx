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

const WIZARD_CONTRACT = '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42';
const WARRIOR_CONTRACT = '0x9690b63eb85467be5267a3603f770589ab12dc95';
const BABY_CONTRACT = '0x4b1e130ae84c97b931ffbe91ead6b1da16993d45';
const SOUL_CONTRACT = '0x251b5f14a825c537ff788604ea1b58e49b70726f';

const CHARACTERS = [
  { id: '1', contract: WIZARD_CONTRACT },
  { id: '2', contract: WIZARD_CONTRACT },
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
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          backgroundColor: isSelected ? 'rgba(255,215,0,0.3)' : 'transparent',
          border: isSelected ? '2px solid #FFD700' : '2px solid transparent',
          cursor: 'pointer',
        }}
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
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            marginRight: '1rem',
          }}
        />
        <div style={{ color: '#fff' }}>
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
        style={{
          margin: '0.5rem 0',
          border: isSelected ? '2px solid #FFD700' : '1px solid #666',
          padding: '0.5rem',
          cursor: 'default',
          backgroundColor: isSelected
            ? 'rgba(255,215,0,0.3)'
            : 'rgba(255,255,255,0.05)',
        }}
      >
        {item}
      </div>
    );
  }

  function renderSelectedCharacter() {
    if (!selectedCharacter) {
      return (
        <div style={{ marginTop: '1rem' }}>
          <strong>No character selected</strong>
        </div>
      );
    }
    const label = getContractLabel(selectedCharacter.contract);
    return (
      <div style={{ marginTop: '1rem' }}>
        <strong>Currently Selected:</strong> {label} #{selectedCharacter.id}
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          height: '90%',
          background: 'rgba(0,0,0,0.8)',
          border: '2px solid #FFF',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
        }}
      >
        {/* Left half: character list */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              color: '#fff',
              margin: '1rem 0',
            }}
          >
            Character Select
          </h2>
          {/* The scrollable list container */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '0 1rem',
            }}
          >
            {currentItems.map((_, idx) => {
              const globalIndex = startIndex + idx;
              return renderCharacterRow(idx, globalIndex);
            })}
          </div>

          {/* Pagination */}
          <div style={{ textAlign: 'center', color: '#fff', margin: '0.5rem' }}>
            Page {currentPage + 1} / {totalPages}
          </div>
        </div>

        {/* Right half: sub menu */}
        <div
          style={{
            flex: 1,
            borderLeft: '1px solid #fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            color: '#fff',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
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