<script lang="ts">
  import { team } from "$lib/stores";
  import BigBg from "$components/BigBg.svelte";
  import MemberList from "$components/MemberList.svelte";

  import MaterialSymbolsKeyboardArrowDownRounded from "~icons/material-symbols/keyboard-arrow-down-rounded";

  const live = false;
</script>

<svelte:head>
  <title>AnthroSpace</title>
  <meta name="description" content="AnthroSpace" />
</svelte:head>

<BigBg src="/video/hero2.mp4" dim isVideo />
<section class="fullscreen">
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
  <span id="scrollarrow"><MaterialSymbolsKeyboardArrowDownRounded /></span>
</section>

<section>
  <MemberList header="CREW" members={team} />
</section>

<style lang="scss">
  #scrollarrow {
    position: absolute;
    bottom: 20px;
    font-size: 24pt;
    color: $foreground-primary;
    user-select: none;
    animation: float 2s infinite ease-in-out alternate;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
</style>
