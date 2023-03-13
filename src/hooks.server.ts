import type { Handle } from "@sveltejs/kit";
import redirects from "$lib/redirects.json";
import { createClient } from "@supabase/supabase-js";

export const handle: Handle = (async ({ event, resolve }) => {
  const redirect = redirects[event.url.pathname as keyof typeof redirects];
  if (redirect) return Response.redirect(redirect);

  const supabase = createClient(
    import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
    import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  event.locals = { supabase };

  return await resolve(event);
}) satisfies Handle;

//https://kit.svelte.dev/docs/hooks
