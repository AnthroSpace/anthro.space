import roster from "$lib/events/data/_roster.json";

const getEventFiles = (): Event[] => {
	return Object.entries(
		import.meta.glob<Event>(["$lib/events/data/**/*.json", "!**/_*.json"], {
			eager: true
		})
	).map(([, event]) => event);
};

export const listEvents = (): EventMetadata[] => {
	const events = getEventFiles();

	events.sort((a, b): number => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return events.map((event): EventMetadata => {
		// reduce to what is needed by the client at this point
		return {
			name: event.name,
			date: event.date,
			slug: event.slug
		};
	});
};

export const getEvent = (name: string): Event | null => {
	const event = getEventFiles().find((event: Event) => {
		return event.slug === name;
	});
	if (!event) return null;

	// hydrate the lineup with information from _roster.json
	// event.lineup.forEach((lineupEntry: LineupDJ) => {
	// 	const rosterEntry = roster.find(
	// 		(entry: DJ) => entry.id.toLowerCase() === lineupEntry.name.toLowerCase()
	// 	);
	// 	if (!rosterEntry) return;
		
	// 	lineupEntry.links = rosterEntry.links;
	// });

	return event;
};

export const getDjById = (id: string): DJ | null => {
	const dj = roster.find((dj: DJ) => {
		return dj.id.toLowerCase() === id.toLowerCase();
	});
	return dj ? dj : null;
};

export type EventMetadata = {
	name: string;
	date: string;
	slug: string;
	path?: string;
};

export type Event = {
	slug: string;
	name: string;
	date: string;
	images: {
		hero: string;
		posters: string[];
		screenshots: string[];
	};
	lineup: Act[];
};

type NamedLink = {
	name: string;
	url: string;
};

export type DJ = {
	id: string;
	name: string;
	links: NamedLink[];
};

type Act = {
	alias: string | null;
	djs: string[];
	set_urls: NamedLink[];
};