<script lang="ts">
	import "../app.css";
	import Header from "$includes/header/header.svelte";
	import Footer from "$includes/footer/footer.svelte";
	import "../app.scss";
	import Scrollbar from "$includes/scrollbar/scrollbar.svelte";
</script>

<Header />

<main>
	<slot />
	<Scrollbar />
</main>

<Footer />
