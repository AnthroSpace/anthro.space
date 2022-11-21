<script lang="ts">
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import HeroBg from "$components/hero-bg/hero-bg.svelte";
</script>

<section>
	<h1>Error {$page.status}</h1>
	<h2>{$page.error?.message}</h2>
	{#if dev && $page.error?.stack}
		<style lang="scss">
			@import "@fontsource/fira-mono";
			pre {
				font-family: "Fira Mono", monospace;
				background: $background-secondary;
				padding: 10px;
				font-size: 0.8em;
				border-radius: 5px;
				box-shadow: black 0 0 20px inset;
				color: $foreground-primary;
				text-align: left;
				word-break: break-all;
				white-space: pre-wrap;
				border: 1px solid $background-tertiary;
			}
		</style>
		<pre>{$page.error?.stack}</pre>
	{/if}
	<a href="/" class="btn">🡐 back to home</a>
</section>

<HeroBg src="/video/noise.mp4" isVideo />

<style lang="scss">
	section {
		text-align: center;
	}
</style>
