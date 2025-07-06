import { Database } from "lib/supabase/database.types";

export type GenreEntity = Database['public']['Tables']['genres']['Row'];

export type Genre = Omit<GenreEntity, 'created_at'>;