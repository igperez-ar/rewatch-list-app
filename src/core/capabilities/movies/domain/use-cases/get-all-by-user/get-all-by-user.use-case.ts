import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import type { IUseCase } from '@core/contracts/use-case.interface';
import type { Movie, MoviesByUserRequest } from '../../../dtos';

export class GetAllByUserUseCase implements IUseCase<MoviesByUserRequest, Movie[]> {
  private readonly repository: IMovieRepository;

  constructor(repository: IMovieRepository) {
    this.repository = repository;
  }

  async execute(request: MoviesByUserRequest): Promise<Movie[]> {
    const response = await this.repository.getAllByUser(request);
    return response;
  }
}
