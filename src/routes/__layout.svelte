<script lang="ts">
	import Header from "$lib/header/header.svelte";
	import Footer from "$lib/footer/footer.svelte";
	import "../app.scss";
	// import Scrollbar from "$lib/scrollbar/Scrollbar.svelte";
</script>

<!-- <Scrollbar /> -->

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
