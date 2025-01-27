import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // No assets loaded
  }

  create() {
    // Empty create: remove any shapes or backgrounds
  }

  update() {
    // No updates needed
  }
}

export default function PhaserGame() {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const phaserGameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400, // Scaled-down square resolution
      height: 400, // Square resolution
      parent: gameRef.current || undefined,
      scene: [MainScene],
      backgroundColor: 'transparent',
      render: {
        pixelArt: true, // Enable crisp scaling
      },
      scale: {
        mode: Phaser.Scale.FIT, // Fit within parent container
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center the canvas
      },
    };

    phaserGameRef.current = new Phaser.Game(config);

    return () => {
      phaserGameRef.current?.destroy(true);
    };
  }, []);

  return (
    <div
      ref={gameRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}