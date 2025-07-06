import type { GenreEntity } from '../dtos';

export interface IGenreRepository {
  getAllGenres(): Promise<GenreEntity[]>;
} 