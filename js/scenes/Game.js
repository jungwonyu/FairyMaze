import { fadeAndCall, createOverlay } from '../utils.js';
import { soundManager } from '../SoundManager.js';

const TILE_SIZE = 32; // 타일 크기
let MOVE_DURATION = 120; // 이동 속도 (ms)
const MAX_LIFE = 3; // 생명 최대값

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }
  
  init(data) {
    this.player = null;
    this.wizard = null;
    this.cursors = null;
    this.layer = null; // 맵 레이어
    this.isMoving = false; // 이동 중인지 확인하는 플래그
    this.isJumping = false; // 점프 중인지 확인하는 플래그
    this.level = data.level || 1;
    this.finishLevel = 10;
    this.life = MAX_LIFE; // 플레이어 생명 수
    this.isHit = false;
    this.isDoorOpened = false; // 문 애니메이션 및 씬 전환 1회만 실행
    this.isGemAlertActive = false;
    this.isStunned = false; // 오답 알파벳 스턴 상태
    this.cam = this.cameras.main;
    this.collectedGems = 0; // 구슬 수집 상태 변수
    this.quizData = this.cache.json.get('quizData').quizzes;
    this.isSettingAlphabet = false;

    soundManager.init(this, 'bgm', { volume: 0.5, loop: true });
    soundManager.isOn ? soundManager.play() : soundManager.stop();
  }

  // ===================================
  // 2. 오브젝트 생성 단계 (create)
  // ===================================
  create() {
    if (this.level > this.finishLevel) {
      this.scene.start('GameFinishScene');
      return;
    }
    this._initMap (); // 맵 설정
    this._initPlayer(); // 플레이어 생성 및 초기 설정
    this._initUI(); // UI 생성
    if (this.level === 1) this._showFirstPopup();

    this.cam.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels).startFollow(this.player).setZoom(2); // 카메라 설정
    this.cursors = this.input.keyboard.createCursorKeys(); // 입력 설정

    this.physics.add.collider(this.player, this.layer); // 플레이어와 맵 충돌 연결
    this.physics.add.overlap(this.player, this.speeds, (player, speed) => {
      speed.destroy();
      MOVE_DURATION = 80; // 속도 증가
      this.time.delayedCall(5000, () => { // 5초 후 원래 속도로 복귀
        MOVE_DURATION = 120;
      }, [], this);

    }, null, this); // 플레이어와 달리기 아이템 충돌 처리
    this.physics.add.overlap(this.player, this.obstacles, (player, obstacle) => this._handleObstacleCollision(), null, this); // 플레이어와 장애물 충돌 처리
    this.physics.add.overlap(this.player, this.door, () => this._handleDoorInteraction(), null, this); // 플레이어와 문 충돌 처리
    this.input.keyboard.on('keydown-SPACE', () => { // this.wizard를 만나서 스페이스바를 눌렀을 때 상호작용 처리
      const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.wizard.x, this.wizard.y);
      if (distance < 50) this._handleWizardInteraction();
    });

    window.addEventListener('levelSelect', (e) => { // HTML level 버튼 이벤트 리스너 (디버그용)
      const level = e.detail;
      this.scene.restart({ level });
    });
  }

  // ===================================
  // 3. 매 프레임 업데이트 단계 (update)
  // ===================================
  update() {
    if (this.isMoving || this.isJumping || this.isGemAlertActive || this.isStunned) return;

    let dx = 0;
    let dy = 0;
    let animKey = 'idle';

    // 1. 입력 확인 및 이동 방향/애니메이션 키 설정
    if (this.cursors.left.isDown) {
      dx = -TILE_SIZE;
      animKey = 'walk-left';
    } else if (this.cursors.right.isDown) {
      dx = TILE_SIZE;
      animKey = 'walk-right';
    } else if (this.cursors.up.isDown) {
      dy = -TILE_SIZE;
      animKey = 'walk-up';
    } else if (this.cursors.down.isDown) {
      dy = TILE_SIZE;
      animKey = 'walk-down';
    }

    if (dx !== 0 || dy !== 0) {
      const targetX = this.player.x + dx;
      const targetY = this.player.y + dy;
      // 화면 경계 체크
      const minX = 0 + TILE_SIZE / 2;
      const minY = 0 + TILE_SIZE / 2;
      const maxX = this.sys.game.config.width - TILE_SIZE / 2;
      const maxY = this.sys.game.config.height - TILE_SIZE / 2 + TILE_SIZE;
      if (targetX < minX || targetX > maxX || targetY < minY || targetY > maxY) {
        this.player.play('idle');
        return;
      }

      // 2. 충돌 예측 로직
      const targetTileX = Math.floor(targetX / TILE_SIZE);
      const targetTileY = Math.floor(targetY / TILE_SIZE);
      const futureTile = this.layer.getTileAt(targetTileX, targetTileY);
      if (futureTile && futureTile.index !== 12) { // 12는 땅
        this.player.play('idle');
        return;
      }

      // 3. 충돌이 없으면 이동 트윈 시작
      this.isMoving = true;
      this.player.play(animKey, true);
      this.tweens.add({ targets: this.player, x: targetX, y: targetY, duration: MOVE_DURATION, ease: 'Linear',
        onComplete: () => {
          this.isMoving = false;
          this.player.play('idle'); 
        },
      });
    } else {
      this.player.play('idle');
    }
  }

  // ===================================
  // 4. 해당 scene 전용 메서드
  // ===================================
  _initMap () {
    this.obstacles = this.physics.add.group();
    this.speeds = this.physics.add.group();

    this.map = this.make.tilemap({ key: `map` });
    const tilesets = [];
    this.map.tilesets.forEach(ts => tilesets.push(this.map.addTilesetImage(ts.name, ts.name)));

    const currentName = `Level${this.level}/`;
    const layerName = this.map.layers.find(layer => layer.name === `${currentName}Tile Layer`).name;
    this.layer = this.map.createLayer(layerName, tilesets, 0, 0);

    const objectLayer = this.map.objects.find(layer => layer.name === `${currentName}Object Layer`);
    objectLayer.objects.forEach(obj => {
      const gid = obj.gid;
      const objClass = this.map.imageCollections.find(ts => ts.firstgid === gid)?.name;
      if (!objClass) return; // 클래스가 없으면 무시
      const objX = obj.x + (obj.width ? obj.width / 2 : 0);
      const objY = obj.y - (obj.height ? obj.height / 2 : 0);

      if (objClass === 'mushroom') {
        const mushroom = this.physics.add.image(objX, objY, 'mushroom').setSize(obj.width * 0.7, obj.height * 0.7);
        const patterns = [
          { x: objX + 20, y: objY, duration: 1000 },
          { x: objX - 20, y: objY, duration: 1000 },
          { x: objX, y: objY + 20, duration: 1000 },
          { x: objX, y: objY - 20, duration: 1000 },
        ];
        let patternIndex = 0;
        const moveMushroom = () => {
          const pattern = patterns[patternIndex];
          this.tweens.add({ targets: mushroom, x: pattern.x, y: pattern.y, duration: pattern.duration, ease: 'Sine.easeInOut', yoyo: true,
            onComplete: () => {
              patternIndex = (patternIndex + 1) % patterns.length;
              moveMushroom();
            }
          });
        }
        moveMushroom();
        this.obstacles.add(mushroom);
      } else if (objClass === 'door_1') {
        const door = this.physics.add.image(objX, objY, 'door_1');
        this.door = door;
      } else if (objClass === 'speed') {
        const speed = this.physics.add.image(objX, objY, 'speed');
        this.speeds.add(speed);
      } else {
        this.add.image(objX, objY, objClass);
      }
    });

    const groundTiles = [];
    this.layer.forEachTile(tile => (tile.index === 12) && groundTiles.push(tile));

    if (groundTiles.length > 0) {
      const randomTile = Phaser.Utils.Array.GetRandom(groundTiles);
      const wizardX = randomTile.pixelX + TILE_SIZE / 2;
      const wizardY = randomTile.pixelY + TILE_SIZE / 2;
      this.wizard = this.physics.add.image(wizardX, wizardY, 'wizard').setScale(0.5);
    }
  }

  _initPlayer() {
    const startPosition = { x: TILE_SIZE / 2, y: this.map.heightInPixels - TILE_SIZE / 2 };
    this.player = this.physics.add.sprite(startPosition.x, startPosition.y, 'explorer').setOrigin(0.5);
    this._initAnimations();
    this.player.play('idle');
  }

  _initUI() {
    const uiBarWidth = this.cam.width / 2 - 20;
    const uiBarHeight = 20;
    const uiContainer = this.add.container(this.cam.width / 4 + 10, this.cam.height / 4 + 5).setScrollFactor(0).setDepth(10);
    const uiBar = this.add.graphics().fillStyle(0xffffff, 0.5).fillRoundedRect(0, 0, uiBarWidth, uiBarHeight, 5).setScrollFactor(0);
    uiContainer.add(uiBar);

    // 레벨 텍스트 표시 (화면 상단 왼쪽)
    const levelText = this.add.text(5, 3, `Level: ${this.level}`, { fontSize: '12px', fill: '#000000', fontStyle: 'bold' }).setOrigin(0, 0).setScrollFactor(0);
    uiContainer.add(levelText);

    // 생명 아이콘 표시 (화면 상단 왼쪽) 
    this.lifeIcons = [];
    for (let i = 0; i < this.life; i++) {
      const lifeIcon = this.add.image(80 + i * 20, 3, 'life_on').setOrigin(0, 0).setScrollFactor(0).setScale(0.2);
      uiContainer.add(lifeIcon);
      this.lifeIcons.push(lifeIcon);
    }

    this.currentQuiz = this.quizData[this.level - 1];
    this.answer = this.currentQuiz.answer;

    this.gemIcons = [];
    for (let i = 0; i < this.answer.length; i++) {
      const gemIcon = this.add.image(uiBarWidth / 2 - (this.answer.length * 15) / 2 + i * 20, 2, 'gem').setOrigin(0.5, 0).setScrollFactor(0).setScale(0.5);
      uiContainer.add(gemIcon);
      this.gemIcons.push(gemIcon);
    }
  }

  _initAnimations() {
    if (!this.anims.exists('idle')) this.anims.create({ key: 'idle', frames: [{ key: 'explorer', frame: 0 }], frameRate: 10 });
    if (!this.anims.exists('walk-down')) this.anims.create({ key: 'walk-down', frames: this.anims.generateFrameNumbers('explorer', { start: 1, end: 2 }), frameRate: 10, repeat: -1 });
    if (!this.anims.exists('walk-up')) this.anims.create({ key: 'walk-up', frames: this.anims.generateFrameNumbers('explorer', { start: 3, end: 4 }), frameRate: 10, repeat: -1 });
    if (!this.anims.exists('walk-left')) this.anims.create({ key: 'walk-left', frames: this.anims.generateFrameNumbers('explorer', { start: 5, end: 6 }), frameRate: 10, repeat: -1 });
    if (!this.anims.exists('walk-right')) this.anims.create({ key: 'walk-right', frames: this.anims.generateFrameNumbers('explorer', { start: 7, end: 8 }), frameRate: 10, repeat: -1 });
  }

  _gameOver() {
    fadeAndCall(this, () => this.scene.start('GameOverScene'));
  }

  _nextLevel() {
    this.level += 1;
    this.scene.restart({ level: this.level });
  }

  _showFirstPopup() {
    const overlay = createOverlay(this);
    const popup = this.add.image(this.cam.width / 2, this.cam.height / 2, 'popup').setScale(0.5).setScrollFactor(0);
    this.tweens.add({ targets: [overlay, popup], alpha: { from: 0, to: 1 }, duration: 500 });
    this.time.delayedCall(2000, () => {
      this.tweens.add({ targets: [overlay, popup], alpha: 0, duration: 500 });
    }, [], this);
  }

  _showQuizPopup() {
    this.isGemAlertActive = true;
    this.sound.play('clickSound');
    const overlay = createOverlay(this);
    const alertImage = this.add.image(this.cam.width / 2, this.cam.height / 2, this.answer).setScrollFactor(0).setScale(0.5);
    const closeButton = this.add.text(this.cam.width / 2 + 180, this.cam.height / 2 - 100, 'X', { fontSize: '16px', fill: '#ff0000', backgroundColor: '#ffffff', padding: { x: 5, y: 2 } })
      .setOrigin(0.5).setScrollFactor(0).setInteractive({ useHandCursor: true });
    closeButton.on('pointerdown', () => {
      alertImage.destroy();
      closeButton.destroy();
      overlay.destroy();
      this._setAlphabet();
      this.isGemAlertActive = false;
    });
  }

  _showTutorial() {
    this.add.graphics().fillStyle(0xffffff, 0.5).fillRoundedRect(this.cam.width / 2 - 135, this.cam.height / 2 - 35, 270, 70, 5).setScrollFactor(0);
    this.add.text(this.cam.width / 2, this.cam.height / 2, 
      '키보드를 사용하여 요정을 움직이세요!\n구슬을 모두 모아 문에 도달하면\n 다음 레벨로 이동합니다.', 
      { fontSize: '14px', fill: '#000000', align: 'center', wordWrap: { width: this.cam.width - 40 } }).setOrigin(0.5).setScrollFactor(0);
  }

  _setAlphabet() {
    if (this.isSettingAlphabet) return;
    this.isSettingAlphabet = true;
    const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letters = this.answer.split('');
    const missingLetters = allLetters.filter(letter => !letters.includes(letter));

    const newLetters = [...letters];
    while (newLetters.length < 15) {
      const randomLetter = Phaser.Utils.Array.GetRandom(missingLetters);
      if (!newLetters.includes(randomLetter)) {
        newLetters.push(randomLetter);
      }
    }
    Phaser.Utils.Array.Shuffle(newLetters);

    newLetters.forEach(letter => {
      const groundTiles = [];
      this.layer.forEachTile(tile => (tile.index === 12) && groundTiles.push(tile));
      const validTiles = groundTiles.filter(tile => {
        const tileCenterX = tile.pixelX + TILE_SIZE / 2;
        const tileCenterY = tile.pixelY + TILE_SIZE / 2;
        // wizard와의 거리 체크
        const distanceToWizard = Phaser.Math.Distance.Between(tileCenterX, tileCenterY, this.wizard.x, this.wizard.y);
        if (distanceToWizard < TILE_SIZE * 2) return false;
        if (this.door && Phaser.Math.Distance.Between(tileCenterX, tileCenterY, this.door.x, this.door.y) < TILE_SIZE) return false;  // 문과의 거리 체크
        let overlap = false; // 장애물과의 거리 체크
        this.obstacles.getChildren().forEach(obstacle => {
          if (Phaser.Math.Distance.Between(tileCenterX, tileCenterY, obstacle.x, obstacle.y) < TILE_SIZE) overlap = true;
        });
        return !overlap;
      });

      if (validTiles.length > 0) {
        const randomTile = Phaser.Utils.Array.GetRandom(validTiles);
        const letterX = randomTile.pixelX + TILE_SIZE / 2;
        const letterY = randomTile.pixelY + TILE_SIZE / 2;
        const letterIndex = 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter);
        const letterImage = this.physics.add.image(letterX, letterY, 'alphabet', letterIndex).setScale(0.5).setSize(TILE_SIZE, TILE_SIZE);
        this.tweens.add({ targets: letterImage, scale: 0.6, duration: 800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });

        this.physics.add.overlap(this.player, letterImage, (player, letterImg) => {
          this.sound.play('getGemSound');
          letterImg.destroy();
          const letterIdxInAnswer = this.answer.indexOf(letter);
          if (letterIdxInAnswer !== -1 && !this.gemIcons[letterIdxInAnswer].collected) {
            this.gemIcons[letterIdxInAnswer].setTexture('alphabet', letterIndex).setScale(0.4);
            this.gemIcons[letterIdxInAnswer].collected = true;
          } else {
            // 스턴 적용
            this.isStunned = true;
            this._showAlertText('정답에 없는 글자입니다! 1초간 움직일 수 없습니다.');
            this.time.delayedCall(1000, () => { this.isStunned = false; });
          }
        }, null, this);
      }
    });
  }

  _updateLifeIcons() {
    this.lifeIcons.forEach((icon, idx) => icon.setTexture(idx < this.life ? 'life_on' : 'life_off'));
  }

  _playDoorOpenAnimation(callback) {
    this.door.setTexture('doors', 0);
    this.time.delayedCall(50, () => {
      this.door.setTexture('doors', 1);
      this.time.delayedCall(50, () => {
        this.door.setTexture('doors', 2);
        if (callback) callback();
      });
    });
  }

  // 경고 텍스트 표시 메서드
  _showAlertText(message) {
    const alertText = this.add.text(this.cam.width / 2, this.cam.height / 2, message, 
      { fontSize: '16px', fill: '#ff0000', backgroundColor: '#ffffff', padding: { x: 10, y: 5 } }).setOrigin(0.5).setScrollFactor(0);
    this.time.delayedCall(2000, () => alertText.destroy());
  }

  // -------------------------------------------------------------------------------------------------------- 충돌
  _handleWizardInteraction() { // 플레이어와 요정 상호작용 처리
    if (!this.isGemAlertActive) {
      this._showQuizPopup();
    }
  }

  _handleObstacleCollision() { // 플레이어와 장애물 충돌 처리
    if (!this.isHit) { // 무적 상태가 아닐 때만
      this.isHit = true;
      this.life -= 1;
      this.sound.play('hitSound');
      this.tweens.add({ targets: this.player, alpha: { from: 0.3, to: 1 }, duration: 100, ease: 'Linear', repeat: 5 });
      this._updateLifeIcons();

      const originalX = this.player.x;
      const originalY = this.player.y;
      this.tweens.add({
        targets: this.player,
        x: originalX - 10, // 왼쪽으로 10px 밀림 (방향에 따라 조정 가능)
        y: originalY,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          if (this.life <= 0) {
            this._gameOver();
            return;
          }
          this.time.delayedCall(1000, () => this.isHit = false); // 1초 후 무적 해제
        }
      });
    }
  }

  _handleDoorInteraction() { // 문과 상호작용 처리
    const isCollectedAllGems = this.gemIcons.every(icon => icon.collected);
    if (!isCollectedAllGems) {
      if (!this.isGemAlertActive) {
        this.isGemAlertActive = true;
        this.sound.play('clickSound');
        this._showAlertText('구슬을 모두 모아야 문이 열립니다!');
        this.time.delayedCall(2000, () => this.isGemAlertActive = false);
      }
      return;
    }
    if (this.isDoorOpened) return;
    this.isDoorOpened = true;
    this.sound.play('doorOpenSound');
    this._playDoorOpenAnimation(() => fadeAndCall(this, () => this._nextLevel()));
  }
}