/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare global {
  namespace App {
    interface Error {
      message: string;
      stack: string;
    }
    interface Member {
      name: string;
      title: string;
      twitter: string | null;
    }
  }
}
