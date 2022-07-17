<script lang="ts">
	import { afterNavigate, goto } from "$app/navigation";
	import "./style.scss";

	let scrollY: number;
	let isRoot = true;

	afterNavigate((navigation: { from: URL | null; to: URL }) => {
		if (!navigation.to) return;
		isRoot = navigation.to.pathname === "/";
	});

	const back = () => {
		window.history.back();
	};
</script>

<svelte:window bind:scrollY />

<header class={scrollY > 0 ? "scrolled" : ""}>
	<span id="gradient" />
	<div class="row">
		{#if !isRoot}
			<a href="/" on:click|preventDefault={back}><span class="material-icons md-48">arrow_back</span></a>
		{/if}
		<a id="homelink" class="row" href="/">
			<span id="logo" />
			<span id="hometext">AnthroSpace</span>
		</a>
	</div>

	<div class="row links">
		<a sveltekit:prefetch href="/events">PAST EVENTS</a>
		<a href="/twitch">TWITCH</a>
		<!-- <a href="">MIXCLOUD</a>  -->
		<a href="/twitter">TWITTER</a>
		<a href="/discord">DISCORD</a>
	</div>
</header>
