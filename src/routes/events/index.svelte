<script context="module" lang="ts">
	/** @type {import('./__types/events').Load} */
	export async function load({ props, url }) {
		return {
			status: 200,
			props: {
				events: props.events,
				root: url.pathname.toLowerCase()
			}
		};
	}
</script>

<script lang="ts">
	export let events;
	export let root: string;
</script>

<svelte:head>
	<title>AnthroSpace | Past Events</title>
</svelte:head>

<h1>Past Events</h1>

{#each events as event}
	<a href={root + "/" + event.slug}>{event.name}</a>
{/each}
