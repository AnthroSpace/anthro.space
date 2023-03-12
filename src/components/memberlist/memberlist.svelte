<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { Member } from "$lib/stores";

  import "./style.scss";

  export let header: string;
  export let members: Readable<Member[]>;
</script>

<h1>{header}</h1>
{#each $members as member}
  <div class="member">
    <span id="name">{member.name}</span>
    <span
      >{#if member.twitter} <a href={member.twitter}>@{member.twitter.split("/").pop()}</a> {/if}
      {member.title}</span>
  </div>
{/each}
