<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import "./style.scss";
</script>

<section id="live">
	<div id="container">
		<iframe
			title="stream"
			id="stream"
			src="https://player.twitch.tv/?channel=AnthroSpace&parent=anthro.space"
			allowfullscreen
			frameborder="0"
		/>
		<iframe
			title="twitch chat"
			id="chat"
			src="https://www.twitch.tv/embed/AnthroSpace/chat?parent=anthro.space"
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
