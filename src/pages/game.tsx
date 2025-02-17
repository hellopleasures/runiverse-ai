import React from 'react';
import GameBoyLayout from '../components/layouts/GameBoyLayout';
import { useGlobalControls } from '../hooks/useGlobalControls';

// Example placeholder content for 'game' route
function GameContent() {
  useGlobalControls({
    onEscape: () => {
      console.log('Exiting game...');
    },
  });

  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
      <h2>Game Page</h2>
      <p>This is the game route content. Press ESC to log an exit message.</p>
    </div>
  );
}

export default function GamePage() {
  return (
    <GameBoyLayout>
      <GameContent />
    </GameBoyLayout>
  );
}