import Phaser from 'phaser';

/**
 * RuneBoyScene:
 * A basic Phaser scene that loads a RuneBoy background image
 * and an example "A button" sprite to demonstrate pointer interactions.
 */
export class RuneBoyScene extends Phaser.Scene {
  constructor() {
    super('RuneBoyScene');
  }

  preload() {
    // Load images: adjust paths to match your actual assets
    this.load.image('runeboy_bg', '/RuneBoys/original.png');
    this.load.image('button_a', '/img/a_button.png');
  }

  create() {
    const { width, height } = this.scale.gameSize;

    // 1) Render RuneBoy background
    const bg = this.add.image(width / 2, height / 2, 'runeboy_bg');
    bg.setDisplaySize(width, height);

    // 2) Add an "A" button somewhere for demonstration
    const aButton = this.add.sprite(width * 0.75, height * 0.8, 'button_a');
    aButton.setInteractive();

    aButton.on('pointerdown', () => {
      console.log('A button pressed!');
      // Implement your "A" button logic
    });
  }
}