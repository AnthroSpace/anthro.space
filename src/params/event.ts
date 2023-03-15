import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = ((param) => {
  return true; // temporary
}) satisfies ParamMatcher;
