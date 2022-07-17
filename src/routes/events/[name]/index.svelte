<script context="module" lang="ts">
	import type { Load } from "./__types/index";
	import type { GET } from "./index";

	type InputProps = NonNullable<Awaited<ReturnType<typeof GET>>["body"]>; // infer type
	type OutputProps = InputProps;

	export const load: Load<InputProps, OutputProps> = async ({ props }) => {
		const optimizedImages: Event["images"] = {
			hero: "",
			posters: [],
			screenshots: []
		};

		props.event.images.posters.forEach((poster) => {
			const path = `../../../../static/${poster}`;
			let image = Object.entries(import(`../../../../static/${poster}?webp`)).map(([, event]) => event);
			console.log(image);
		});

		// Object.entries(props.event.images).forEach(([key, value]) => {
		// 	if (Array.isArray(value)) {
		// 		optimizedImages[key] = value.map((image) => {
		// 			return (new URL(`../../../../static${image}`, import.meta.url).href)
		// 		});
		// 	}
		// });


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
	<div id="posters" class="row">
		{#each event.images.posters as poster}
			<div class="poster" style="background-image: url({poster});" />
		{/each}
	</div>
	<HeroBg src="{event.images.hero || event.images.posters[0]}?webp" dim />
</section>

<section id="event-lineup" class="content">
	<h1>Lineup</h1>
	{#each event.lineup as dj}
		<div class="dj">
			<p class="name">{dj.name}</p>
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
		</div>
	{/each}
</section>
