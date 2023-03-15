<script lang="ts">
  import type { Readable } from "svelte/store";

  export let header: string;
  export let members: Readable<Member[]>;
</script>

<h1>{header}</h1>
{#each $members as member}
  <div class="member">
    <span class="name">{member.name}</span>
    <span
      >{#if member.twitter} <a href={member.twitter}>@{member.twitter.split("/").pop()}</a> {/if}
      {member.title}</span>
  </div>
{/each}

<style lang="scss">
  .member {
    margin-bottom: 10px;
    & > .name {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    & > span {
      display: block;
      word-break: break-word;
    }
  }
</style>
