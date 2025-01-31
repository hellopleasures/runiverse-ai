import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useGlobalControls } from '../hooks/useGlobalControls';
import Store from '../components/Shop/Store';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });

export default function StorePage() {
  const router = useRouter();

  useGlobalControls({
    onEscape: () => {
      // Return to character screen
      router.push('/');
    }
  });

  const handleClickExit = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#2d2d2d] overflow-hidden">
      {/* Outer container that holds the RuneBoy image */}
      <div className="relative h-full w-auto max-h-full aspect-[144/240] flex items-center justify-center">
        <img
          src="/RuneBoys/original.png"
          alt="Gameboy Frame"
          className="absolute h-full w-full object-contain [image-rendering:pixelated]"
        />

        {/* The screen area inside the RuneBoy image */}
        <div className="absolute top-[8%] left-[8.75%] w-[82.5%] aspect-square flex flex-col overflow-hidden bg-[#697c01] ">
          <div className="relative w-full h-full">
            <PhaserGame />
            {/* Removed the top-right exit button; rely on bottom-left or within Store */}
            <div className="absolute inset-0 flex items-start justify-center overflow-y-auto p-2 bg-[#697c01] ">
              {/* The Store component has its own exit on the left panel now */}
              <Store />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}