import type { ParamMatcher } from "@sveltejs/kit";

import { listEvents } from "$lib/events/db";

export const match: ParamMatcher = (param) => {
    const event = listEvents().find((e) => e.slug === param);
    if (!event) return false;
	return true;
};
