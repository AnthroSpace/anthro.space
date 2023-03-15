<script lang="ts">
  import { page } from "$app/stores";
  import Layout from "./(public)/+layout.svelte";
  import BigBg from "$components/BigBg.svelte";
  import MaterialSymbolsArrowBackIosRounded from "~icons/material-symbols/arrow-back-ios-rounded";
</script>

<Layout>
  <section class="fullscreen">
    <h1>Error {$page.status}</h1>
    <h2>{$page.error?.message}</h2>
    <a href="/" class="with-icon"><MaterialSymbolsArrowBackIosRounded/> back to home</a>
  </section>
</Layout>

<BigBg src="/video/noise.mp4" isVideo />
