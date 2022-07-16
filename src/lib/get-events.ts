export function getEvents() {
	const events = Object.entries(import.meta.globEager("$lib/eventinfo/**/*.json")).sort((a, b) => {
		return (new Date(b[1].date).getTime() - new Date(a[1].date).getTime());
	});


	return events.map(([filename, event]) => {
		return {
			name: event.name,
			date: event.date,
			slug: filename.split("/")[2].replace(".json", "")
		};
	});
}
