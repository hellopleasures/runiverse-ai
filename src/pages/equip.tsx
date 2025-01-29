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
    <div className="w-full h-screen flex justify-center items-center bg-[#2d2d2d] overflow-hidden">
      <div className="relative h-full w-auto aspect-[144/240] flex justify-center items-center">
        <img
          src="/RuneBoys/original.png"
          alt="Gameboy Frame"
          className="absolute w-full h-full object-contain [image-rendering:pixelated]"
        />
        <div className="absolute top-[8%] left-[8.75%] w-[82.5%] aspect-square flex flex-col overflow-hidden bg-black">
          <div className="w-full h-full relative">
            <PhaserGame />
            <div className="absolute inset-0 overflow-y-auto p-2 flex justify-center items-start bg-[#697c01]">
              <div className="absolute top-2 right-2">
                <button
                  onClick={handleClickExit}
                  className="bg-[#900] text-white border-none px-3 py-1 cursor-pointer"
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