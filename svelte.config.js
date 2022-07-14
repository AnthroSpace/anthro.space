import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";
// import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
			// postcss: {
			//     plugins: [autoprefixer()]
			// }
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$static: "static",
			$pages: "src/components/pages",
			$includes: "src/components/includes"
		}
	}
};

export default config;
