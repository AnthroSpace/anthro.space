import type { PageServerLoad } from "./$types";
import type { Event } from "$lib/events/db";
import { getEvent } from "$lib/events/db";

export const load: PageServerLoad = async ({ url, params }) => {
	const event: Event = JSON.parse(JSON.stringify(getEvent(params.name))); // clone event

	if (!event) return { status: 404 };

	// Object.entries(event.images).forEach(([key, value]) => {
	// 	if (!Array.isArray(value)) {
	// 		if (!value) return;
	// 		import(`../../../lib/events/data/${event.slug}/img/${value.replace(".png", "")}.png?webp`).then(
	// 			(module) => {
	// 				console.log(module.default);
	// 			}
	// 		);
	// 		return;
	// 	}
	// 	event.images[key] = value.forEach((image) => {
	// 		import(`../../../lib/events/data/${event.slug}/img/${image}?webp`).then(
	// 			({ default: img }) => {
	// 				image = img;
	// 			}
	// 		);
	// 	});
	// });

	event.images.posters = event.images.posters.map((p: string) => url.pathname + "/" + p + "?webp"); // prepend pathname to each poster (because they are relative paths)
	if (event.images.hero) event.images.hero = url.pathname + "/" + event.images.hero;
	return {
		event
	};
};
