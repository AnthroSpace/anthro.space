<script lang="ts" context="module">
	import type { Load } from "./__types/__error";

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				status,
				error
			}
		};
	};
</script>

<script lang="ts">
	import { dev } from "$app/env";

	import HeroBg from "$components/hero-bg/hero-bg.svelte";

	export let status: number;
	export let error: Error;
</script>

<section>
	<h1>Error {status}</h1>
	<h2>{error.message}</h2>
	{#if dev && error.stack}
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
		<pre>{error.stack}</pre>
	{/if}
	<a href="/" class="btn">🡐 back to home</a>
</section>

<HeroBg src="/video/noise.webm" isVideo />

<style lang="scss">
	section {
		text-align: center;
	}
</style>
