import type { PageServerLoad } from "./$types";
import { listEvents } from "$lib/events/db";

export const load: PageServerLoad = async ({ url }) => {
  const events = listEvents();

  events.forEach((event) => (event.path = `${url.pathname}/${event.slug}`));

  return { events };
};
