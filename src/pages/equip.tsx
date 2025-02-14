import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useGlobalControls } from '../hooks/useGlobalControls';

const PhaserGame = dynamic(() => import('../components/PhaserGame'), { ssr: false });

export default function EquipPage() {
  const router = useRouter();

  useGlobalControls({
    onEscape: () => {
      router.push('/');
    }
  });

  const handleButtonEvent = (eventKey: string) => {
    const event = new KeyboardEvent('keydown', { key: eventKey });
    window.dispatchEvent(event);
  };

  return (
    <div className="w-screen h-screen bg-[#2d2d2d] overflow-hidden flex justify-center items-center">
      <div className="relative w-full h-full max-w-[540px] aspect-[9/16] flex items-center justify-center">
        <img
          src="/RuneBoys/shell_9_16.png"
          alt="9x16 Shell"
          className="absolute w-full h-full object-contain [image-rendering:pixelated]"
        />

        {/* Square screen area */}
        <div
          className="absolute bg-black overflow-hidden flex items-center justify-center"
          style={{
            top: '10%',
            left: '13%',
            width: '55%',
            aspectRatio: '1',
          }}
        >
          <PhaserGame />
        </div>

        {/* D-Pad Up */}
        <img
          src="/RuneBoys/up_2.png"
          alt="Up Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '40px',
            top: '60%',
            left: '12%',
          }}
          onClick={() => handleButtonEvent('ArrowUp')}
        />

        {/* D-Pad Down */}
        <img
          src="/RuneBoys/down_2.png"
          alt="Down Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '40px',
            top: '75%',
            left: '12%',
          }}
          onClick={() => handleButtonEvent('ArrowDown')}
        />

        {/* D-Pad Left */}
        <img
          src="/RuneBoys/left_2.png"
          alt="Left Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '40px',
            top: '68%',
            left: '7%',
          }}
          onClick={() => handleButtonEvent('ArrowLeft')}
        />

        {/* D-Pad Right */}
        <img
          src="/RuneBoys/right_2.png"
          alt="Right Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '40px',
            top: '68%',
            left: '17%',
          }}
          onClick={() => handleButtonEvent('ArrowRight')}
        />

        {/* D-Pad Center */}
        <img
          src="/RuneBoys/center_2.png"
          alt="Center Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '36px',
            top: '68%',
            left: '12%',
          }}
          onClick={() => handleButtonEvent('Enter')}
        />

        {/* Button A */}
        <img
          src="/RuneBoys/A_2.png"
          alt="A Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '50px',
            top: '65%',
            right: '17%',
          }}
          onClick={() => handleButtonEvent('Enter')}
        />

        {/* Button B */}
        <img
          src="/RuneBoys/B_2.png"
          alt="B Button"
          className="absolute z-10 cursor-pointer"
          style={{
            width: '50px',
            top: '72%',
            right: '27%',
          }}
          onClick={() => handleButtonEvent('Escape')}
        />

        <img
          src="/RuneBoys/select_2.png"
          alt="Select Button"
          className="absolute z-10"
          style={{
            width: '40px',
            bottom: '12%',
            left: '35%',
          }}
        />
        <img
          src="/RuneBoys/start_2.png"
          alt="Start Button"
          className="absolute z-10"
          style={{
            width: '40px',
            bottom: '12%',
            left: '45%',
          }}
        />
      </div>
    </div>
  );
}