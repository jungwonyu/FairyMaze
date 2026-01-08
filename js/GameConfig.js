import Preload from './Preload.js';
import StartScene from './scenes/Start.js';
import GameScene from './scenes/Game.js';
import GameOverScene from './scenes/GameOver.js';
import GameFinishScene from './scenes/GameFinish.js';

// 게임 설정
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: 'game-container',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preload, StartScene, GameScene, GameOverScene, GameFinishScene],
};

// 게임 시작
const game = new Phaser.Game(config);