<script lang="ts">
  import { onMount } from "svelte";
  import { dev } from "$app/environment";
  import * as PIXI from "pixi.js";
  import { KawaseBlurFilter, AdjustmentFilter } from "pixi-filters";
  import "$lib/pixi-setsize"; // neat :)

  export let src: string;
  export let dim = false;
  export let isVideo = false;
  export let filters: PIXI.Filter[] = [];

  onMount(() => {
    const app = new PIXI.Application({
      antialias: true,
      resizeTo: window,
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      hello: dev,
      autoStart: true,
    });

    PIXI.settings.FILTER_RESOLUTION = PIXI.Filter.defaultResolution;

    if (dev) globalThis.__PIXI_APP__ = app;

    let elapsed = 0.0;
    app.ticker.add((delta) => (elapsed += delta));

    const bg = PIXI.Sprite.from(
      isVideo ? (document.getElementById("pixi-video") as HTMLVideoElement) : src
    );

    if (dim) {
      // for some reason instantiating the filters outside of
      // onMount causes the first page load to result in a 500
      filters.push(
        new KawaseBlurFilter(4, 20),
        new AdjustmentFilter({
          brightness: 0.44,
          contrast: 1.2,
        })
      );
    }

    bg.filters = filters;

    app.ticker.add(() => bg.setSize(app.renderer.width, app.renderer.height, "cover"));
    app.stage.addChild(bg);
  });
</script>

<div>
  {#if isVideo}
    <video {src} preload="auto" muted autoplay loop playsinline id="pixi-video" />
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
