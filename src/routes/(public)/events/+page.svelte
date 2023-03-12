<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>AnthroSpace | Past Events</title>
</svelte:head>

<section id="landing">
  <h1>Past Events</h1>

  <div id="event-list">
    {#each data.events as event}
      <div class="event">
        <a href={event.path} class="event-link">{event.name}</a>
        <span class="event-date">{event.date}</span>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  #event-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    & > div.event {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      gap: 15px;
      & > a.event-link {
        font-size: 1.25em;
      }

      & > span.event-date {
        font-size: 0.8em;
        color: $foreground-secondary;
      }
    }
  }
</style>
