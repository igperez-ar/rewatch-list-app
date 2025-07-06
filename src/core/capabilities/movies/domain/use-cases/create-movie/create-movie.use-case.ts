import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import type { IUseCase } from '@core/contracts/use-case.interface';
import type { CreateMovieRequest, Movie } from '../../../dtos';

export class CreateMovieUseCase implements IUseCase<CreateMovieRequest, Movie> {
  private readonly repository: IMovieRepository;

  constructor(repository: IMovieRepository) {
    this.repository = repository;
  }

  async execute(request: CreateMovieRequest): Promise<Movie> {
    const response = await this.repository.createMovie(request);
    return response;
  }
}
