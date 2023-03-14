<script lang="ts">
  import { onMount } from "svelte";
  import { dev } from "$app/environment";
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

  onMount(() => {
    if (!document) return; // dude i have no idea what's going on
    const app = new PIXI.Application({
      antialias: true,
      resizeTo: window,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    });

    if (dev) globalThis.__PIXI_APP__ = app;

    let elapsed = 0.0;

    app.ticker.add((delta) => (elapsed += delta));

    let bg = PIXI.Sprite.from(
      isVideo ? (document.getElementById("pixi-video") as HTMLVideoElement) : src
    );

    bg.filters = baseFilters.concat(filters);

    app.stage.addChild(bg);

    app.ticker.add(() => {
      // bg.filters.forEach((f) => (f.time = elapsed));

      bg.setSize(app.renderer.width, app.renderer.height, "cover");
    });
  });
</script>

<div>
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
  }
</style>
