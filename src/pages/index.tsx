import React, { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import dynamic from 'next/dynamic';
import { useGlobalControls } from '../hooks/useGlobalControls';

// Dynamic imports
const PhaserRuneBoy = dynamic(() => import('../components/Game/PhaserRuneBoy').then(mod => mod.PhaserRuneBoy), { ssr: false });
const RuniverseAdventure = dynamic(() => import('../components/Game/RuniverseAdventure'), { ssr: false });
const CharacterSelect = dynamic(() => import('../components/CharacterSelect'), { ssr: false });
const Mint = dynamic(() => import('../components/Mint'), { ssr: false });
const RuniverseMap = dynamic(() => import('../components/RuniverseMap'), { ssr: false });
const CharacterCreation = dynamic(() => import('../components/Game/CharacterCreation'), { ssr: false });
const VillagerCreator = dynamic(() => import('../components/VillagerCreator'), { ssr: false });

export default function HomePage() {
  // Main menu state
  const [showCharacterSelect, setShowCharacterSelect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Overlays
  const [showMap, setShowMap] = useState(false);
  const [showCharacterCreation, setShowCharacterCreation] = useState(false);
  const [showAdventure, setShowAdventure] = useState(false);
  const [showMint, setShowMint] = useState(false);
  const [showVillagerCreator, setShowVillagerCreator] = useState(false);

  const options = [
    'Start Game',
    'Characters',
    'Character Creation',
    'Runiverse Adventure',
    'Mint',
    'Map',
    'Options',
    'Credits',
  ];

  // Handle keyboard for main menu
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleKeyDown(e: KeyboardEvent) {
      // If any overlay is open, skip main menu key handling
      if (
        showCharacterSelect ||
        showMap ||
        showCharacterCreation ||
        showAdventure ||
        gameStarted ||
        showVillagerCreator ||
        showMint
      ) {
        return;
      }

      const key = e.key.toLowerCase();
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
          case 'Character Creation':
            setShowCharacterCreation(true);
            break;
          case 'Runiverse Adventure':
            setShowAdventure(true);
            break;
          case 'Mint':
            setShowMint(true);
            break;
          case 'Map':
            setShowMap(true);
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
    showAdventure,
    showMint,
    gameStarted,
    showVillagerCreator
  ]);

  // Use the global WASD controls to handle ESC for overlays
  useGlobalControls({
    onEscape: () => {
      if (showVillagerCreator) {
        setShowVillagerCreator(false);
      } else if (showCharacterSelect) {
        setShowCharacterSelect(false);
      } else if (showMap) {
        setShowMap(false);
      } else if (showCharacterCreation) {
        setShowCharacterCreation(false);
      } else if (showAdventure) {
        setShowAdventure(false);
      } else if (showMint) {
        setShowMint(false);
      } else if (gameStarted) {
        setGameStarted(false);
      }
    },
  });

  // Helper to render the main menu
  function renderMenu() {
    return (
      <div className="inline-block border-2 border-[#333] w-full items-center h-full p-2 bg-[url('/img/background.png')] bg-cover bg-center">
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

        <div className="h-full mx-auto w-[90%] flex items-end">
          <div className="flex flex-row justify-center items-center flex-wrap">
            {options.map((option, index) => (
              <div
                key={option}
                className={`m-[0.3rem_0] uppercase text-[16px] flex justify-center items-center font-['MekMono'] w-1/2
                  ${selectedIndex === index ? 'font-bold text-yellow-400 blinking-title' : 'text-white'}
                `}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Are any overlays open?
  const anyOverlayOpen =
    showCharacterSelect ||
    showMap ||
    showCharacterCreation ||
    showAdventure ||
    gameStarted ||
    showVillagerCreator ||
    showMint;

  return (
    <div className="w-screen h-screen bg-[#2d2d2d] overflow-hidden flex justify-center items-center">
      {/*
        Outer container:
        Force 9:16 aspect ratio for the shell, scale it to fit the screen,
        center it with a max width so it remains crisp.
      */}
      <div className="relative max-w-[480px] w-full h-full aspect-[9/16] flex items-center justify-center">
        {/* The shell image as the background */}
        <img
          src="/RuneBoys/shell_9_16.png"
          alt="Gameboy Shell 9:16"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />

        {/*
          The "screen" area inside the shell:
          We'll approximate the position so it lines up with the black area on shell_9_16.png
          (making it bigger so it takes more of the grey area).
        */}
        <div
          className="absolute"
          style={{
            top: '15%',
            left: '6%',
            width: '88%',
            aspectRatio: '1',
            backgroundColor: 'black',
            overflow: 'hidden',
          }}
        >
          {/* If no overlay => show main menu. Otherwise, show the relevant overlay or game. */}
          {!gameStarted &&
            !showCharacterSelect &&
            !showMap &&
            !showCharacterCreation &&
            !showAdventure &&
            !showMint &&
            !showVillagerCreator &&
            renderMenu()
          }

          {gameStarted &&
            !showCharacterSelect &&
            !showMap &&
            !showCharacterCreation &&
            !showAdventure &&
            !showMint &&
            !showVillagerCreator && (
              <PhaserRuneBoy />
          )}

          {/* Overlays */}
          {showCharacterSelect && (
            <div className="absolute inset-0 bg-black/75">
              <CharacterSelect
                onClose={() => setShowCharacterSelect(false)}
                onOpenVillagerCreator={() => {
                  setShowVillagerCreator(true);
                  setShowCharacterSelect(false);
                }}
              />
            </div>
          )}
          {showMap && (
            <div className="absolute inset-0 bg-black/75 flex justify-center items-center">
              <RuniverseMap
                onClose={() => setShowMap(false)}
                width={50}
                height={40}
                gridSize={32}
              />
            </div>
          )}
          {showCharacterCreation && (
            <div className="absolute inset-0 bg-black/85 overflow-y-auto">
              <CharacterCreation />
            </div>
          )}
          {showAdventure && (
            <div className="absolute inset-0 bg-black/85">
              <RuniverseAdventure />
            </div>
          )}
          {showMint && (
            <div className="absolute inset-0 bg-black/85">
              <Mint />
            </div>
          )}
          {showVillagerCreator && (
            <div className="absolute inset-0 bg-black/85">
              <VillagerCreator onClose={() => setShowVillagerCreator(false)} />
            </div>
          )}
        </div>

        {/* DPAD / A / B / Select / Start */}
        {/* Up */}
        <img
          src="/RuneBoys/up_2.png"
          alt="Up Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            top: '65%',
            left: '16%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
              window.dispatchEvent(event);
            } else {
              setSelectedIndex(prev => (prev - 1 + options.length) % options.length);
            }
          }}
        />

        {/* Down */}
        <img
          src="/RuneBoys/down_2.png"
          alt="Down Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            top: '72%',
            left: '16%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
              window.dispatchEvent(event);
            } else {
              setSelectedIndex(prev => (prev + 1) % options.length);
            }
          }}
        />

        {/* Left */}
        <img
          src="/RuneBoys/left_2.png"
          alt="Left Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            top: '69%',
            left: '8%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
              window.dispatchEvent(event);
            } else {
              setSelectedIndex(prev => (prev - 1 + options.length) % options.length);
            }
          }}
        />

        {/* Right */}
        <img
          src="/RuneBoys/right_2.png"
          alt="Right Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            top: '69%',
            left: '25%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
              window.dispatchEvent(event);
            } else {
              setSelectedIndex(prev => (prev + 1) % options.length);
            }
          }}
        />

        {/* DPad center */}
        <img
          src="/RuneBoys/center_2.png"
          alt="DPad Center"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '8%',
            top: '69%',
            left: '17%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            window.dispatchEvent(event);
          }}
        />

        {/* Button A - moved down */}
        <img
          src="/RuneBoys/A_2.png"
          alt="A Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '12%',
            top: '67%',
            right: '17%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            window.dispatchEvent(event);
          }}
        />

        {/* Button B - moved down */}
        <img
          src="/RuneBoys/B_2.png"
          alt="B Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '12%',
            top: '74%',
            right: '25%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'Escape' });
            window.dispatchEvent(event);
          }}
        />

        {/* Select */}
        <img
          src="/RuneBoys/select_2.png"
          alt="Select Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            bottom: '12%',
            left: '38%',
            imageRendering: 'pixelated',
          }}
        />

        {/* Start */}
        <img
          src="/RuneBoys/start_2.png"
          alt="Start Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '10%',
            bottom: '12%',
            left: '52%',
            imageRendering: 'pixelated',
          }}
        />
      </div>
    </div>
  );
}