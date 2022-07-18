import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import importAssets from "svelte-preprocess-import-assets";

import { sequence } from "./sequence.js";

const config = {
	preprocess: sequence([
		preprocess({
			scss: {
				prependData: `@use "src/variables.scss" as *;`
			},
			postcss: true
		}),
		importAssets()
	]),

	// vitePlugin: {
	// 	experimental: {
	// 		useVitePreprocess: true
	// 	}
	// },

	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/components"
		}
	}
};

export default config;
