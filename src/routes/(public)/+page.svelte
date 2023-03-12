<script lang="ts">
  import { team } from "$lib/stores";
  import HeroBg from "$components/hero-bg/hero-bg.svelte";
  import MemberList from "$components/memberlist/memberlist.svelte";
  import "./index.scss";
  const live = false;
</script>

<svelte:head>
  <title>AnthroSpace</title>
  <meta name="description" content="AnthroSpace" />
</svelte:head>

<section id="landing">
  <h1>AnthroSpace</h1>
  <p>
    we're the folks behind MAY TWENTY THIRST, UNTITLED.ALS*, POOLTOY EQUINOX, and POOLTOY SOLSTICE.
  </p>
  <p>
    we strive to showcase smaller and upcoming djs and music producers within the furry community
    through the form of live vrchat events
  </p>
  {#if live}
    <p>we are LIVE: <a href="/live">WATCH</a></p>
  {/if}
  <span id="scrollarrow">↓</span>
  <HeroBg src="/video/hero2.mp4" dim isVideo />
</section>

<section class="content">
  <MemberList header="CREW" members={team} />
</section>
