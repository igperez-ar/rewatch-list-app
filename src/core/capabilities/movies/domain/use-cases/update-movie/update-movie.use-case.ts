import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import type { IUseCase } from '@core/contracts/use-case.interface';
import type { UpdateMovieRequest } from '../../../dtos';

export class UpdateMovieUseCase implements IUseCase<UpdateMovieRequest, void> {
  private readonly repository: IMovieRepository;

  constructor(repository: IMovieRepository) {
    this.repository = repository;
  }

  async execute(request: UpdateMovieRequest): Promise<void> {
    const response = await this.repository.updateMovie(request);
    return response;
  }
}
