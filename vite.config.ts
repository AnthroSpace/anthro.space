import { sveltekit } from "@sveltejs/kit/vite";
import { UserConfig } from "vite";
import autoprefixer from "autoprefixer";
import { imagetools } from "vite-imagetools";

const config: UserConfig = {
	plugins: [sveltekit(), imagetools()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			},
			postcss: {
				plugins: [
					autoprefixer()]
			}
		}
	}
};

export default config;
