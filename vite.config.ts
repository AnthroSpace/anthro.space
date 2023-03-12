import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: { https: true },

  plugins: [sveltekit(), basicSsl()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/variables.scss" as *;`
      }
    }
  }
});
