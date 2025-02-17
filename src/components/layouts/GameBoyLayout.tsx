import React, { useEffect } from 'react';
import { useGlobalControls } from '../../hooks/useGlobalControls';

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
  // Attach global WASD controls (pages can override in their children if needed).
  useGlobalControls({});

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
            top: '14%',
            left: '10%',
            width: '80%',
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
      </div>
    </div>
  );
}