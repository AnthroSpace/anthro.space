import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
// import type {Config} from "@sveltejs/kit";
import autoprefixer from "autoprefixer";

const config = {
	preprocess: [
		preprocess({
			// postcss: {
			// 	plugins: [autoprefixer()]
			// },
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},

			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$pages: "src/components/pages",
			$includes: "src/components/includes"
		}
	}
};

export default config;
