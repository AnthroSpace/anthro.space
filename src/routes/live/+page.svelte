<script lang="ts">
	import "./style.scss";
</script>

<section id="live">
	<div id="container">
		<iframe
			title="stream"
			id="stream"
			src="https://player.twitch.tv/?channel=AnthroSpace&parent=localhost"
			allowfullscreen
			frameborder="0"
		/>
		<iframe
			title="twitch chat"
			id="chat"
			src="https://www.twitch.tv/embed/AnthroSpace/chat?parent=localhost&darkpopout"
			frameborder="0"
		/>
	</div>
</section>
