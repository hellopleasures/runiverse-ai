import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

/**
 * Dynamically import PhaserGame so we can optionally render it.
 * If we want to show the Phaser background behind child content,
 * we can pass a prop like `withPhaserGame` to this layout.
 */
const PhaserGame = dynamic(() => import('../../components/PhaserGame'), {
  ssr: false,
});

/**
 * A simple hook to detect if the screen is portrait or not,
 * also used to handle phone vs. desktop approximations.
 */
function useIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    function checkOrientation() {
      setIsPortrait(window.innerHeight >= window.innerWidth);
    }
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return isPortrait;
}

interface GameBoyLayoutProps {
  children: React.ReactNode;
  withPhaserGame?: boolean;
}

/**
 * GameBoyLayout: 
 * - If device is portrait or narrower, we show a “Game Boy” frame aspect (like phone).
 * - If device is wider, we fill horizontally but maintain the same scale for the “screen”.
 * - Optionally renders PhaserGame behind the children if withPhaserGame is true.
 */
export default function GameBoyLayout({ children, withPhaserGame = false }: GameBoyLayoutProps) {
  const isPortrait = useIsPortrait();

  /**
   * For scaling logic:
   *  - If isPortrait, the layout is a narrower aspect ratio, so we keep the classic "tall" game boy.
   *  - If not portrait, we allow more horizontal space but maintain shape. 
   * 
   * We'll achieve this by:
   *    container:  display: flex, justify center
   *    internal:   aspect ratio ~ 144/240 if portrait, or a bigger container if wide.
   */
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // For mobile, fill screen; for desktop, fill more width up to some ratio
    width: '100%',
    height: '100vh',
    backgroundColor: '#2d2d2d',
    overflow: 'hidden',
  };

  /**
   * We'll define the aspect ratio for the "device" portion (the Game Boy shape).
   * Classic ratio is about 160 wide x 144 tall, but the user code used 144 wide x 240 tall.
   * We'll keep that as is for consistency with the user's code. 
   * 
   * We'll do a bounding box that either:
   * - Takes full phone screen if in portrait 
   * - Grows horizontally if wide. 
   */
  const gameBoyOuterStyle: React.CSSProperties = {
    position: 'relative',
    // We'll allow some dynamic sizing
    width: isPortrait ? 'auto' : '60%',   // if wide, use 60% of width
    height: isPortrait ? '100%' : 'auto', // if portrait, use full height
    maxHeight: '100%', 
    aspectRatio: '144 / 240', // the image's ratio
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  /**
   * The "screen" area inside the game boy. The user code used 
   *   top: 8%, left: 8.75%, width: 82.5%, aspectRatio: 1/1 
   */
  const screenWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: '8%',
    left: '8.75%',
    width: '82.5%',
    aspectRatio: '1 / 1',
    backgroundColor: '#000',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <div style={gameBoyOuterStyle}>
        {/* Game Boy frame image in absolute position, scaled to container. */}
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

        {/* The "screen" area - optional phaser game behind child content. */}
        <div style={screenWrapperStyle}>
          {withPhaserGame && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <PhaserGame />
            </div>
          )}
          
          {/* We place children on top of the phaser game if present */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              // We keep a small transparent background so child content is visible
              backgroundColor: withPhaserGame ? 'rgba(0,0,0,0.5)' : 'transparent',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}