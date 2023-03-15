<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  const upcoming = data.events.filter((event) => new Date(event.date) > new Date());
  const past = data.events.filter((event) => new Date(event.date) < new Date());
</script>

<svelte:head>
  <title>AnthroSpace | Events</title>
</svelte:head>

<section class="fullscreen">
  <div>
    <h1>Past Events</h1>

    <div class="event-list">
      {#each past as event}
        <div class="event">
          <a href={event.path} class="event-link">{event.name}</a>
          <span class="event-date">{event.date}</span>
        </div>
      {/each}
    </div>
  </div>

  {#if upcoming.length > 0}
    <div>
      <h1>Upcoming</h1>

      <div class="event-list">
        {#each upcoming as event}
          <div class="event">
            <a href={event.path} class="event-link">{event.name}</a>
            <span class="event-date">{event.date}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
  .fullscreen {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

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

  @media screen and (max-width: $mobile-threshold) {
    .fullscreen {
      flex-direction: column;
      flex-flow: column-reverse;
    }
  }
</style>
