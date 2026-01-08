import { fadeAndCall } from '../utils.js';
import { soundManager } from '../SoundManager.js';
const STYLE_SCALE = 0.8;

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  init() {
    soundManager.init(this, 'bgm', { loop: true, volume: 0.05 });
  }

  create() {
    const { width, height } = this.cameras.main;
    const centerX = width / 2;
    const centerY = height / 2;

    this.add.image(centerX, centerY, 'startBackground');
    this.title = this.add.image(centerX, 20, 'title').setScale(STYLE_SCALE);
    this.tweens.add({ targets: this.title, y: 150, duration: 2000, ease: 'Bounce.easeOut'});

    this.startPlayer = this.add.sprite(centerX, centerY, 'startPlayer');
    if (!this.anims.exists('start')) this.anims.create({ key: 'start', frames: this.anims.generateFrameNumbers('startPlayer', { start: 0, end: 2 }), frameRate: 5, repeat: -1 });
    this.startPlayer.play('start');

    this.bgmButton = this.add.image(width - 40, height - 30, 'volumeButton').setScale(STYLE_SCALE).setInteractive({ useHandCursor: true });
    this._updateBgmButtonTexture(!soundManager.isOn);
    this.bgmButton.on('pointerdown', () => this._onBgmButtonClick());

    this.startButton = this.add.image(centerX, height - 150, 'startButton').setScale(STYLE_SCALE).setInteractive({ cursor: 'pointer' });
    this.startButton.on('pointerdown', () => this._startGame());

    // 아직 기능 없는 버튼들
    this.hamburgerButton = this.add.image(width - 30, 30, 'hamburgerButton').setScale(STYLE_SCALE).setInteractive({ useHandCursor: true });
    this.optionsButton = this.add.image(centerX, height - 80, 'optionsButton').setScale(STYLE_SCALE).setInteractive({ cursor: 'pointer' });
  }

  // -------------------------------------------------------------------------------------------------------------- 내부 메서드
  _updateBgmButtonTexture(isPlaying) {
    this.bgmButton.setTexture(isPlaying ? 'muteButton' : 'volumeButton');
  }

  _startGame() {
    this.sound.play('clickSound');
    fadeAndCall(this, () => this.scene.start('GameScene', { level: 1 }));
  }

  _onBgmButtonClick() {
    this.sound.play('clickSound');
    soundManager.toggle();
    this._updateBgmButtonTexture(!soundManager.isOn);
  }
}