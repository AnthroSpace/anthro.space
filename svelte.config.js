import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
// import type {Config} from "@sveltejs/kit";

const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@use "src/variables.scss" as *;`
			},
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/components"
		}
	}
};

export default config;
