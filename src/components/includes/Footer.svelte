<script lang="ts">
  import CibTwitter from "~icons/cib/twitter";
  import CibTelegram from "~icons/cib/telegram";
  import CibDiscord from "~icons/cib/discord";
  import CibTwitch from "~icons/cib/twitch";
</script>

<footer>
  <div id="flex-container">
    <p>&copy; AnthroSpace 2023</p>
    <ul>
      <li>
        <a href="https://twitter.com/AnthroSpace"><CibTwitter /></a>
      </li>
      <li>
        <a href="https://twitch.tv/AnthroSpace"><CibTwitch /></a>
      </li>
      <li>
        <a href="https://anthrospace.t.me"><CibTelegram /></a>
      </li>
      <li>
        <a href="https://discord.gg/ccHcskc8GG"><CibDiscord /></a>
      </li>
    </ul>
    <!-- <p>contact us: <a href="mailto:contact@anthro.space">contact@anthro.space</a></p> -->
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: $background-secondary;
  }
  #flex-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    // padding: 20px;
    width: $page-width;
    max-width: $max-page-width;
    & > ul {
      list-style: none;
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      & > li > a {
        &:hover {
          filter: drop-shadow(0 0 1px $foreground-primary);
        }
        &::after {
          content: none;
        }
      }
    }
  }
</style>
