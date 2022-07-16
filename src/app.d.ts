/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Member {
			name: string;
			title: string;
			twitter: string | null;
		}

		interface Event {
			name: string;
			date: string;
			images: { posters: EventLink[]; screenshots: EventLink[] };
			lineup: DJ[];
		}

		interface DJ {
			name: string;
			links: EventLink[];
			set_urls: EventLink[];
		}

		interface EventLink {
			name: string;
			url: string;
		}
	}
}
