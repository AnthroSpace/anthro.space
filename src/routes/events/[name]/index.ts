import type { RequestHandler } from "./__types/index";
import { getEvent } from "$lib/events-db";

type OutputType = { event: Event };

export const get: RequestHandler<OutputType> = async ({ url, params }) => {
	const event = JSON.parse(JSON.stringify(getEvent(params.name))); // clone event

	if (!event) return { status: 404 };

	event.images.posters = event.images.posters.map((p) => url.pathname + p); // prepend pathname to each poster (because they are relative paths)
	if (event.images.hero) event.images.hero = url.pathname + event.images.hero;
	return {
		body: {
			event
		}
	};
};
