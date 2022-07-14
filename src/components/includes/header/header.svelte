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
		<a href="https://twitch.tv/AnthroSpace">TWITCH</a>
		<!-- <a href="">MIXCLOUD</a>  -->
		<a href="https://twitter.com/AnthroSpace">TWITTER</a>
		<a href="https://discord.gg/ccHcskc8GG">DISCORD</a>
	</div>
</header>
