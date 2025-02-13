import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class RuneBoyScene extends Phaser.Scene {
  private bodySprite!: Phaser.GameObjects.Sprite;
  private buttonA!: Phaser.GameObjects.Sprite;
  private buttonB!: Phaser.GameObjects.Sprite;

  constructor() {
    super('RuneBoyScene');
  }

  preload() {
    // Load body frames for idle animation
    this.load.image('body1', '/RuneBoys/original/original_body_1.png');
    this.load.image('body2', '/RuneBoys/original/original_body_2.png');

    // Load A button images
    this.load.image('A_up', '/RuneBoys/original/A_1.png');
    this.load.image('A_down', '/RuneBoys/original/A_2.png');

    // Load B button images
    this.load.image('B_up', '/RuneBoys/original/B_1.png');
    this.load.image('B_down', '/RuneBoys/original/B_2.png');
  }

  create() {
    const { width, height } = this.scale.gameSize;

    // We'll place the 'body1' as default
    // Then create an animation that toggles between body1 and body2
    this.bodySprite = this.add.sprite(width / 2, height / 2, 'body1');
    this.bodySprite.setDisplaySize(width, height);

    // Create an animation using the two separate images
    // We'll do a short trick: create animation frames by key
    this.anims.create({
      key: 'idle',
      frames: [
        { key: 'body1' },
        { key: 'body2' },
      ],
      frameRate: 2,
      repeat: -1,
    });
    this.bodySprite.play('idle');

    // Button A
    this.buttonA = this.add.sprite(width * 0.7, height * 0.7, 'A_up')
      .setInteractive({ useHandCursor: true });
    this.buttonA.on('pointerdown', () => {
      this.buttonA.setTexture('A_down');
    });
    this.buttonA.on('pointerup', () => {
      this.buttonA.setTexture('A_up');
    });
    this.buttonA.on('pointerout', () => {
      this.buttonA.setTexture('A_up');
    });

    // Button B
    this.buttonB = this.add.sprite(width * 0.8, height * 0.7, 'B_up')
      .setInteractive({ useHandCursor: true });
    this.buttonB.on('pointerdown', () => {
      this.buttonB.setTexture('B_down');
    });
    this.buttonB.on('pointerup', () => {
      this.buttonB.setTexture('B_up');
    });
    this.buttonB.on('pointerout', () => {
      this.buttonB.setTexture('B_up');
    });
  }
}

export function PhaserRuneBoy() {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const phaserGameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: gameRef.current,
      scene: [RuneBoyScene],
      backgroundColor: 'transparent',
      render: {
        pixelArt: true,
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    };

    phaserGameRef.current = new Phaser.Game(config);

    return () => {
      phaserGameRef.current?.destroy(true);
      phaserGameRef.current = null;
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