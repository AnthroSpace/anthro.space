<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";

  const twitchParent = dev ? "localhost" : "anthro.space";

  import "./style.scss";
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
