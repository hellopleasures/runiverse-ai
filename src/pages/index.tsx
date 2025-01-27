import React, { useState, useEffect, KeyboardEvent } from 'react';
import dynamic from 'next/dynamic';
import CharacterSelect from '../components/CharacterSelect';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });

export default function HomePage() {
  const [showCharacterSelect, setShowCharacterSelect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Added a "Map" option
  const options = ['Start Game', 'Characters', 'Map', 'Options', 'Credits'];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toLowerCase();

      // If the character select is showing, let it handle its own keys
      if (showCharacterSelect) return;

      // If game is already started, ignore menu keys
      if (gameStarted) return;

      if (key === 'arrowup' || key === 'w') {
        setSelectedIndex(prev => (prev - 1 + options.length) % options.length);
      } else if (key === 'arrowdown' || key === 's') {
        setSelectedIndex(prev => (prev + 1) % options.length);
      } else if (key === ' ' || key === 'enter' || key === 'e') {
        const currentOption = options[selectedIndex];
        if (currentOption === 'Start Game') {
          setGameStarted(true);
        } else if (currentOption === 'Characters') {
          setShowCharacterSelect(true);
        } else if (currentOption === 'Map') {
          window.location.href = '/map';
        } else {
          console.log(`Selected: ${currentOption}`);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [showCharacterSelect, gameStarted, selectedIndex, options]);

  const renderMenu = () => (
    <div
      style={{
        display: 'inline-block',
        border: '2px solid #333',
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      {options.map((option, index) => (
        <div
          key={option}
          style={{
            fontWeight: selectedIndex === index ? 'bold' : 'normal',
            margin: '0.3rem 0',
            color: '#fff',
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d2d2d',
        overflow: 'hidden',
      }}
    >
      {/* Outer container that holds the RuneBoy image */}
      <div
        style={{
          position: 'relative',
          width: 'auto',
          height: '100%',
          maxHeight: '100%',
          aspectRatio: '144 / 240', // The aspect of the entire "Gameboy" container
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* The RuneBoy image scales up to fill the parent container, with pixelated style */}
        <img
          src="/RuneBoys/original.png"
          alt="Gameboy Frame"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            imageRendering: 'pixelated',
          }}
        />

        {/* The screen area inside the RuneBoy image */}
        <div
          style={{
            position: 'absolute',
            top: '8%',       
            left: '8.75%',    
            width: '82.5%',
            aspectRatio: '1 / 1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#000',
          }}
        >
          {showCharacterSelect && (
            <CharacterSelect onClose={() => setShowCharacterSelect(false)} />
          )}

          {gameStarted && !showCharacterSelect && <PhaserGame />}

          {!gameStarted && !showCharacterSelect && renderMenu()}
        </div>
      </div>
    </div>
  );
}