<script lang="ts">
  export let djs: DJ[];
</script>

{#each djs as dj}
  <div class="profile-card">
    <div
      class="header"
      style="background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)),url('/img/profile-photos/{dj.id}.jpg');">
      <h1>{dj.name}</h1>
    </div>
    <div class="body">
      <!-- <p class="bio">lit</p> -->
      <ul>
        {#each dj.links as link}
          <li><a href={link.url}>{link.name}</a></li>
        {/each}
      </ul>
    </div>
  </div>
{/each}

<style lang="scss">
  .profile-card {
    height: 500px;
    width: 400px;
    background: $background-secondary;
    border: 1px solid $background-tertiary;
    filter: drop-shadow(0 0 0.5rem $background-primary);

    & > .header {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      min-width: 100%;
      min-height: 200px;
      position: relative;

      & > h1 {
        bottom: 0;
        left: 15px;
        position: absolute;
      }
    }
    & > .body {
      padding: 10px 15px;
      & > ul {
        list-style: none;
        all: unset;
      }
    }
  }
</style>
