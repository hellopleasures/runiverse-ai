import React, { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import dynamic from 'next/dynamic';
import { useGlobalControls } from '../hooks/useGlobalControls';
import { RoninConnectButton } from '../components/RoninConnectButton';
import { RoninExtensionConnectButton } from '../components/RoninExtensionConnectButton';

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

  // Menu items
  const options = [
    'Start Game',
    'Characters',
    'Character Creation',
    'Runiverse Adventure',
    'Mint',
    'Map',
    'Connect',
    'Credits', // replaced by RoninExtensionConnectButton
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
          case 'Connect':
            // "Connect" => already handled by the RoninConnectButton onClick
            break;
          case 'Credits':
            // "Credits" => replaced by extension connect button
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
      <div className="inline-block border-2 border-[#333] w-full h-full p-2 bg-[url('/img/background.png')] bg-cover bg-center items-center">
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
            {options.map((option, index) => {
              const isSelected = selectedIndex === index;

              // If the item is "Connect" => show the RoninConnectButton
              if (option === 'Connect') {
                return (
                  <div
                    key="connect"
                    className={`m-[0.3rem_0] w-1/2 flex justify-center items-center ${
                      isSelected ? 'blinking-title text-yellow-400' : 'text-white'
                    }`}
                  >
                    <RoninConnectButton />
                  </div>
                );
              }

              // If the item is "Credits" => show the RoninExtensionConnectButton
              if (option === 'Credits') {
                return (
                  <div
                    key="credits"
                    className={`m-[0.3rem_0] w-1/2 flex justify-center items-center ${
                      isSelected ? 'blinking-title text-yellow-400' : 'text-white'
                    }`}
                  >
                    <RoninExtensionConnectButton />
                  </div>
                );
              }

              // Otherwise show normal text
              return (
                <div
                  key={option}
                  className={`
                    m-[0.3rem_0] uppercase text-[16px] flex justify-center items-center font-['MekMono'] w-1/2
                    ${isSelected ? 'font-bold text-yellow-400 blinking-title' : 'text-white'}
                  `}
                >
                  {option}
                </div>
              );
            })}
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
    <div className="w-screen h-screen bg-[#2d2d2d] overflow-hidden flex items-center justify-center">
      <div className="relative max-w-[480px] w-full aspect-[9/16]">
        <img
          src="/RuneBoys/shell_9_16.png"
          alt="Gameboy Shell 9:16"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />

        <div
          className="absolute"
          style={{
            top: '10%',
            left: '7%',
            width: '86%',
            aspectRatio: '1',
            backgroundColor: 'black',
            overflow: 'hidden',
          }}
        >
          {!gameStarted &&
            !showCharacterSelect &&
            !showMap &&
            !showCharacterCreation &&
            !showAdventure &&
            !showMint &&
            !showVillagerCreator &&
            renderMenu()}

          {gameStarted &&
            !showCharacterSelect &&
            !showMap &&
            !showCharacterCreation &&
            !showAdventure &&
            !showMint &&
            !showVillagerCreator && (
              <PhaserRuneBoy />
          )}

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

        {/* Up */}
        <img
          src="/RuneBoys/up_2.png"
          alt="Up Button"
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '9.1%',
            top: '73.2%',
            left: '15.8%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new window.KeyboardEvent('keydown', { key: 'ArrowUp' });
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
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '10.4%',
            top: '83.5%',
            left: '15.8%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new window.KeyboardEvent('keydown', { key: 'ArrowDown' });
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
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '12.1%',
            top: '79%',
            left: '5%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new window.KeyboardEvent('keydown', { key: 'ArrowLeft' });
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
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '10.8%',
            top: '79%',
            left: '24.8%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            if (anyOverlayOpen) {
              const event = new window.KeyboardEvent('keydown', { key: 'ArrowRight' });
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
            top: '79%',
            left: '17%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new window.KeyboardEvent('keydown', { key: 'Enter' });
            window.dispatchEvent(event);
          }}
        />

        {/* Button A */}
        <img
          src="/RuneBoys/A_2.png"
          alt="A Button"
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '12%',
            top: '72%',
            right: '15%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new window.KeyboardEvent('keydown', { key: 'Enter' });
            window.dispatchEvent(event);
          }}
        />

        {/* Button B */}
        <img
          src="/RuneBoys/B_2.png"
          alt="B Button"
          className="absolute z-10 cursor-pointer hover:scale-105 active:scale-95 active:brightness-90 transition-all duration-150"
          style={{
            width: '12%',
            top: '77%',
            right: '35%',
            imageRendering: 'pixelated',
          }}
          onClick={() => {
            const event = new window.KeyboardEvent('keydown', { key: 'Escape' });
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
            bottom: '5%',
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
            bottom: '5%',
            left: '52%',
            imageRendering: 'pixelated',
          }}
        />
      </div>
    </div>
  );
}