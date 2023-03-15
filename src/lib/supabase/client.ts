import { createClient } from "@supabase/supabase-js";
import type { Database } from "$lib/supabase/types"; // GENERATED DO NOT TOUCH

export const supabase = createClient<Database>(
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
