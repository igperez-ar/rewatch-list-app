import { supabase } from 'lib/supabase/supabase.instance';
import type { GenreEntity } from '../../dtos';
import type { IGenreRepository } from '../../repository/genres.repository';

export class AdapterSupabaseProvider implements IGenreRepository {

  async getAllGenres(): Promise<GenreEntity[]> {
    const { data, error } = await supabase
      .from('genres')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
} 