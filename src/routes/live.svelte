<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Live from "$pages/live/live.svelte";
	import "./_styles/index.scss";
</script>

<svelte:head>
	<title>AnthroSpace | Live</title>
</svelte:head>

<Live />