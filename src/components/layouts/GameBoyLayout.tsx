import React, { useEffect } from 'react';
import { useGlobalControls } from '../../hooks/useGlobalControls';
import { useRouter } from 'next/router';

interface GameBoyLayoutProps {
  children: React.ReactNode;
  withPhaserGame?: boolean;
}

/**
 * GameBoyLayout: we replicate the 'shell_9_16.png' approach from index.tsx
 * and create an absolute 'screen' area where the content is displayed.
 * We also call useGlobalControls here so each page using this layout
 * automatically gets WASD key hooking.
 */
export default function GameBoyLayout({ children, withPhaserGame = false }: GameBoyLayoutProps) {
  const router = useRouter();

  // Attach global WASD controls (pages can override in their children if needed).
  useGlobalControls({});

  const dispatchKeyEvent = (key: string) => {
    if (key === 'Escape' && router.pathname === '/store') {
      window.dispatchEvent(new CustomEvent('gameboyBackButton'));
    } else {
      const event = new window.KeyboardEvent('keydown', { key });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#2d2d2d] overflow-hidden flex items-center justify-center">
      <div className="relative max-w-[480px] w-full aspect-[9/16]">
        {/* Shell Image */}
        <img
          src="/RuneBoys/shell_9_16.png"
          alt="Gameboy Shell 9:16"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />

        {/* "Screen" area */}
        <div
          className="absolute"
          style={{
            top: '10.2%',
            left: '10%',
            width: '81%',
            aspectRatio: '1',
            backgroundColor: 'black',
            overflow: 'hidden',
          }}
        >
          {/* Render children on top */}
          <div style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto' }}>
            {children}
          </div>
        </div>

        {/* Added Gameboy controls */}
        {/* Up Button */}
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
          onClick={() => dispatchKeyEvent('ArrowUp')}
        />

        {/* Down Button */}
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
          onClick={() => dispatchKeyEvent('ArrowDown')}
        />

        {/* Left Button */}
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
          onClick={() => dispatchKeyEvent('ArrowLeft')}
        />

        {/* Right Button */}
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
          onClick={() => dispatchKeyEvent('ArrowRight')}
        />

        {/* DPad Center */}
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
          onClick={() => dispatchKeyEvent('Enter')}
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
          onClick={() => dispatchKeyEvent('Enter')}
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
          onClick={() => dispatchKeyEvent('Escape')}
        />
      </div>
    </div>
  );
}