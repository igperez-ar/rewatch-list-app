import type {
  CreateMovieRequest,
  Movie,
  MoviesByUserRequest,
  UpdateMovieRequest
} from '../dtos';

export interface IMovieRepository {
  getAllByUser(request: MoviesByUserRequest): Promise<Movie[]>;
  createMovie(request: CreateMovieRequest): Promise<Movie>;
  updateMovie(request: UpdateMovieRequest): Promise<void>;
  deleteMovie(id: number): Promise<void>;
}
