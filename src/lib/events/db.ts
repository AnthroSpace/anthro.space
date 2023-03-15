import roster from "$lib/events/data/_roster.json";

const readEvents = (): Event[] => {
  return Object.entries(
    import.meta.glob<Event>(["$lib/events/data/**/*.json", "!**/_*.json"], {
      eager: true,
    })
  ).map(([, event]) => event);
};

export const listEvents = (): EventMetadata[] => {
  const events = readEvents();

  events.sort((a, b): number => new Date(b.date).getTime() - new Date(a.date).getTime());

  return events.map((event): EventMetadata => {
    // reduce to what is needed by the client at this point
    return {
      name: event.name,
      date: event.date,
      slug: event.slug,
    };
  });
};

export const getEvent = (name: string): Event | null => {
  const event = readEvents().find((event: Event) => event.slug === name);
  if (!event) return null;

  return event;
};

export const getDjById = (id: string): DJ | null => {
  const dj = roster.find((dj: DJ) => dj.id.toLowerCase() === id.toLowerCase());
  return dj ? dj : null;
};
