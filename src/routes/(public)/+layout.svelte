<script lang="ts">
  import Header from "$components/includes/Header.svelte";
  import Footer from "$components/includes/Footer.svelte";
  import Scrollbar from "$components/includes/Scrollbar.svelte";
  import Modal from "svelte-simple-modal";

  import "../../app.scss";
  import "../../modal.scss";
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
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      background: transparent; /* Chrome/Safari/Webkit */
      width: 0px;
    }
  }
</style>
