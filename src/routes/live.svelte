<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import "./_styles/live.scss";
</script>

<section>
	<div id="container">
		<div id="stream" />
		<iframe
			title="twitch chat"
			id="chat"
			src="https://www.twitch.tv/embed/anthrospace/chat?parent=anthro.space,anthro-space.pages.dev"
			frameborder="0"
		/>
		<div id="live-footer">
			<p>words words words words words words words words words words words words words words</p>
			<p>words words words words words words words words words words words words words words</p>
			<p>VRChat Instances:</p>
			<div id="instances">
				<a href="#a">1</a>
				<a href="#a">1</a>
				<a href="#a">1</a>
			</div>
		</div>
	</div>
</section>
