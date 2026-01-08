// 외부에서 사용되는 공통 메서드

export function fadeAndCall(context, callback) {
  context.cameras.main.fade(1000, 0, 0, 0);
  context.time.delayedCall(1000, () => callback(), [], context);
}

export function getRequiredOrbs(level) {
  if (level >= 1 && level <= 3) {
    return 5;
  } else if (level >= 4 && level <= 6) {
    return 7;
  } else if (level >= 7 && level <= 9) {
    return 10;
  }
}

export function createOverlay(context) {
  return context.add.rectangle(0, 0, context.cam.width, context.cam.height, 0x000000, 0.5).setOrigin(0).setScrollFactor(0);
}