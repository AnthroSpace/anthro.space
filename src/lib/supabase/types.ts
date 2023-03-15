export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          date: string;
          id: number;
          images: Json;
          name: string;
          slug: string;
        };
        Insert: {
          date: string;
          id?: number;
          images: Json;
          name: string;
          slug: string;
        };
        Update: {
          date?: string;
          id?: number;
          images?: Json;
          name?: string;
          slug?: string;
        };
      };
      "may-twenty-thirst": {
        Row: {
          alias: string | null;
          djs: string[];
          id: number;
          set_urls: Json[] | null;
        };
        Insert: {
          alias?: string | null;
          djs: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
        Update: {
          alias?: string | null;
          djs?: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
      };
      "pooltoy-equinox": {
        Row: {
          alias: string | null;
          djs: string[];
          id: number;
          set_urls: Json[] | null;
        };
        Insert: {
          alias?: string | null;
          djs: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
        Update: {
          alias?: string | null;
          djs?: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
      };
      "pooltoy-solstice": {
        Row: {
          alias: string | null;
          djs: string[];
          id: number;
          set_urls: Json[] | null;
        };
        Insert: {
          alias?: string | null;
          djs: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
        Update: {
          alias?: string | null;
          djs?: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
      };
      roster: {
        Row: {
          bio: string | null;
          id: string;
          links: Json[];
          man_idk: string | null;
          name: string;
          profile_picture: string | null;
        };
        Insert: {
          bio?: string | null;
          id?: string;
          links: Json[];
          man_idk?: string | null;
          name?: string;
          profile_picture?: string | null;
        };
        Update: {
          bio?: string | null;
          id?: string;
          links?: Json[];
          man_idk?: string | null;
          name?: string;
          profile_picture?: string | null;
        };
      };
      socials: {
        Row: {
          id: number;
          name: string;
          url: string;
        };
        Insert: {
          id?: number;
          name?: string;
          url?: string;
        };
        Update: {
          id?: number;
          name?: string;
          url?: string;
        };
      };
      "untitled-als": {
        Row: {
          alias: string | null;
          djs: string[];
          id: number;
          set_urls: Json[] | null;
        };
        Insert: {
          alias?: string | null;
          djs: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
        Update: {
          alias?: string | null;
          djs?: string[];
          id?: number;
          set_urls?: Json[] | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
