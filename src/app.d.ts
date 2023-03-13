/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { SupabaseClient } from "@supabase/supabase-js";

declare global {
  namespace App {
    interface Error {
      message: string;
      stack: string;
    }
    interface Locals {
      supabase: SupabaseClient;
    }
    // interface PageData {}
    // interface Platform {}
  }
}
