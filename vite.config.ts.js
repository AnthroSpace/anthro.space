// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import "vite";
import { imagetools } from "vite-imagetools";
var config = {
  plugins: [sveltekit(), imagetools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;'
      }
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gXCJAc3ZlbHRlanMva2l0L3ZpdGVcIjtcbmltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gXCJ2aXRlLWltYWdldG9vbHNcIjtcblxuY29uc3QgY29uZmlnOiBVc2VyQ29uZmlnID0ge1xuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCksIGltYWdldG9vbHMoKV0sXG5cblx0Y3NzOiB7XG5cdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0c2Nzczoge1xuXHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogJ0B1c2UgXCJzcmMvdmFyaWFibGVzLnNjc3NcIiBhcyAqOydcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNLFNBQXFCO0FBQUEsRUFDMUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7QUFBQSxFQUVuQyxLQUFLO0FBQUEsSUFDSixxQkFBcUI7QUFBQSxNQUNwQixNQUFNO0FBQUEsUUFDTCxnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0Q7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
