<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";

  const twitchParent = dev ? "localhost" : "anthro.space";
</script>

<section id="live">
  {#if dev && $page.url.hostname != "localhost"}
    you must be testing from localhost to see the stream
  {/if}
  <div id="container">
    <iframe
      title="stream"
      id="stream"
      src={`https://player.twitch.tv/?channel=AnthroSpace&parent=${twitchParent}`}
      allowfullscreen
      frameborder="0" />
    <iframe
      title="twitch chat"
      id="chat"
      src={`https://www.twitch.tv/embed/AnthroSpace/chat?parent=${twitchParent}&darkpopout`}
      frameborder="0" />
  </div>
</section>

<style lang="scss">
  section#live {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section > #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    justify-content: center;
    width: 50vw;
    height: 37vw;
    & > p,
    h1 {
      color: white;
    }
    & > #stream {
      background: black;
      aspect-ratio: 16 / 9;
      height: 100%;
    }
    & > #chat {
      height: 100%;
    }
    & > #live-footer {
      grid-column: span 2;
    }
  }

  #instances {
    display: flex;
    flex-direction: row;
    gap: 5px;

    & > a {
      border-radius: 5px;
      border: 1px solid white;
      background: teal;
      padding: 13px;
    }
  }
</style>
