<script lang="ts">
  import { onMount } from "svelte";
  import * as PIXI from "pixi.js";
  import "$lib/pixi-setsize"; // neat :)
  import { KawaseBlurFilter, AdjustmentFilter } from "pixi-filters";

  export let src: string;
  export let dim = false;
  export let isVideo = false;
  export let filters: PIXI.Filter[] = [];

  const baseFilters: PIXI.Filter[] = dim
    ? [
        new KawaseBlurFilter(4, 20),
        new AdjustmentFilter({
          brightness: 0.44,
          contrast: 1.2,
        }),
      ]
    : [];

  onMount(async () => {
    const app = new PIXI.Application({
      antialias: true,
      resizeTo: window,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    });

    let bg = PIXI.Sprite.from(
      isVideo ? (document.getElementById("pixi-video") as HTMLVideoElement) : src
    );

    bg.filters = baseFilters.concat(filters);

    // create a particle container to hold the particles
    const particles = new PIXI.ParticleContainer(10000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });

    app.stage.addChild(bg);

    // add particles
    for (let i = 0; i < 10; i++) {
      const sprite = PIXI.Sprite.from(src);
      sprite.x = Math.random() * app.renderer.width;
      sprite.y = Math.random() * app.renderer.height;
      sprite.width = 10;
      sprite.height = 10;
      sprite.tint = 0x000000;
      sprite.alpha = 0.5;
      particles.addChild(sprite);
    }

    let elapsed = 0.0;

    app.ticker.add((delta) => {
      elapsed += delta;
      // animate particles
      for (let i = 0; i < particles.children.length; i++) {
        const sprite = particles.children[i] as PIXI.Sprite;
        sprite.x += Math.sin(elapsed * 0.0001 + i) * 10;
        sprite.y += Math.cos(elapsed * 0.0001 + i) * 10;
        if (sprite.x < 0) sprite.x += app.renderer.width;
        else if (sprite.x > app.renderer.width) sprite.x -= app.renderer.width;
        if (sprite.y < 0) sprite.y += app.renderer.height;
        else if (sprite.y > app.renderer.height) sprite.y -= app.renderer.height;
      }

      // bg.filters.forEach((f) => (f.time = elapsed));

      bg.setSize(app.renderer.width, app.renderer.height, "cover");
    });
  });
</script>

<div id="background">
  {#if isVideo}
    <video {src} muted autoplay loop playsinline id="pixi-video" />
  {/if}
  <canvas id="pixi-canvas" />
</div>

<style lang="scss">
  canvas {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    pointer-events: none;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > video {
      display: none;
    }

    // & > video,
    // & > img {
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 100%;
    //   height: 100%;
    //   object-fit: cover;
    // }
  }
</style>
