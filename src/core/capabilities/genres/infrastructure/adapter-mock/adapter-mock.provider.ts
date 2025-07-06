import type { GenreEntity } from '../../dtos';
import type { IGenreRepository } from '../../repository/genres.repository';

export class AdapterMockProvider implements IGenreRepository {
  getAllGenres(): Promise<GenreEntity[]> {
    throw new Error('Method not implemented.');
  }
} 