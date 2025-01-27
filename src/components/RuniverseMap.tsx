import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

// Hypothetical map scene adapted from runiverse-trail's map

class MapScene extends Phaser.Scene {
  constructor() {
    super('MapScene');
  }

  preload() {
    // load tilemap, tileset, player sprite, etc. 
    // e.g. this.load.image('tiles', 'path/to/tiles.png');
    // this.load.tilemapTiledJSON('map', 'path/to/map.json');
  }

  create() {
    // create tilemap, layers, etc.
    // this.make.tilemap({ key: 'map' });
    // ...
  }

  update() {
    // update logic
  }
}

export default function RuniverseMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: mapRef.current || undefined,
      scene: [MapScene],
      backgroundColor: 'black',
      render: {
        pixelArt: true
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    };

    gameRef.current = new Phaser.Game(config);
    return () => {
      gameRef.current?.destroy(true);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
}