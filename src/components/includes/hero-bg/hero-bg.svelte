<script lang="ts">
	export let src: string;
	export let dim: boolean;
	export let isVideo: boolean;

	const dimStyle = "filter: brightness(0.5) blur(10px) contrast(1.2);";

	import "./style.scss";
</script>

<div id="background">
	{#if isVideo}
		<video
			{src}
			autoplay
			playsinline
			loop
			muted
			style={dim ? dimStyle : ""}
		/>
	{:else}
		<img
			{src}
			alt=""
			style={dim ? dimStyle : ""}
		/>
	{/if}
</div>
