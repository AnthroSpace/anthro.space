import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
      scss: {
        prependData: `@use "src/variables.scss" as *;`,
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/components",
    },
  },
};

export default config;
