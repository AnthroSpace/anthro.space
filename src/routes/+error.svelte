<script lang="ts">
  import "./(public)/+layout.svelte";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import { CRTFilter } from "pixi-filters";
  import BigBg from "$components/BigBg.svelte";
  const crrr = new CRTFilter({
    curvature: 6.72,
    lineWidth: 5,
    lineContrast: 0.5,
    noise: 0.67,
    noiseSize: 2.8,
    vignetting: 0.165,
    vignettingAlpha: 1,
    vignettingBlur: 0.4,
  });
</script>

<section>
  <h1>Error {$page.status}</h1>
  <h2>{$page.error?.message}</h2>
  {#if dev && $page.error?.stack}
    <style lang="scss">
      @import "@fontsource/fira-mono";
      pre {
        font-family: "Fira Mono", monospace;
        background: $background-secondary;
        padding: 10px;
        font-size: 0.8em;
        border-radius: 5px;
        box-shadow: black 0 0 20px inset;
        color: $foreground-primary;
        text-align: left;
        word-break: break-all;
        white-space: pre-wrap;
        border: 1px solid $background-tertiary;
      }
    </style>
    <pre>{$page.error?.stack}</pre>
  {/if}
  <a href="/" class="btn">🡐 back to home</a>
</section>

<BigBg
  src="/video/noise.mp4"
  isVideo
  filters={[
    new CRTFilter({
      curvature: 6.72,
      lineWidth: 5,
      lineContrast: 0.5,
      noise: 0.67,
      noiseSize: 9.45,
      vignetting: 0.165,
      vignettingAlpha: 1,
      vignettingBlur: 0.4,
    }),
  ]} />

<style lang="scss">
  section {
    text-align: center;
  }
</style>
