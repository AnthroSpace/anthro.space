import type { RequestHandler } from "./__types/index";
import type { EventMetadata } from "$lib/events-db";
import { listEvents } from "$lib/events-db";

type OutputType = { events: EventMetadata[] };

export const get: RequestHandler<OutputType> = async ({ url }) => {
	const events = listEvents();

	events.forEach((event) => {
		event.path = `${url.pathname}/${event.slug}`;
	});

	return {
		body: {
			events
		}
	};
};
