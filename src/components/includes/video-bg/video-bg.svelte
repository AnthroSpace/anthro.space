<script lang="ts">
	export let src: string;
	export let dim: boolean;

	import "./style.scss";
</script>

<div id="background">
	<video {src} autoplay playsinline loop muted id="background" style={dim ? "filter: brightness(0.5) blur(10px) contrast(1.2);" : ""} />
</div>
