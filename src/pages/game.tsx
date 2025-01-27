import React from 'react';
import dynamic from 'next/dynamic';
import { useGlobalControls } from '../hooks/useGlobalControls';
import { useRouter } from 'next/router';

/**
 * We'll just replicate the runiverse-trail game logic locally.
 * We'll import a new "LocalGame" we copy from runiverse-trail below.
 * For demonstration, let's create "LocalGame" in src/components/Game/LocalGame.tsx
 */

const LocalGame = dynamic(() => import('../components/Game/LocalGame'), {
  ssr: false
});

export default function GamePage() {
  const router = useRouter();

  useGlobalControls({
    onEscape: () => {
      router.push('/');
    }
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#2d2d2d',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 'auto',
          height: '100%',
          maxHeight: '100%',
          aspectRatio: '144 / 240'
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
            imageRendering: 'pixelated'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '8.75%',
            width: '82.5%',
            aspectRatio: '1 / 1',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LocalGame />
        </div>
      </div>
    </div>
  );
}