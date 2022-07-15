<script context="module" lang="ts">
	/** @type {import('./__types/[name]').Load} */
	export async function load({ params }) {
		try {
			return {
				status: 200,
				props: {
					body: JSON.stringify(await import(`../../lib/events/${params.name}.json`))
				}
			};
		} catch (e) {
			return { status: 404 };
		}
	}
</script>

<script lang="ts">
	export let body;
	const event = JSON.parse(body);
</script>

<h1>{event.name}</h1>
<p>{event.date}</p>

<h1>Lineup</h1>
{#each event.lineup as dj}
	<p>{dj.name}</p>
	{#if dj.links[0]}
		{#each dj.links as link}
			<a href={link.url}>{link.name}</a>
		{/each}
	{/if}
	{#if dj.set_urls[0]}
		<p>Published set:</p>
		{#each dj.set_urls as set_url}
			<a href={set_url.url}>{set_url.name}</a>
		{/each}
	{/if}
{/each}
