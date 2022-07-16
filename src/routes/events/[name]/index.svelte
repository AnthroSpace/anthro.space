<script lang="ts">
	export let event;
	import HeroBg from "$includes/hero-bg/hero-bg.svelte";
	import "./style.scss";
</script>

<svelte:head>
	<title>AnthroSpace | {event.name}</title>
</svelte:head>

<section id="landing">
	<h1>{event.name}</h1>
	<p>{event.date}</p>
	<div id="posters" class="row">
		{#each event.images.posters as poster}
			<img src={poster} alt="" />
		{/each}
	</div>
	<HeroBg src={event.images.hero || event.images.posters[0]} dim />
</section>

<section id="event-lineup">
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
