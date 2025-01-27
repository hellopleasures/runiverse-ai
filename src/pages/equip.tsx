import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useGlobalControls } from '../hooks/useGlobalControls';
import EquipScreen from '../components/Equip/EquipScreen';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });

export default function EquipPage() {
  const router = useRouter();

  useGlobalControls({
    onEscape: () => {
      router.push('/');
    }
  });

  const handleClickExit = useCallback(() => {
    router.push('/');
  }, [router]);

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
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#000',
          }}
        >
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <PhaserGame />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                padding: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                <button
                  onClick={handleClickExit}
                  style={{
                    backgroundColor: '#900',
                    color: '#fff',
                    border: 'none',
                    padding: '0.3rem 0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  Exit
                </button>
              </div>
              <EquipScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}