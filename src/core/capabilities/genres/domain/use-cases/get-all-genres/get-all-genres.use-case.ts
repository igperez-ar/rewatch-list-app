import type { IUseCase } from '@core/contracts/use-case.interface';
import type { GenreEntity } from '../../../dtos';
import type { IGenreRepository } from '../../../repository/genres.repository';

export class GetAllGenresUseCase implements IUseCase<void, GenreEntity[]> {
  constructor(private readonly repository: IGenreRepository) { }

  execute(): Promise<GenreEntity[]> {
    return this.repository.getAllGenres();
  }
} 