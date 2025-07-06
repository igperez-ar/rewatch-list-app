import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import type { IUseCase } from '@core/contracts/use-case.interface';

export class DeleteMovieUseCase implements IUseCase<number, void> {
  private readonly repository: IMovieRepository;

  constructor(repository: IMovieRepository) {
    this.repository = repository;
  }

  async execute(id: number): Promise<void> {
    const response = await this.repository.deleteMovie(id);
    return response;
  }
}
