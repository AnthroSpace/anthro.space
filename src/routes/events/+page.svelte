<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import "./style.scss";
</script>

<svelte:head>
	<title>AnthroSpace | Past Events</title>
</svelte:head>

<section id="landing">
	<h1>Past Events</h1>

	<div id="event-list">
		{#each data.events as event}
			<div class="event">
				<a data-sveltekit-prefetch href={event.path} class="event-link">{event.name}</a>
				<span class="event-date">{event.date}</span>
			</div>
		{/each}
	</div>
</section>
