class x extends Phaser.Scene {
  constructor() {
    super("Preload");
  }
  preload() {
    this.load.image("startBackground", "assets/images/start/startBackground.png"), this.load.image("title", "assets/images/start/title.png"), this.load.image("volumeButton", "assets/images/start/volumeButton.png"), this.load.image("muteButton", "assets/images/start/muteButton.png"), this.load.image("hamburgerButton", "assets/images/start/hamburgerButton.png"), this.load.image("startButton", "assets/images/start/startButton.png"), this.load.image("optionsButton", "assets/images/start/optionsButton.png"), this.load.spritesheet("startPlayer", "assets/images/start/startPlayer.png", { frameWidth: 198, frameHeight: 198 }), this.load.json("quizData", "assets/quiz.json"), this.load.image("adventure", "assets/images/quiz/adventure.png"), this.load.image("discover", "assets/images/quiz/discover.png"), this.load.image("feather", "assets/images/quiz/feather.png"), this.load.image("harmony", "assets/images/quiz/harmony.png"), this.load.image("journey", "assets/images/quiz/journey.png"), this.load.image("mountain", "assets/images/quiz/mountain.png"), this.load.image("protect", "assets/images/quiz/protect.png"), this.load.image("puzzle", "assets/images/quiz/puzzle.png"), this.load.image("treasure", "assets/images/quiz/treasure.png"), this.load.image("whisper", "assets/images/quiz/whisper.png"), this.load.image("life_on", "assets/images/play/life_on.png"), this.load.image("life_off", "assets/images/play/life_off.png"), this.load.spritesheet("explorer", "assets/images/play/explorer.png", { frameWidth: 32, frameHeight: 32 }), this.load.image("popup", "assets/images/play/popup.png"), this.load.tilemapTiledJSON("map", "assets/map.json"), this.load.image("door_1", "assets/images/play/door_1.png"), this.load.image("wizard", "assets/images/play/wizard.png"), this.load.spritesheet("doors", "assets/images/play/doors.png", { frameWidth: 70, frameHeight: 75 }), this.load.spritesheet("alphabet", "assets/images/play/alphabet.png", { frameWidth: 52, frameHeight: 52 }), this.load.image("gem", "assets/images/tilesets/gem.png"), this.load.image("mushroom", "assets/images/tilesets/mushroom.png"), this.load.image("speed", "assets/images/tilesets/speed.png"), this.load.image("BasicTiles1", "assets/images/tilesets/BasicTiles1.png"), this.load.image("BasicTiles2", "assets/images/tilesets/BasicTiles2.png"), this.load.image("BasicTiles3", "assets/images/tilesets/BasicTiles3.png"), this.load.image("BasicTiles4", "assets/images/tilesets/BasicTiles4.png"), this.load.image("BasicTiles5", "assets/images/tilesets/BasicTiles5.png"), this.load.image("BasicTiles6", "assets/images/tilesets/BasicTiles6.png"), this.load.image("BasicTiles7", "assets/images/tilesets/BasicTiles7.png"), this.load.image("BasicTiles8", "assets/images/tilesets/BasicTiles8.png"), this.load.image("BasicTiles9", "assets/images/tilesets/BasicTiles9.png"), this.load.image("BasicTiles10", "assets/images/tilesets/BasicTiles10.png"), this.load.image("BasicTiles11", "assets/images/tilesets/BasicTiles11.png"), this.load.image("BasicTiles12", "assets/images/tilesets/BasicTiles12.png"), this.load.image("BasicTiles13", "assets/images/tilesets/BasicTiles13.png"), this.load.image("BasicTiles14", "assets/images/tilesets/BasicTiles14.png"), this.load.image("BasicTiles15", "assets/images/tilesets/BasicTiles15.png"), this.load.image("BasicTiles16", "assets/images/tilesets/BasicTiles16.png"), this.load.image("BasicTiles17", "assets/images/tilesets/BasicTiles17.png"), this.load.image("BasicTiles18", "assets/images/tilesets/BasicTiles18.png"), this.load.image("BasicTiles19", "assets/images/tilesets/BasicTiles19.png"), this.load.image("BasicTiles20", "assets/images/tilesets/BasicTiles20.png"), this.load.image("BasicTiles21", "assets/images/tilesets/BasicTiles21.png"), this.load.image("BasicTiles22", "assets/images/tilesets/BasicTiles22.png"), this.load.image("BasicTiles23", "assets/images/tilesets/BasicTiles23.png"), this.load.image("Red1", "assets/images/tilesets/Red1.png"), this.load.image("Red2", "assets/images/tilesets/Red2.png"), this.load.image("Red3", "assets/images/tilesets/Red3.png"), this.load.image("Blue1", "assets/images/tilesets/Blue1.png"), this.load.image("Blue2", "assets/images/tilesets/Blue2.png"), this.load.image("Blue3", "assets/images/tilesets/Blue3.png"), this.load.image("Purple1", "assets/images/tilesets/Purple1.png"), this.load.image("Purple2", "assets/images/tilesets/Purple2.png"), this.load.image("Purple3", "assets/images/tilesets/Purple3.png"), this.load.image("Yellow1", "assets/images/tilesets/Yellow1.png"), this.load.image("Yellow2", "assets/images/tilesets/Yellow2.png"), this.load.image("Yellow3", "assets/images/tilesets/Yellow3.png"), this.load.image("Pit1", "assets/images/tilesets/1.png"), this.load.image("Pit2", "assets/images/tilesets/2.png"), this.load.image("Pit3", "assets/images/tilesets/3.png"), this.load.image("Pit4", "assets/images/tilesets/4.png"), this.load.image("1a", "assets/images/tilesets/1a.png"), this.load.image("1b", "assets/images/tilesets/1b.png"), this.load.image("2a", "assets/images/tilesets/2a.png"), this.load.image("2b", "assets/images/tilesets/2b.png"), this.load.image("3a", "assets/images/tilesets/3a.png"), this.load.image("3b", "assets/images/tilesets/3b.png"), this.load.image("4a", "assets/images/tilesets/4a.png"), this.load.image("4b", "assets/images/tilesets/4b.png"), this.load.image("Tree1a", "assets/images/tilesets/Tree1a.png"), this.load.image("Tree1b", "assets/images/tilesets/Tree1b.png"), this.load.image("Tree2a", "assets/images/tilesets/Tree2a.png"), this.load.image("Tree2b", "assets/images/tilesets/Tree2b.png"), this.load.image("Brush1a", "assets/images/tilesets/Brush1a.png"), this.load.image("Brush1b", "assets/images/tilesets/Brush1b.png"), this.load.image("Brush2a", "assets/images/tilesets/Brush2a.png"), this.load.image("Brush2b", "assets/images/tilesets/Brush2b.png"), this.load.image("Brush3a", "assets/images/tilesets/Brush3a.png"), this.load.image("Brush3b", "assets/images/tilesets/Brush3b.png"), this.load.image("Brush4a", "assets/images/tilesets/Brush4a.png"), this.load.image("Brush4b", "assets/images/tilesets/Brush4b.png"), this.load.image("Stump", "assets/images/tilesets/Stump.png"), this.load.image("gameOverBackground", "assets/images/gameover/gameOverBackground.png"), this.load.image("mainMenuButton", "assets/images/gameover/mainMenuButton.png"), this.load.image("mainMenuButtonHover", "assets/images/gameover/mainMenuButtonHover.png"), this.load.image("gameFinishBackground", "assets/images/gamefinish/gameFinishBackground.png"), this.load.audio("bgm", "assets/sounds/bgm.mp3"), this.load.audio("getGemSound", "assets/sounds/getGem.mp3"), this.load.audio("gameOverSound", "assets/sounds/gameOver.mp3"), this.load.audio("gameFinishSound", "assets/sounds/gameFinish.mp3"), this.load.audio("hitSound", "assets/sounds/hit.mp3"), this.load.audio("clickSound", "assets/sounds/click.mp3"), this.load.audio("nextLevelSound", "assets/sounds/nextLevel.mp3"), this.load.audio("doorOpenSound", "assets/sounds/doorOpen.mp3");
  }
  create() {
    this.scene.start("StartScene");
  }
}
function S(g, s) {
  g.cameras.main.fade(1e3, 0, 0, 0), g.time.delayedCall(1e3, () => s(), [], g);
}
function T(g) {
  return g.add.rectangle(0, 0, g.cam.width, g.cam.height, 0, 0.5).setOrigin(0).setScrollFactor(0);
}
class v {
  constructor() {
    this.bgm = null, this.isOn = !0;
  }
  init(s, e, i) {
    this.bgm && (this.bgm.destroy(), this.bgm = null), this.bgm = s.sound.add(e, {
      ...i
    }), this.isOn && this.bgm.play();
  }
  play() {
    this.bgm.isPlaying || this.bgm.play();
  }
  toggle() {
    this.bgm && (this.isOn ? (this.bgm.pause(), this.isOn = !1) : (this.bgm.isPaused ? this.bgm.resume() : this.bgm.play(), this.isOn = !0));
  }
  pause() {
    this.bgm?.isPlaying && this.bgm.pause();
  }
  stop() {
    this.bgm.stop();
  }
  resume() {
    this.bgm && !this.bgm.isPlaying && this.bgm.resume();
  }
}
const u = new v(), y = 0.8;
class b extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }
  init() {
    u.init(this, "bgm", { loop: !0, volume: 0.05 });
  }
  create() {
    const { width: s, height: e } = this.cameras.main, i = s / 2, o = e / 2;
    this.add.image(i, o, "startBackground"), this.title = this.add.image(i, 20, "title").setScale(y), this.tweens.add({ targets: this.title, y: 150, duration: 2e3, ease: "Bounce.easeOut" }), this.startPlayer = this.add.sprite(i, o, "startPlayer"), this.anims.exists("start") || this.anims.create({ key: "start", frames: this.anims.generateFrameNumbers("startPlayer", { start: 0, end: 2 }), frameRate: 5, repeat: -1 }), this.startPlayer.play("start"), this.bgmButton = this.add.image(s - 40, e - 30, "volumeButton").setScale(y).setInteractive({ useHandCursor: !0 }), this._updateBgmButtonTexture(!u.isOn), this.bgmButton.on("pointerdown", () => this._onBgmButtonClick()), this.startButton = this.add.image(i, e - 150, "startButton").setScale(y).setInteractive({ cursor: "pointer" }), this.startButton.on("pointerdown", () => this._startGame()), this.hamburgerButton = this.add.image(s - 30, 30, "hamburgerButton").setScale(y).setInteractive({ useHandCursor: !0 }), this.optionsButton = this.add.image(i, e - 80, "optionsButton").setScale(y).setInteractive({ cursor: "pointer" });
  }
  // -------------------------------------------------------------------------------------------------------------- 내부 메서드
  _updateBgmButtonTexture(s) {
    this.bgmButton.setTexture(s ? "muteButton" : "volumeButton");
  }
  _startGame() {
    this.sound.play("clickSound"), S(this, () => this.scene.start("GameScene", { level: 1 }));
  }
  _onBgmButtonClick() {
    this.sound.play("clickSound"), u.toggle(), this._updateBgmButtonTexture(!u.isOn);
  }
}
const a = 32;
let w = 120;
const _ = 3;
class P extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }
  init(s) {
    this.player = null, this.wizard = null, this.cursors = null, this.layer = null, this.isMoving = !1, this.isJumping = !1, this.level = s.level || 1, this.finishLevel = 10, this.life = _, this.isHit = !1, this.isDoorOpened = !1, this.isGemAlertActive = !1, this.isStunned = !1, this.cam = this.cameras.main, this.collectedGems = 0, this.quizData = this.cache.json.get("quizData").quizzes, this.isSettingAlphabet = !1, u.init(this, "bgm", { volume: 0.5, loop: !0 }), u.isOn ? u.play() : u.stop();
  }
  // ===================================
  // 2. 오브젝트 생성 단계 (create)
  // ===================================
  create() {
    if (this.level > this.finishLevel) {
      this.scene.start("GameFinishScene");
      return;
    }
    this._initMap(), this._initPlayer(), this._initUI(), this.level === 1 && this._showFirstPopup(), this.cam.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels).startFollow(this.player).setZoom(2), this.cursors = this.input.keyboard.createCursorKeys(), this.physics.add.collider(this.player, this.layer), this.physics.add.overlap(this.player, this.speeds, (s, e) => {
      e.destroy(), w = 80, this.time.delayedCall(5e3, () => {
        w = 120;
      }, [], this);
    }, null, this), this.physics.add.overlap(this.player, this.obstacles, (s, e) => this._handleObstacleCollision(), null, this), this.physics.add.overlap(this.player, this.door, () => this._handleDoorInteraction(), null, this), this.input.keyboard.on("keydown-SPACE", () => {
      Phaser.Math.Distance.Between(this.player.x, this.player.y, this.wizard.x, this.wizard.y) < 50 && this._handleWizardInteraction();
    }), window.addEventListener("levelSelect", (s) => {
      const e = s.detail;
      this.scene.restart({ level: e });
    });
  }
  // ===================================
  // 3. 매 프레임 업데이트 단계 (update)
  // ===================================
  update() {
    if (this.isMoving || this.isJumping || this.isGemAlertActive || this.isStunned) return;
    let s = 0, e = 0, i = "idle";
    if (this.cursors.left.isDown ? (s = -a, i = "walk-left") : this.cursors.right.isDown ? (s = a, i = "walk-right") : this.cursors.up.isDown ? (e = -a, i = "walk-up") : this.cursors.down.isDown && (e = a, i = "walk-down"), s !== 0 || e !== 0) {
      const o = this.player.x + s, n = this.player.y + e, t = 0 + a / 2, d = 0 + a / 2, l = this.sys.game.config.width - a / 2, r = this.sys.game.config.height - a / 2 + a;
      if (o < t || o > l || n < d || n > r) {
        this.player.play("idle");
        return;
      }
      const h = Math.floor(o / a), m = Math.floor(n / a), c = this.layer.getTileAt(h, m);
      if (c && c.index !== 12) {
        this.player.play("idle");
        return;
      }
      this.isMoving = !0, this.player.play(i, !0), this.tweens.add({
        targets: this.player,
        x: o,
        y: n,
        duration: w,
        ease: "Linear",
        onComplete: () => {
          this.isMoving = !1, this.player.play("idle");
        }
      });
    } else
      this.player.play("idle");
  }
  // ===================================
  // 4. 해당 scene 전용 메서드
  // ===================================
  _initMap() {
    this.obstacles = this.physics.add.group(), this.speeds = this.physics.add.group(), this.map = this.make.tilemap({ key: "map" });
    const s = [];
    this.map.tilesets.forEach((t) => s.push(this.map.addTilesetImage(t.name, t.name)));
    const e = `Level${this.level}/`, i = this.map.layers.find((t) => t.name === `${e}Tile Layer`).name;
    this.layer = this.map.createLayer(i, s, 0, 0), this.map.objects.find((t) => t.name === `${e}Object Layer`).objects.forEach((t) => {
      const d = t.gid, l = this.map.imageCollections.find((m) => m.firstgid === d)?.name;
      if (!l) return;
      const r = t.x + (t.width ? t.width / 2 : 0), h = t.y - (t.height ? t.height / 2 : 0);
      if (l === "mushroom") {
        const m = this.physics.add.image(r, h, "mushroom").setSize(t.width * 0.7, t.height * 0.7), c = [
          { x: r + 20, y: h, duration: 1e3 },
          { x: r - 20, y: h, duration: 1e3 },
          { x: r, y: h + 20, duration: 1e3 },
          { x: r, y: h - 20, duration: 1e3 }
        ];
        let f = 0;
        const B = () => {
          const p = c[f];
          this.tweens.add({
            targets: m,
            x: p.x,
            y: p.y,
            duration: p.duration,
            ease: "Sine.easeInOut",
            yoyo: !0,
            onComplete: () => {
              f = (f + 1) % c.length, B();
            }
          });
        };
        B(), this.obstacles.add(m);
      } else if (l === "door_1") {
        const m = this.physics.add.image(r, h, "door_1");
        this.door = m;
      } else if (l === "speed") {
        const m = this.physics.add.image(r, h, "speed");
        this.speeds.add(m);
      } else
        this.add.image(r, h, l);
    });
    const n = [];
    if (this.layer.forEachTile((t) => t.index === 12 && n.push(t)), n.length > 0) {
      const t = Phaser.Utils.Array.GetRandom(n), d = t.pixelX + a / 2, l = t.pixelY + a / 2;
      this.wizard = this.physics.add.image(d, l, "wizard").setScale(0.5);
    }
  }
  _initPlayer() {
    const s = { x: a / 2, y: this.map.heightInPixels - a / 2 };
    this.player = this.physics.add.sprite(s.x, s.y, "explorer").setOrigin(0.5), this._initAnimations(), this.player.play("idle");
  }
  _initUI() {
    const s = this.cam.width / 2 - 20, e = 20, i = this.add.container(this.cam.width / 4 + 10, this.cam.height / 4 + 5).setScrollFactor(0).setDepth(10), o = this.add.graphics().fillStyle(16777215, 0.5).fillRoundedRect(0, 0, s, e, 5).setScrollFactor(0);
    i.add(o);
    const n = this.add.text(5, 3, `Level: ${this.level}`, { fontSize: "12px", fill: "#000000", fontStyle: "bold" }).setOrigin(0, 0).setScrollFactor(0);
    i.add(n), this.lifeIcons = [];
    for (let t = 0; t < this.life; t++) {
      const d = this.add.image(80 + t * 20, 3, "life_on").setOrigin(0, 0).setScrollFactor(0).setScale(0.2);
      i.add(d), this.lifeIcons.push(d);
    }
    this.currentQuiz = this.quizData[this.level - 1], this.answer = this.currentQuiz.answer, this.gemIcons = [];
    for (let t = 0; t < this.answer.length; t++) {
      const d = this.add.image(s / 2 - this.answer.length * 15 / 2 + t * 20, 2, "gem").setOrigin(0.5, 0).setScrollFactor(0).setScale(0.5);
      i.add(d), this.gemIcons.push(d);
    }
  }
  _initAnimations() {
    this.anims.exists("idle") || this.anims.create({ key: "idle", frames: [{ key: "explorer", frame: 0 }], frameRate: 10 }), this.anims.exists("walk-down") || this.anims.create({ key: "walk-down", frames: this.anims.generateFrameNumbers("explorer", { start: 1, end: 2 }), frameRate: 10, repeat: -1 }), this.anims.exists("walk-up") || this.anims.create({ key: "walk-up", frames: this.anims.generateFrameNumbers("explorer", { start: 3, end: 4 }), frameRate: 10, repeat: -1 }), this.anims.exists("walk-left") || this.anims.create({ key: "walk-left", frames: this.anims.generateFrameNumbers("explorer", { start: 5, end: 6 }), frameRate: 10, repeat: -1 }), this.anims.exists("walk-right") || this.anims.create({ key: "walk-right", frames: this.anims.generateFrameNumbers("explorer", { start: 7, end: 8 }), frameRate: 10, repeat: -1 });
  }
  _gameOver() {
    S(this, () => this.scene.start("GameOverScene"));
  }
  _nextLevel() {
    this.level += 1, this.scene.restart({ level: this.level });
  }
  _showFirstPopup() {
    const s = T(this), e = this.add.image(this.cam.width / 2, this.cam.height / 2, "popup").setScale(0.5).setScrollFactor(0);
    this.tweens.add({ targets: [s, e], alpha: { from: 0, to: 1 }, duration: 500 }), this.time.delayedCall(2e3, () => {
      this.tweens.add({ targets: [s, e], alpha: 0, duration: 500 });
    }, [], this);
  }
  _showQuizPopup() {
    this.isGemAlertActive = !0, this.sound.play("clickSound");
    const s = T(this), e = this.add.image(this.cam.width / 2, this.cam.height / 2, this.answer).setScrollFactor(0).setScale(0.5), i = this.add.text(this.cam.width / 2 + 180, this.cam.height / 2 - 100, "X", { fontSize: "16px", fill: "#ff0000", backgroundColor: "#ffffff", padding: { x: 5, y: 2 } }).setOrigin(0.5).setScrollFactor(0).setInteractive({ useHandCursor: !0 });
    i.on("pointerdown", () => {
      e.destroy(), i.destroy(), s.destroy(), this._setAlphabet(), this.isGemAlertActive = !1;
    });
  }
  _showTutorial() {
    this.add.graphics().fillStyle(16777215, 0.5).fillRoundedRect(this.cam.width / 2 - 135, this.cam.height / 2 - 35, 270, 70, 5).setScrollFactor(0), this.add.text(
      this.cam.width / 2,
      this.cam.height / 2,
      `키보드를 사용하여 요정을 움직이세요!
구슬을 모두 모아 문에 도달하면
 다음 레벨로 이동합니다.`,
      { fontSize: "14px", fill: "#000000", align: "center", wordWrap: { width: this.cam.width - 40 } }
    ).setOrigin(0.5).setScrollFactor(0);
  }
  _setAlphabet() {
    if (this.isSettingAlphabet) return;
    this.isSettingAlphabet = !0;
    const s = "abcdefghijklmnopqrstuvwxyz".split(""), e = this.answer.split(""), i = s.filter((n) => !e.includes(n)), o = [...e];
    for (; o.length < 15; ) {
      const n = Phaser.Utils.Array.GetRandom(i);
      o.includes(n) || o.push(n);
    }
    Phaser.Utils.Array.Shuffle(o), o.forEach((n) => {
      const t = [];
      this.layer.forEachTile((l) => l.index === 12 && t.push(l));
      const d = t.filter((l) => {
        const r = l.pixelX + a / 2, h = l.pixelY + a / 2;
        if (Phaser.Math.Distance.Between(r, h, this.wizard.x, this.wizard.y) < a * 2 || this.door && Phaser.Math.Distance.Between(r, h, this.door.x, this.door.y) < a) return !1;
        let c = !1;
        return this.obstacles.getChildren().forEach((f) => {
          Phaser.Math.Distance.Between(r, h, f.x, f.y) < a && (c = !0);
        }), !c;
      });
      if (d.length > 0) {
        const l = Phaser.Utils.Array.GetRandom(d), r = l.pixelX + a / 2, h = l.pixelY + a / 2, m = "abcdefghijklmnopqrstuvwxyz".indexOf(n), c = this.physics.add.image(r, h, "alphabet", m).setScale(0.5).setSize(a, a);
        this.tweens.add({ targets: c, scale: 0.6, duration: 800, yoyo: !0, repeat: -1, ease: "Sine.easeInOut" }), this.physics.add.overlap(this.player, c, (f, B) => {
          this.sound.play("getGemSound"), B.destroy();
          const p = this.answer.indexOf(n);
          p !== -1 && !this.gemIcons[p].collected ? (this.gemIcons[p].setTexture("alphabet", m).setScale(0.4), this.gemIcons[p].collected = !0) : (this.isStunned = !0, this._showAlertText("정답에 없는 글자입니다! 1초간 움직일 수 없습니다."), this.time.delayedCall(1e3, () => {
            this.isStunned = !1;
          }));
        }, null, this);
      }
    });
  }
  _updateLifeIcons() {
    this.lifeIcons.forEach((s, e) => s.setTexture(e < this.life ? "life_on" : "life_off"));
  }
  _playDoorOpenAnimation(s) {
    this.door.setTexture("doors", 0), this.time.delayedCall(50, () => {
      this.door.setTexture("doors", 1), this.time.delayedCall(50, () => {
        this.door.setTexture("doors", 2), s && s();
      });
    });
  }
  // 경고 텍스트 표시 메서드
  _showAlertText(s) {
    const e = this.add.text(
      this.cam.width / 2,
      this.cam.height / 2,
      s,
      { fontSize: "16px", fill: "#ff0000", backgroundColor: "#ffffff", padding: { x: 10, y: 5 } }
    ).setOrigin(0.5).setScrollFactor(0);
    this.time.delayedCall(2e3, () => e.destroy());
  }
  // -------------------------------------------------------------------------------------------------------- 충돌
  _handleWizardInteraction() {
    this.isGemAlertActive || this._showQuizPopup();
  }
  _handleObstacleCollision() {
    if (!this.isHit) {
      this.isHit = !0, this.life -= 1, this.sound.play("hitSound"), this.tweens.add({ targets: this.player, alpha: { from: 0.3, to: 1 }, duration: 100, ease: "Linear", repeat: 5 }), this._updateLifeIcons();
      const s = this.player.x, e = this.player.y;
      this.tweens.add({
        targets: this.player,
        x: s - 10,
        // 왼쪽으로 10px 밀림 (방향에 따라 조정 가능)
        y: e,
        duration: 100,
        yoyo: !0,
        onComplete: () => {
          if (this.life <= 0) {
            this._gameOver();
            return;
          }
          this.time.delayedCall(1e3, () => this.isHit = !1);
        }
      });
    }
  }
  _handleDoorInteraction() {
    if (!this.gemIcons.every((e) => e.collected)) {
      this.isGemAlertActive || (this.isGemAlertActive = !0, this.sound.play("clickSound"), this._showAlertText("구슬을 모두 모아야 문이 열립니다!"), this.time.delayedCall(2e3, () => this.isGemAlertActive = !1));
      return;
    }
    this.isDoorOpened || (this.isDoorOpened = !0, this.sound.play("doorOpenSound"), this._playDoorOpenAnimation(() => S(this, () => this._nextLevel())));
  }
}
class I extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }
  create() {
    const { width: s, height: e } = this.scale;
    this.add.image(s / 2, e / 2, "gameOverBackground"), u.stop(), this.sound.play("gameOverSound"), this.mainMenuButton = this.add.image(s / 2, e - 80, "mainMenuButton").setInteractive({ useHandCursor: !0 }), this.mainMenuButton.on("pointerover", () => this.mainMenuButton.setTexture("mainMenuButtonHover")), this.mainMenuButton.on("pointerout", () => this.mainMenuButton.setTexture("mainMenuButton")), this.mainMenuButton.on("pointerdown", () => {
      this.sound.play("clickSound"), this.scene.start("StartScene");
    });
  }
}
class O extends Phaser.Scene {
  constructor() {
    super("GameFinishScene");
  }
  create() {
    const { width: s, height: e } = this.scale;
    this.add.image(s / 2, e / 2, "gameFinishBackground"), u.stop(), this.sound.play("gameFinishSound"), this.mainMenuButton = this.add.image(s / 2, e - 80, "mainMenuButton").setInteractive({ useHandCursor: !0 }), this.mainMenuButton.on("pointerover", () => this.mainMenuButton.setTexture("mainMenuButtonHover")), this.mainMenuButton.on("pointerout", () => this.mainMenuButton.setTexture("mainMenuButton")), this.mainMenuButton.on("pointerdown", () => {
      this.sound.play("clickSound"), this.scene.start("StartScene");
    });
  }
}
const z = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "game-container",
  pixelArt: !0,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
      gravity: { y: 0 }
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [x, b, P, I, O]
};
new Phaser.Game(z);
