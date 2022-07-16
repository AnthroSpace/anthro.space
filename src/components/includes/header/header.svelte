<script lang="ts">
	import "./style.scss";

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<header class={scrollY > 0 ? "scrolled" : ""}>
	<span id="gradient" />
	<div class="row">
		<a id="homelink" class="row" href="/">
			<span id="logo" />
			<span id="hometext">AnthroSpace</span>
		</a>
	</div>

	<div class="row links">
		<a href="/events">PAST EVENTS</a>
		<a href="/twitch">TWITCH</a>
		<!-- <a href="">MIXCLOUD</a>  -->
		<a href="/twitter">TWITTER</a>
		<a href="/discord">DISCORD</a>
	</div>
</header>
