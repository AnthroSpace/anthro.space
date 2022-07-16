import type { Handle } from "@sveltejs/kit";
import redirects from "$lib/redirects.json";

export const handle: Handle = async ({ event, resolve }) => {
	const redirect = redirects[event.url.pathname as keyof typeof redirects];
	if (redirect) return Response.redirect(redirect);

	return await resolve(event);
};
