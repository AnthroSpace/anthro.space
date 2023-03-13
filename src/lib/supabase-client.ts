import { createClient, SupabaseClient } from "@supabase/supabase-js";

class supabaseConnection {
  url: string;
  key: string;
  client: SupabaseClient;

  constructor(url: string, key: string) {
    if (!url || !key) throw new Error("Missing url or key");
    this.url = url;
    this.key = key;
    this.client = createClient(url, key);
  }

  async getTable(tableName: string) {
    const { data, error } = await this.client.from(tableName).select("*");
    if (error) throw new Error(error.message);
    return data;
  }

  async getProfilePicture(id: string) {
    const { data, error } = await this.client
      .from("profile-pictures")
      .select("*")
      .eq("user_id", id);
    if (error) throw new Error(error.message);
    return data;
  }
}

export default supabaseConnection;
