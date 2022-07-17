export type EventMetadata = {
	name: string;
	date: string;
	slug: string;
	path?: string;
};

export type Event = {
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

export const listEvents = (): EventMetadata[] => {
	const events = Object.entries(import.meta.globEager("$lib/eventinfo/**/*.json")).sort((a, b) => {
		return new Date(b[1].date).getTime() - new Date(a[1].date).getTime();
	});

	return events.map(([filename, event]) => {
		return {
			name: event.name,
			date: event.date,
			slug: filename.split("/").pop()?.replace(".json", "") || ""
		};
	});
};

export const getEvent = (name: string): Event | null => {
	try {
		const a = Object.entries(import.meta.globEager(`$lib/eventinfo/**/*.json`)).find(
			([filename]) => {
				return filename.split("/").pop()?.replace(".json", "") === name;
			}
		);
		if (!a) return null;
		return a[1].default;
	} catch (e) {
		return null;
	}
};
