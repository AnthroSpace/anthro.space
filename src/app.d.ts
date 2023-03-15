/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "$lib/supabase/types";
import type { Application } from "pixi.js";

declare global {
  // eslint-disable-next-line no-var -- this does not work with const or let (https://stackoverflow.com/a/69429093)
  var __PIXI_APP__: Application;
  namespace App {
    interface Error {
      message: string;
      // stack: string;
    }
    interface Locals {
      supabase: SupabaseClient<Database>;
    }
    interface PageData {
      subtitle?: string;
      events?: {
        name: string;
        date: string;
        path: string;
      };
    }
    interface LayoutData {
      title: string;
    }
    // interface Platform {}
  }
}
