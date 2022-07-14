<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
                message: error.message
			}
		};
	}
</script>

<script lang="ts">
    import VideoBg from "$includes/video-bg/video-bg.svelte";
	export let status: number;
    export let message: string;
</script>

<section>
	<h1>Error {status}</h1>
	<h2>{message}</h2>
	{#if status === 404}
		<a href="/" class="btn">🡐 back to home</a>
	{/if}
</section>

<VideoBg src="/video/noise.webm" />