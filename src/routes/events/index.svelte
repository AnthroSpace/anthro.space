<script lang="ts">
	import type { EventMetadata } from "$lib/events/db";
	export let events: EventMetadata[];
</script>

<svelte:head>
	<title>AnthroSpace | Past Events</title>
</svelte:head>

<section id="landing">
	<h1>Past Events</h1>

	{#each events as event}
		<a sveltekit:prefetch href={event.path}>{event.name}</a><span class="event">({event.date})</span>
	{/each}
</section>
