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
	lineup: {
		name: string;
		links: NamedLink[];
		set_urls: NamedLink[];
	}[];
};

type NamedLink = {
	name: string;
	url: string;
};

const getEventFiles = (): Event[] => {
	return Object.entries(
		import.meta.glob<Event>("$lib/events/data/**/*.json", {
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
	try {
		const foundEvent = getEventFiles().find((event: Event) => {
			return event.slug === name;
		});

		if (!foundEvent) return null;

		return foundEvent;
	} catch (e) {
		return null;
	}
};
