import type { RequestHandler } from "./__types/index";
import { getEvents } from "$lib/get-events";

type OutputType = { events: Event[] };

export const get: RequestHandler<OutputType> = async () => {
	return {
		body: {
			events: getEvents()
		}
	};
};
