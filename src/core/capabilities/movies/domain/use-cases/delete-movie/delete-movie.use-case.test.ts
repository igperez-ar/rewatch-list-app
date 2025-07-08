import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import { MOVIES } from '@testing/fixtures/movies';
import { DeleteMovieUseCase } from './delete-movie.use-case';

describe('DeleteMovieUseCase', () => {
  const MOVIE = MOVIES[0];
  let mockRepository: jest.Mocked<IMovieRepository> = {
    deleteMovie: jest.fn(),
  } as any;
  let deleteMovieUseCase: DeleteMovieUseCase = new DeleteMovieUseCase(mockRepository);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should delete a Movie successfully', async () => {
    mockRepository.deleteMovie.mockResolvedValue();

    const result = await deleteMovieUseCase.execute(MOVIE.id);

    expect(mockRepository.deleteMovie).toHaveBeenCalledWith(MOVIE.id);
    expect(result).toBeUndefined();
  });

  it('should handle exceptions thrown by the repository method', async () => {
    const error = {
      "code": "22P02",
      "details": null,
      "hint": null,
      "message": "invalid input syntax for type bigint: \"test\""
    }
    mockRepository.deleteMovie.mockRejectedValue(new Error(error.message));

    await expect(deleteMovieUseCase.execute('test' as any)).rejects.toThrow(error.message);
  });
});
