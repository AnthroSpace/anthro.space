<script lang="ts">
  import type { LayoutData } from "./$types";
  export let data: LayoutData;

  import Header from "$components/includes/Header.svelte";
  import Footer from "$components/includes/Footer.svelte";
  import Scrollbar from "$components/includes/Scrollbar.svelte";


  import { ProgressBar } from "@prgm/sveltekit-progress-bar";
  import Modal from "svelte-simple-modal";

  import "../../app.scss";
  import "../../modal.scss";
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

{#await import("$components/includes/Analytics.svelte") then module}
  <svelte:component this={module.default} />
{/await}

<ProgressBar color="#a979f2" zIndex={1000} />

<Modal
  unstyled={true}
  disableFocusTrap={true}
  classBg="modalBg"
  classWindowWrap="modalWrap"
  classWindow="modalWindow"
  classContent="modalContent"
  closeButton={false}>
  <Header />

  <main>
    <slot />
  </main>

  <Scrollbar />
  <Footer />
</Modal>
