import { ProviderEnum } from '@core/shared/enums';
import type { IGenreRepository } from '../../repository/genres.repository';
import { AdapterMockProvider } from '../adapter-mock/adapter-mock.provider';
import { AdapterSupabaseProvider } from '../adapter-supabase/adapter-supabase.provider';

export class GenreFactory {
  static getInstance(provider = ProviderEnum.SUPABASE): IGenreRepository {
    switch (provider) {
      case ProviderEnum.SUPABASE:
        return new AdapterSupabaseProvider();
      default:
        return new AdapterMockProvider();
    }
  }
} 