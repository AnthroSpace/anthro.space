import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ url, locals }) => {
  const { data: eventsMetadata, error: err } = await locals.supabase
    .from("events")
    .select("name, date, slug")
    .order("date", { ascending: false });

  if (err) throw error(502, { message: "Could not connect to database" });

  return {
    events: eventsMetadata.map((e) => ({
      name: e.name,
      date: e.date,
      path: `${url.pathname}/${e.slug}`,
    })),
  };
}) satisfies PageServerLoad;
