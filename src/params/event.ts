import type { ParamMatcher } from "@sveltejs/kit";

import { listEvents } from "$lib/events/db";

export const match: ParamMatcher = (param) =>
	listEvents().find((e) => e.slug === param) ? true : false;
