<script lang="ts">
  import "./style.scss";

  let scrollPercent = 0;

  const handleScroll = () =>
    (scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight));
</script>

<svelte:window on:scroll={handleScroll} />

<div id="scrollbar">
  <div id="container">
    <span id="track" />
    <span id="thumb" style="height: {scrollPercent * 250}px" />
  </div>
</div>
