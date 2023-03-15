import type { Handle } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/client";
import redirects from "$lib/redirects.json";

export const handle: Handle = (async ({ event, resolve }) => {
  const redirect = redirects[event.url.pathname as keyof typeof redirects];
  if (redirect) return Response.redirect(redirect);

  event.locals = { supabase };

  return await resolve(event);
}) satisfies Handle;

//https://kit.svelte.dev/docs/hooks
