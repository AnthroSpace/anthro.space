<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { team } from "$lib/stores";
	import HeroBg from "$includes/hero-bg/hero-bg.svelte";
	import MemberList from "$includes/memberlist/memberlist.svelte";
	import "./_styles/index.scss";
	const live = true;
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
	<p>
		we strive to showcase smaller and upcoming djs and music producers within the furry community
		through the form of live vrchat events
	</p>
	{#if live}
		<p>we are LIVE: <a sveltekit:prefetch href="/live">WATCH</a></p>
	{/if}
	<span id="scrollarrow">↓</span>
	<HeroBg src="/video/hero.webm" dim isVideo />
</section>

<section class="content">
	<MemberList header="CREW" members={team} />
</section>
