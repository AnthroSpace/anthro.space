<script lang="ts">
  import Header from "$components/includes/header/header.svelte";
  import Footer from "$components/includes/footer/footer.svelte";
  import Scrollbar from "$components/includes/scrollbar/scrollbar.svelte";

  import "../app.scss";
</script>

<Header />

<main>
  <slot />
  <Scrollbar />
</main>

<Footer />
