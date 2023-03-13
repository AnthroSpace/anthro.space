<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  $: onMount(async () => {
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
