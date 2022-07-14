<script lang="ts">
	import Header from "$includes/header/header.svelte";
	import Footer from "$includes/footer/footer.svelte";
	import "../app.scss";
	import Scrollbar from "$includes/scrollbar/scrollbar.svelte";
</script>

<!-- <Scrollbar /> -->

<Header />

<main>
	<slot />
	<Scrollbar />
</main>

<Footer />