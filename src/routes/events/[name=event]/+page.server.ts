import type { PageServerLoad } from "./$types";
import type { Event } from "$lib/events/db";
import { getEvent } from "$lib/events/db";

export const load: PageServerLoad = async ({ params }) => {
	const event: Event = JSON.parse(JSON.stringify(getEvent(params.name))); // clone event

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

	event.images.posters = event.images.posters.map((p: string) => "/img/events/" + event.slug + "/" + p);
	if (event.images.hero) event.images.hero = "/img/events/" + event.slug + "/" + event.images.hero;
	return {
		event
	};
};
