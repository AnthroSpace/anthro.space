import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { imagetools } from "vite-imagetools";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  server: { https: true },

  plugins: [
    imagetools(),
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
    basicSsl(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/variables.scss" as *;`,
      },
    },
  },

  define: {
    "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
  },
});
