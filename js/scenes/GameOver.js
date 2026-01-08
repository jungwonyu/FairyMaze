import { soundManager } from '../SoundManager.js';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, 'gameOverBackground');

    soundManager.stop();
    this.sound.play('gameOverSound');

    this.mainMenuButton = this.add.image(width / 2, height - 80, 'mainMenuButton').setInteractive({ useHandCursor: true });
    this.mainMenuButton.on('pointerover', () => this.mainMenuButton.setTexture('mainMenuButtonHover'));
    this.mainMenuButton.on('pointerout', () => this.mainMenuButton.setTexture('mainMenuButton'));
    this.mainMenuButton.on('pointerdown', () => {
      this.sound.play('clickSound');
      this.scene.start('StartScene');
    });
  }
}