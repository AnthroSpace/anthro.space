<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { team } from "$lib/stores";
	import Background from "$lib/background/background.svelte";
	import "./_styles/index.scss";
	const live = false;
</script>

<svelte:head>
	<title>AnthroSpace</title>
	<meta name="description" content="AnthroSpace" />
</svelte:head>

<section id="landing">
	<h1>AnthroSpace</h1>
	<p>
		we're the folks behind MAY TWENTY THIRST, UNTITLED.ALS*, POOLTOY EQUINOX, and POOLTOY SOLSTICE.
	</p>
	{#if live}
		<p>we are LIVE: <a href="/live">WATCH</a></p>
	{/if}
	<span id="scrollarrow">↓</span>
	<Background />
</section>

<section id="content">
	<h1>CREW</h1>
	{#each $team as member}
		<div class="member">
			<span id="name">{member.name}</span>
			<span
				>{#if member.twitter} <a href={member.twitter}>@{member.twitter.split("/").pop()}</a> {/if}
				{member.title}</span
			>
		</div>
	{/each}
</section>
