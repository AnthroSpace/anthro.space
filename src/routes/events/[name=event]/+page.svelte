<script lang="ts">
	import type { PageData } from "./$types";
	import type { Event, DJ } from "$lib/events/db";

	import { writable } from "svelte/store";
	import Modal, { bind } from "svelte-simple-modal";
	const modal = writable(null);

	import ProfileCard from "$components/profile-card/ProfileCard.svelte";
	import HeroBg from "$components/hero-bg/hero-bg.svelte";
	import roster from "$lib/events/data/_roster.json";

	import { getDjById } from "$lib/events/db";
	import "./style.scss";

	export let data: PageData;
	let event: Event = data.event;

	const openProfile = (djIDs: string[]) => {
		const djs = roster.filter((dj) => djIDs.includes(dj.id));

		modal.set(bind(ProfileCard, { djs }));
	};
</script>

<svelte:head>
	<title>AnthroSpace | {event.name}</title>
</svelte:head>
<Modal show={$modal} unstyled={true} classBg="modalBg" classWindowWrap="modalWrap" classWindow="modalWindow" classContent="modalContent" closeButton={false}/>
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
	{#each event.lineup as act}
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div class="act">
			<div
				tabindex="0"
				class="profile"
				style="background-image:url('/events/profile-photos/{act.djs[0]}.jpg');"
				on:click={() => openProfile(act.djs)}
				on:keyup={(e) => e.key === "Enter" && openProfile(act.djs)}
			/>
			<div class="details">
				<span class="name">{act.alias || getDjById(act.djs[0]).name}</span>
				{#if act.set_urls[0]}
					<span>Published set:</span>
					{#each act.set_urls as set_url}
						<a class="link set-url" href={set_url.url}>{set_url.name}</a>
					{/each}
				{/if}
			</div>
		</div>
	{/each}
</section>
