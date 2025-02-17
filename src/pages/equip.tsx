import React from 'react';
import dynamic from 'next/dynamic';
import GameBoyLayout from '../components/layouts/GameBoyLayout';
import { useGlobalControls } from '../hooks/useGlobalControls';

// Dynamically import the actual 'EquipScreen' component
const EquipScreen = dynamic(() => import('../components/Equip/EquipScreen'), { ssr: false });

function EquipPageContent() {
  useGlobalControls({
    onEscape: () => {
      console.log('Exiting equip page...');
    },
  });

  return (
    <div style={{ width: '100%', height: '100%', color: 'white', textAlign: 'center' }}>
      <EquipScreen />
    </div>
  );
}

export default function EquipPage() {
  return (
    <GameBoyLayout>
      <EquipPageContent />
    </GameBoyLayout>
  );
}