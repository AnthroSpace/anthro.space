import { Sprite, Point } from "pixi.js";

declare module "pixi.js" {
  interface Sprite {
    setSize(width: number, height: number, type: "cover" | "contain"): void;
  }
}

Sprite.prototype.setSize = function (width: number, height: number, type: "cover" | "contain") {
  // https://gist.github.com/thibka/4f526e08d12a8b0bb3d8fd468e24ab17
  const texture = { width: this.texture.width, height: this.texture.height },
    targetRatio = width / height,
    textureRatio = this.texture.width / this.texture.height,
    pos = new Point(0, 0);

  let scale;

  if (type == "cover") {
    if (targetRatio > textureRatio) {
      scale = width / texture.width;
      pos.y = -(texture.height * scale - height) / 2;
    } else {
      scale = height / texture.height;
      pos.x = -(texture.width * scale - width) / 2;
    }
  } else {
    if (targetRatio > textureRatio) {
      scale = height / texture.height;
      pos.x = -(texture.width * scale - width) / 2;
    } else {
      scale = width / texture.width;
      pos.y = -(texture.height * scale - height) / 2;
    }
  }

  this.scale.set(scale);
  this.position = pos;
};
