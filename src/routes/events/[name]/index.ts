import type { RequestHandler } from "./__types/index";
import type { Event } from "$lib/events/db";
import { getEvent } from "$lib/events/db";

type OutputType = { event: Event };

export const GET: RequestHandler<OutputType> = async ({ url, params }) => {
	const event = JSON.parse(JSON.stringify(getEvent(params.name))); // clone event

	if (!event) return { status: 404 };

	event.images.posters = event.images.posters.map((p: string) => url.pathname + p); // prepend pathname to each poster (because they are relative paths)
	if (event.images.hero) event.images.hero = url.pathname + event.images.hero;
	return {
		body: {
			event
		}
	};
};
