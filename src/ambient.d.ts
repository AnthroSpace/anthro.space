interface Member {
  name: string;
  title: string;
  twitter: string | null;
}

interface EventMetadata {
  name: string;
  date: string;
  slug: string;
  path?: string;
}

interface Event {
  slug: string;
  name: string;
  date: string;
  images: {
    hero: string;
    posters: string[];
    screenshots: string[];
  };
  lineup: Act[];
}

interface NamedLink {
  name: string;
  url: string;
}

interface DJ {
  id: string;
  name: string;
  links: NamedLink[];
}

interface Act {
  alias: string | null;
  djs: string[];
  set_urls: NamedLink[];
}
