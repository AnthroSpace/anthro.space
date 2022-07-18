<script lang="ts" context="module">
	import type { Load } from "./__types/index";
	import type { GET } from "./index";

	type InputProps = NonNullable<Awaited<ReturnType<typeof GET>>["body"]>; // infer type
	type OutputProps = InputProps;

	export const load: Load<InputProps, OutputProps> = ({ props }) => {
		return {
			props: {
				event: props.event
			}
		};
	};
</script>

<script lang="ts">
	import type { Event } from "$lib/events/db";

	import HeroBg from "$components/hero-bg/hero-bg.svelte";
	import "./style.scss";

	export let event: Event;
</script>

<svelte:head>
	<title>AnthroSpace | {event.name}</title>
</svelte:head>

<section id="landing">
	<h1>{event.name}</h1>
	<p>{event.date}</p>
	<div id="posters">
		{#each event.images.posters as poster}
			<div class="poster" style="background-image: url({poster});" />
		{/each}
	</div>
	<HeroBg src={event.images.hero || event.images.posters[0]} dim />
</section>

<section id="event-lineup" class="content">
	<h1>Lineup</h1>
	{#each event.lineup as dj}
		<div class="dj">
			<div class="profile" style="background-image:url('/events/dj-imgs/{dj.name.toLowerCase().replace(/[^a-z0-9]/gi, "-")}.jpg');" />
			<div class="details">
				<span class="name">{dj.name}</span>
				{#if dj.links[0]}
					{#each dj.links as link}
						<a class="link" href={link.url}>{link.name}</a>
					{/each}
				{/if}
				{#if dj.set_urls[0]}
					<span>Published set:</span>
					{#each dj.set_urls as set_url}
						<a class="link set-url" href={set_url.url}>{set_url.name}</a>
					{/each}
				{/if}
			</div>
		</div>
	{/each}
</section>
