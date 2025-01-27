import React, { useState, useEffect, KeyboardEvent } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components that reference window or rely on SSR-problematic logic
const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });
const CharacterSelect = dynamic(() => import('../components/CharacterSelect'), { ssr: false });
const RuniverseMap = dynamic(() => import('../components/RuniverseMap'), { ssr: false });
const CharacterCreation = dynamic(() => import('../components/Game/CharacterCreation'), { ssr: false });
const GameInterface = dynamic(() => import('../components/Game/GameInterface'), { ssr: false });

import { useGlobalControls } from '../hooks/useGlobalControls';

export default function HomePage() {
  // Menu navigation
  const [showCharacterSelect, setShowCharacterSelect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Overlays
  const [showMap, setShowMap] = useState(false);
  const [showCharacterCreation, setShowCharacterCreation] = useState(false);
  const [showGameInterface, setShowGameInterface] = useState(false);

  // Menu items
  const options = [
    'Start Game',
    'Characters',
    'Character Creation',
    'Game Interface',
    'Map',
    'Options',
    'Credits',
  ];

  // Keyboard selection logic
  useEffect(() => {
    // On the server, window is undefined
    if (typeof window === 'undefined') return;

    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toLowerCase();

      // If ANY overlay is open, skip menu navigation
      if (showCharacterSelect || showMap || showCharacterCreation || showGameInterface || gameStarted) {
        return;
      }

      if (key === 'arrowup' || key === 'w') {
        setSelectedIndex(prev => (prev - 1 + options.length) % options.length);
      } else if (key === 'arrowdown' || key === 's') {
        setSelectedIndex(prev => (prev + 1) % options.length);
      } else if (key === ' ' || key === 'enter' || key === 'e') {
        const currentOption = options[selectedIndex];
        switch (currentOption) {
          case 'Start Game':
            setGameStarted(true);
            break;
          case 'Characters':
            setShowCharacterSelect(true);
            break;
          case 'Map':
            setShowMap(true);
            break;
          case 'Character Creation':
            setShowCharacterCreation(true);
            break;
          case 'Game Interface':
            setShowGameInterface(true);
            break;
          default:
            console.log(`Selected: ${currentOption}`);
            break;
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown as any);
    return () => {
      window.removeEventListener('keydown', handleKeyDown as any);
    };
  }, [
    selectedIndex, 
    options, 
    showCharacterSelect,
    showMap,
    showCharacterCreation,
    showGameInterface,
    gameStarted
  ]);

  // For closure via ESC in each overlay
  useGlobalControls({
    onEscape: () => {
      // If an overlay is open, close it first
      if (showCharacterSelect) setShowCharacterSelect(false);
      else if (showMap) setShowMap(false);
      else if (showCharacterCreation) setShowCharacterCreation(false);
      else if (showGameInterface) setShowGameInterface(false);
      else if (gameStarted) setGameStarted(false);
    }
  });

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
      <div
        style={{
          position: 'relative',
          width: 'auto',
          height: '100%',
          maxHeight: '100%',
          aspectRatio: '144 / 240',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
          {/* MAIN MENU RENDER */}
          {!gameStarted &&
            !showCharacterSelect &&
            !showMap &&
            !showCharacterCreation &&
            !showGameInterface &&
            renderMenu()}

          {/* PHASER GAME (Start Game) */}
          {gameStarted && !showCharacterSelect && !showMap && !showCharacterCreation && !showGameInterface && (
            <PhaserGame />
          )}

          {/* Character Select Overlay */}
          {showCharacterSelect && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.75)',
              }}
            >
              <CharacterSelect onClose={() => setShowCharacterSelect(false)} />
            </div>
          )}

          {/* MAP Overlay */}
          {showMap && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RuniverseMap
                onClose={() => setShowMap(false)}
                width={50}
                height={40}
                gridSize={32}
              />
            </div>
          )}

          {/* Character Creation Overlay */}
          {showCharacterCreation && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.85)',
                overflowY: 'auto',
              }}
            >
              <CharacterCreation />
            </div>
          )}

          {/* Game Interface Overlay */}
          {showGameInterface && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.85)',
                overflowY: 'auto',
              }}
            >
              <GameInterface
                storyText="Placeholder story text. Press ESC to close."
                options={[
                  { optionText: 'Option A', nextStep: 'a' },
                  { optionText: 'Option B', nextStep: 'b' },
                ]}
                continueAvailable
                onOptionClick={(step) => console.log('Clicked step:', step)}
                onContinue={() => console.log('Continue clicked')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}