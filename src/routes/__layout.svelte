<script lang="ts">
	import Header from "$includes/header/header.svelte";
	import Footer from "$includes/footer/footer.svelte";
	import "../app.scss";
	// import Scrollbar from "$lib/scrollbar/Scrollbar.svelte";
</script>

<!-- <Scrollbar /> -->

<Header />

<main>
	<slot />
</main>

<Footer />