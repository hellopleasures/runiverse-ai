import React from 'react';
import dynamic from 'next/dynamic';
import GameBoyLayout from '../components/layouts/GameBoyLayout';
import { useGlobalControls } from '../hooks/useGlobalControls';

// Dynamically import the actual 'Store' component
const StoreComponent = dynamic(() => import('../components/Shop/Store'), { ssr: false });

function StorePageContent() {
  useGlobalControls({
    onEscape: () => {
      console.log('Exiting store page...');
    },
  });

  return (
    <div style={{ width: '100%', height: '100%', color: 'white', textAlign: 'center' }}>
      <StoreComponent />
    </div>
  );
}

export default function StorePage() {
  return (
    <GameBoyLayout>
      <StorePageContent />
    </GameBoyLayout>
  );
}