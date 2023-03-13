<script lang="ts">
  import Header from "$components/includes/Header.svelte";
  import Footer from "$components/includes/Footer.svelte";
  import Scrollbar from "$components/includes/Scrollbar.svelte";
  import Modal from "svelte-simple-modal";

  import { browser, dev } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import "../../app.scss";
  import "../../modal.scss";

  onMount(async () => {
    if (!browser) return;

    const { inject } = await import("@vercel/analytics");
    inject({ mode: dev ? "development" : "production" });

    let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
    if (!analyticsId) return;

    const { webVitals } = await import("$lib/vitals");
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  });
</script>

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
    <Scrollbar />
  </main>

  <Footer />
</Modal>

<style lang="scss">
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      background: transparent;
      width: 0px;
    }
  }
</style>
