const TILE_SIZE = 32; // 타일 크기

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    // ---------------------------------- images
    // start scene assets
    this.load.image('startBackground', 'assets/images/start/startBackground.png');
    this.load.image('title', 'assets/images/start/title.png');
    this.load.image('volumeButton', 'assets/images/start/volumeButton.png');
    this.load.image('muteButton', 'assets/images/start/muteButton.png');
    this.load.image('hamburgerButton', 'assets/images/start/hamburgerButton.png');
    this.load.image('startButton', 'assets/images/start/startButton.png');
    this.load.image('optionsButton', 'assets/images/start/optionsButton.png');
    this.load.spritesheet('startPlayer', 'assets/images/start/startPlayer.png', { frameWidth: 198, frameHeight: 198 });

    // game scene assets
    // quiz json
    this.load.json('quizData', 'assets/quiz.json');
    // quiz images
    this.load.image('adventure', 'assets/images/quiz/adventure.png');
    this.load.image('discover', 'assets/images/quiz/discover.png');
    this.load.image('feather', 'assets/images/quiz/feather.png');
    this.load.image('harmony', 'assets/images/quiz/harmony.png');
    this.load.image('journey', 'assets/images/quiz/journey.png');
    this.load.image('mountain', 'assets/images/quiz/mountain.png');
    this.load.image('protect', 'assets/images/quiz/protect.png');
    this.load.image('puzzle', 'assets/images/quiz/puzzle.png');
    this.load.image('treasure', 'assets/images/quiz/treasure.png');
    this.load.image('whisper', 'assets/images/quiz/whisper.png');

    // UI
    this.load.image('life_on', 'assets/images/play/life_on.png');
    this.load.image('life_off', 'assets/images/play/life_off.png');
    
    this.load.spritesheet('explorer', 'assets/images/play/explorer.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE });
    this.load.image('popup', 'assets/images/play/popup.png');
    // json
    this.load.tilemapTiledJSON('map', 'assets/map.json');

    this.load.image('door_1', 'assets/images/play/door_1.png');
    this.load.image('wizard', 'assets/images/play/wizard.png');
    this.load.spritesheet('doors', 'assets/images/play/doors.png', { frameWidth: 70, frameHeight: 75 });
    this.load.spritesheet('alphabet', 'assets/images/play/alphabet.png', { frameWidth: 52, frameHeight: 52 });
    this.load.image('gem', 'assets/images/tilesets/gem.png');
    this.load.image('mushroom', 'assets/images/tilesets/mushroom.png');
    this.load.image('speed', 'assets/images/tilesets/speed.png');

    // tilesets
    this.load.image('BasicTiles1', 'assets/images/tilesets/BasicTiles1.png');
    this.load.image('BasicTiles2', 'assets/images/tilesets/BasicTiles2.png');
    this.load.image('BasicTiles3', 'assets/images/tilesets/BasicTiles3.png');
    this.load.image('BasicTiles4', 'assets/images/tilesets/BasicTiles4.png');
    this.load.image('BasicTiles5', 'assets/images/tilesets/BasicTiles5.png');
    this.load.image('BasicTiles6', 'assets/images/tilesets/BasicTiles6.png');
    this.load.image('BasicTiles7', 'assets/images/tilesets/BasicTiles7.png');
    this.load.image('BasicTiles8', 'assets/images/tilesets/BasicTiles8.png');
    this.load.image('BasicTiles9', 'assets/images/tilesets/BasicTiles9.png');
    this.load.image('BasicTiles10', 'assets/images/tilesets/BasicTiles10.png');
    this.load.image('BasicTiles11', 'assets/images/tilesets/BasicTiles11.png');
    this.load.image('BasicTiles12', 'assets/images/tilesets/BasicTiles12.png');
    this.load.image('BasicTiles13', 'assets/images/tilesets/BasicTiles13.png');
    this.load.image('BasicTiles14', 'assets/images/tilesets/BasicTiles14.png');
    this.load.image('BasicTiles15', 'assets/images/tilesets/BasicTiles15.png');
    this.load.image('BasicTiles16', 'assets/images/tilesets/BasicTiles16.png');
    this.load.image('BasicTiles17', 'assets/images/tilesets/BasicTiles17.png');
    this.load.image('BasicTiles18', 'assets/images/tilesets/BasicTiles18.png');
    this.load.image('BasicTiles19', 'assets/images/tilesets/BasicTiles19.png');
    this.load.image('BasicTiles20', 'assets/images/tilesets/BasicTiles20.png');
    this.load.image('BasicTiles21', 'assets/images/tilesets/BasicTiles21.png');
    this.load.image('BasicTiles22', 'assets/images/tilesets/BasicTiles22.png');
    this.load.image('BasicTiles23', 'assets/images/tilesets/BasicTiles23.png');
    // flowers
    this.load.image('Red1', 'assets/images/tilesets/Red1.png');
    this.load.image('Red2', 'assets/images/tilesets/Red2.png');
    this.load.image('Red3', 'assets/images/tilesets/Red3.png');
    this.load.image('Blue1', 'assets/images/tilesets/Blue1.png');
    this.load.image('Blue2', 'assets/images/tilesets/Blue2.png');
    this.load.image('Blue3', 'assets/images/tilesets/Blue3.png');
    this.load.image('Purple1', 'assets/images/tilesets/Purple1.png');
    this.load.image('Purple2', 'assets/images/tilesets/Purple2.png');
    this.load.image('Purple3', 'assets/images/tilesets/Purple3.png');
    this.load.image('Yellow1', 'assets/images/tilesets/Yellow1.png');
    this.load.image('Yellow2', 'assets/images/tilesets/Yellow2.png');
    this.load.image('Yellow3', 'assets/images/tilesets/Yellow3.png');
    // pits
    this.load.image('Pit1', 'assets/images/tilesets/1.png');
    this.load.image('Pit2', 'assets/images/tilesets/2.png');
    this.load.image('Pit3', 'assets/images/tilesets/3.png');
    this.load.image('Pit4', 'assets/images/tilesets/4.png');
    // rocks
    this.load.image('1a', 'assets/images/tilesets/1a.png');
    this.load.image('1b', 'assets/images/tilesets/1b.png');
    this.load.image('2a', 'assets/images/tilesets/2a.png');
    this.load.image('2b', 'assets/images/tilesets/2b.png');
    this.load.image('3a', 'assets/images/tilesets/3a.png');
    this.load.image('3b', 'assets/images/tilesets/3b.png');
    this.load.image('4a', 'assets/images/tilesets/4a.png');
    this.load.image('4b', 'assets/images/tilesets/4b.png');
    // trees
    this.load.image('Tree1a', 'assets/images/tilesets/Tree1a.png');
    this.load.image('Tree1b', 'assets/images/tilesets/Tree1b.png');
    this.load.image('Tree2a', 'assets/images/tilesets/Tree2a.png');
    this.load.image('Tree2b', 'assets/images/tilesets/Tree2b.png');
    this.load.image('Brush1a', 'assets/images/tilesets/Brush1a.png');
    this.load.image('Brush1b', 'assets/images/tilesets/Brush1b.png');
    this.load.image('Brush2a', 'assets/images/tilesets/Brush2a.png');
    this.load.image('Brush2b', 'assets/images/tilesets/Brush2b.png');
    this.load.image('Brush3a', 'assets/images/tilesets/Brush3a.png');
    this.load.image('Brush3b', 'assets/images/tilesets/Brush3b.png');
    this.load.image('Brush4a', 'assets/images/tilesets/Brush4a.png');
    this.load.image('Brush4b', 'assets/images/tilesets/Brush4b.png');
    this.load.image('Stump', 'assets/images/tilesets/Stump.png');

    // ---------------------------------- gameOver scene assets
    this.load.image('gameOverBackground', 'assets/images/gameover/gameOverBackground.png');
    this.load.image('mainMenuButton', 'assets/images/gameover/mainMenuButton.png');
    this.load.image('mainMenuButtonHover', 'assets/images/gameover/mainMenuButtonHover.png');

    // ---------------------------------- gameFinish scene assets
    this.load.image('gameFinishBackground', 'assets/images/gamefinish/gameFinishBackground.png');

    // ---------------------------------- sounds
    this.load.audio('bgm', 'assets/sounds/bgm.mp3');
    this.load.audio('getGemSound', 'assets/sounds/getGem.mp3');
    this.load.audio('gameOverSound', 'assets/sounds/gameOver.mp3');
    this.load.audio('gameFinishSound', 'assets/sounds/gameFinish.mp3');
    this.load.audio('hitSound', 'assets/sounds/hit.mp3');
    this.load.audio('clickSound', 'assets/sounds/click.mp3');
    this.load.audio('nextLevelSound', 'assets/sounds/nextLevel.mp3');
    this.load.audio('doorOpenSound', 'assets/sounds/doorOpen.mp3');
  }

  create() {
    this.scene.start('StartScene');
  }
}