import { Database } from "lib/supabase/database.types";

export type MovieEntity = Database['public']['Tables']['movies']['Row'];

export type Movie = MovieEntity

export type MoviesByUserRequest = {
  user_uuid: string;
};

export type CreateMovieRequest = {
  data: Omit<Movie, 'id' | 'created_at'>
};

export type UpdateMovieRequest = {
  id: number,
  data: Partial<MovieEntity>
};
