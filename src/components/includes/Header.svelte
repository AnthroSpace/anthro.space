<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  let scrollY: number;
  let innerWidth: number;
  let isOpen: boolean = false;
  const mobileThreshold = 768; // width in px
  import MaterialSymbolsMenuRounded from "~icons/material-symbols/menu-rounded";

  beforeNavigate(() => {
    isOpen = false;
  });

  const toggle = () => (isOpen = !isOpen);

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") isOpen = false;
  };
</script>

<svelte:window bind:scrollY bind:innerWidth on:keyup={handleKey} />

<header class:scrolled={scrollY > 0}>
  <span id="gradient" />
  <nav>
    <a id="home-link" href="/"><span id="logo" />AnthroSpace</a>

    {#if innerWidth < mobileThreshold}
      <button id="menu-toggle" on:click={toggle} class:open={isOpen} aria-hidden="true"
        ><MaterialSymbolsMenuRounded font-size="14pt" /></button>
    {/if}

    <!-- collapsible -->
    <div id="nav-links" class:open={isOpen}>
      <a href="/events">PAST EVENTS</a>
      <a href="/twitch">TWITCH</a>
      <a href="/twitter">TWITTER</a>
      <a href="/discord">DISCORD</a>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    transition: $default-transition;

    > nav {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      width: $page-width;
      max-width: $max-page-width;
      margin: 0 auto;
      transition: $default-transition;

      > #nav-links {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      > #home-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition: $default-transition;

        > #logo {
          width: 25px;
          height: 25px;
          background-color: $foreground-primary;
          mask-size: contain;
          mask-image: url("/img/logo.svg");
          transition: $default-transition;
        }
      }
    }

    &.scrolled {
      height: 40px;
      > nav {
        > #home-link > #logo {
          background-color: $background-primary;
        }
        & a {
          color: $background-primary;
          &::after {
            background-color: $background-primary;
          }
        }
      }
      > #gradient::after {
        opacity: 1;
      }
    }
  }

  #gradient,
  #gradient::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: $default-transition;
    pointer-events: none;
    user-select: none;
  }

  #gradient {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    z-index: -2;
    opacity: 1;
  }

  #gradient::after {
    content: "";
    background: $foreground-primary;
    z-index: -1;
    opacity: 0;
  }

  // mobile displays
  @media only screen and (max-width: 768px) {
    header {
      font-size: 0.9em;

      &.scrolled {
        > nav > #home-link > #logo {
          width: 20px;
          height: 20px;
        }
        > #menu-toggle {
          color: $background-primary;
        }
      }
      > nav {
        > #menu-toggle {
          z-index: 100;
          all: unset;
          cursor: pointer;
          color: $foreground-primary;
        }
        > #nav-links {
          height: 100vh;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 60px 20px;
          width: 40vw;
          max-width: 200px;
          position: absolute;
          right: -100vw;
          top: 0;
          background: $foreground-primary;
          transition: $default-transition;
          > a {
            color: $background-primary;
          }
          &.open {
            right: 0;
          }
        }
      }
    }
  }
</style>
