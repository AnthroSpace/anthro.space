<script context="module" lang="ts">
	import type { Load } from "./__types/__error";

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				status,
                message: error.message
			}
		};
	}
</script>

<script lang="ts">
    import HeroBg from "$components/hero-bg/hero-bg.svelte";
	export let status: number;
    export let message: string;
</script>

<section>
	<h1>Error {status}</h1>
	<h2>{message}</h2>
	<a href="/" class="btn">🡐 back to home</a>
</section>

<HeroBg src="/video/noise.webm" isVideo />

<style lang="scss">
	section {
		text-align: center;
	}
</style>