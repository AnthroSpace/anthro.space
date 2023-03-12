import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

import { sequence } from "./sequence.js";

const config = {
  preprocess: sequence([
    preprocess({
      scss: {
        prependData: `@use "src/variables.scss" as *;`
      }
      // postcss: true
    })
  ]),

  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/components"
    }
  }
};

export default config;
