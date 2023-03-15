<script lang="ts">
  let scrollPercent = 0;
  let dragging = false;

  const handleScroll = () =>
    (scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight));

  const beginDrag = (e: MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", drag);
    dragging = true;
  };

  const endDrag = () => {
    if (!dragging) return;
    document.removeEventListener("mousemove", drag);
    dragging = false;
  };

  const drag = (e: MouseEvent) => {
    const scrollbar = document.getElementById("scrollbar");
    const thumb = document.getElementById("thumb");
    const track = document.getElementById("track");

    if (!scrollbar || !thumb || !track) return;

    const scrollbarRect = scrollbar.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();

    const mousePos = e.clientY - scrollbarRect.top;
    const thumbPos = mousePos - thumbRect.height / 2;

    window.scrollTo(
      0,
      (thumbPos / trackRect.height) * (document.body.offsetHeight - window.innerHeight)
    );
  };
</script>

<svelte:window on:scroll={handleScroll} on:mouseup={endDrag} />

<div class="scrollbar">
  <div class="container">
    <span class="track" />
    <span class="thumb" style="top: {scrollPercent * 100}%;" on:mousedown={beginDrag} />
  </div>
</div>

<style lang="scss">
  $scrollbar-offset-x: 15px;
  $thumb-size: 8px;
  $scrollbar-height: 250px;

  .scrollbar {
    position: fixed;
    top: 50%;
    right: $scrollbar-offset-x;
    transform: translate(-50%, -50%);

    & > .container {
      & > .track {
        display: block;
        height: $scrollbar-height;
        width: 1px;
        background: $foreground-primary;
      }

      & > .thumb {
        cursor: grab;
        height: $thumb-size;
        width: $thumb-size;
        background: $foreground-primary;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        &:active {
          cursor: grabbing;
        }
      }
    }
  }
</style>
