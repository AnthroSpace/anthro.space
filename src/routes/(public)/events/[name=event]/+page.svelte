<script lang="ts">
  import type { PageData } from "./$types";

  import ProfileCard from "$components/ProfileCard.svelte";
  import BigBg from "$components/BigBg.svelte";
  import roster from "$lib/events/data/_roster.json";

  import { getContext } from "svelte";
  import { getDjById } from "$lib/events/db";

  export let data: PageData;

  const { open } = getContext("simple-modal");
  const openProfile = (djIDs: string[]) => {
    const djs = roster.filter((dj) => djIDs.includes(dj.id));

    open(ProfileCard, { djs });
  };
</script>

<svelte:head>
  <title>{data.title} | {data.subtitle}</title>
</svelte:head>

<section class="fullscreen">
  <h1>{data.event.name}</h1>
  <p>{data.event.date}</p>
  <div class="posters">
    {#each data.event.images.posters as poster}
      <div class="poster" style="background-image: url({poster});" />
    {/each}
  </div>
  <BigBg src={data.event.images.hero || data.event.images.posters[0]} dim />
</section>

<section>
  <h2>Lineup</h2>
  <div class="event-lineup">
    {#each data.event.lineup as act}
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div class="act">
        <div
          tabindex="0"
          class="profile"
          style="background-image:url('/img/profile-photos/{act.djs[0]}.jpg');"
          on:click={() => openProfile(act.djs)}
          on:keyup={(e) => e.key === "Enter" && openProfile(act.djs)} />
        <div class="details">
          <span class="name">{act.alias || getDjById(act.djs[0])?.name || ""}</span>
          {#if act.set_urls[0]}
            <span>Published set:</span>
            {#each act.set_urls as set_url}
              <a class="link set-url" href={set_url.url}>{set_url.name}</a>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .posters {
    display: grid;
    grid-template-columns: 1fr 1fr;

    min-height: 60vh;
    min-width: 60vw;
    gap: 10px;

    & > .poster {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  @media screen and (max-width: 768px) {
    .posters {
      grid-template-columns: 1fr;
    }
  }

  .event-lineup {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;

    & > .act {
      border: 1px solid $background-tertiary;
      display: flex;
      min-height: 100px;
      word-break: break-word;
      transition: $default-transition;
      background-color: $background-secondary;

      & > .profile {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-width: 100px;
        height: 100%;
        transition: $default-transition;
        cursor: pointer;
        &:hover {
          filter: grayscale(0%);
          min-width: 110px;
        }
      }

      & > .details {
        padding: 10px;

        & > span {
          &.name {
            font-size: 1.5em;
            line-height: 1.5em;
          }
          display: block;
        }

        & > a.link {
          margin-right: 5px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
</style>
