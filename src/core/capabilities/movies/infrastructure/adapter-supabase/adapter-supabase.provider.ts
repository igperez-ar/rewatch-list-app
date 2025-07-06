import { supabase } from 'lib/supabase/supabase.instance';
import type {
  CreateMovieRequest,
  MovieEntity,
  MoviesByUserRequest,
  UpdateMovieRequest
} from '../../dtos';
import type { IMovieRepository } from '../../repository/movies.repository';

export class AdapterSupabaseProvider implements IMovieRepository {

  async getAllByUser({ user_uuid }: MoviesByUserRequest): Promise<MovieEntity[]> {
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .eq('user_uuid', user_uuid)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  async createMovie(request: CreateMovieRequest): Promise<MovieEntity> {
    const { data, error } = await supabase
      .from('movies')
      .insert([request.data])
      .select()

    if (error) throw error;
    return data[0];
  }

  async updateMovie({ id, data }: UpdateMovieRequest): Promise<void> {
    const { error } = await supabase
      .from('movies')
      .update(data)
      .eq('id', id)
      .select()

    if (error) throw error
  }

  async deleteMovie(id: number): Promise<void> {
    const { error } = await supabase
      .from('movies')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}
