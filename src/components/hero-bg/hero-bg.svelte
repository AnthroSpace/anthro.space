<script lang="ts">
	import "./style.scss";
	
	export let src: string;
	export let dim = false;
	export let isVideo = false;
	
	const dimStyle = "filter: brightness(0.5) blur(10px) contrast(1.2);";
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
