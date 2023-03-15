import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import Icons from "unplugin-icons/vite";

import "dotenv/config";

export default defineConfig({
  server: { https: true },

  plugins: [
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
    "import.meta.env.NEXT_PUBLIC_SUPABASE_URL": JSON.stringify(
      process.env.NEXT_PUBLIC_SUPABASE_URL
    ),
    "import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY": JSON.stringify(
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ),
    // danger uwu should not need this
    // "import.meta.env.SUPABASE_SERVICE_ROLE_KEY": JSON.stringify(process.env.SUPABASE_SERVICE_ROLE_KEY),
  },
});
