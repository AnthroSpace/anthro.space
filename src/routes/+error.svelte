<script lang="ts">
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import Layout from "./(public)/+layout.svelte";
  import BigBg from "$components/BigBg.svelte";
</script>

<Layout>
  <section>
    <h1>Error {$page.status}</h1>
    <h2>{$page.error?.message}</h2>
    <a href="/" class="btn">🡐 back to home</a>
  </section>

  <BigBg src="/video/noise.mp4" isVideo />

  <style lang="scss">
    section {
      text-align: center;
    }
  </style>
</Layout>
