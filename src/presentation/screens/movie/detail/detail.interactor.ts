import { GenreFactory, GetAllGenresUseCase } from '@core/capabilities/genres';
import {
  CreateMovieRequest,
  CreateMovieUseCase,
  DeleteMovieUseCase,
  MovieFactory,
  UpdateMovieRequest,
  UpdateMovieUseCase
} from '@core/capabilities/movies';

export const useMovieDetailInteractor = (
  deleteMovieUseCase = new DeleteMovieUseCase(MovieFactory.getInstance()),
  createMovieUseCase = new CreateMovieUseCase(MovieFactory.getInstance()),
  updateMovieUseCase = new UpdateMovieUseCase(MovieFactory.getInstance()),
  getAllGenresUseCase = new GetAllGenresUseCase(GenreFactory.getInstance()),
) => {

  const executeDeleteMovie = (id: number) => {
    try {
      return deleteMovieUseCase.execute(id);
    } catch (error) {
      throw error;
    }
  };

  const executeCreateMovie = (request: CreateMovieRequest) => {
    try {
      return createMovieUseCase.execute(request);
    } catch (error) {
      throw error;
    }
  };

  const executeUpdateMovie = (request: UpdateMovieRequest) => {
    try {
      return updateMovieUseCase.execute(request);
    } catch (error) {
      throw error;
    }
  };

  const executeGetGenres = () => {
    try {
      return getAllGenresUseCase.execute();
    } catch (error) {
      throw error;
    }
  };

  return {
    executeDeleteMovie,
    executeCreateMovie,
    executeUpdateMovie,
    executeGetGenres,
  };
};
