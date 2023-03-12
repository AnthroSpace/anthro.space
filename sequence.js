import { preprocess } from "svelte/compiler";

//https://gist.github.com/bluwy/5fc6f97768b7f065df4e2dbb1366db4c

/**
 * @typedef {import("svelte/types/compiler/preprocess").PreprocessorGroup} PreprocessorGroup
 * @param {PreprocessorGroup[]} preprocessors
 * @returns {PreprocessorGroup[]}
 */
export function sequence(preprocessors) {
  return preprocessors.map((preprocessor) => ({
    markup({ content, filename }) {
      return preprocess(content, preprocessor, { filename });
    }
  }));
}
