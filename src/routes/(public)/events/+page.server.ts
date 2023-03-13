import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ url, locals }) => {
  const { data: events, error } = await locals.supabase.from("events").select("*");
  if (error) return { status: 500, error: error.message };

  const transformedEvents = events
    .map((event) => {
      return {
        name: event.name,
        date: event.date, // maybe do something with date
        path: `${url.pathname}/${event.slug}`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { events: transformedEvents };
}) satisfies PageServerLoad;
