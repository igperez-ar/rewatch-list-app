import type {
  CreateMovieRequest,
  MovieEntity,
  MoviesByUserRequest,
  UpdateMovieRequest
} from '../../dtos';
import type { IMovieRepository } from '../../repository/movies.repository';

export class AdapterMockProvider implements IMovieRepository {
  getAllByUser(request: MoviesByUserRequest): Promise<MovieEntity[]> {
    throw new Error('Method not implemented.');
  }
  createMovie(request: CreateMovieRequest): Promise<MovieEntity> {
    throw new Error('Method not implemented.');
  }
  updateMovie(request: UpdateMovieRequest): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteMovie(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
