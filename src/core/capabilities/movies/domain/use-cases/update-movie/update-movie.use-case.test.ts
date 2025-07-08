
import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import { MOVIES } from '@testing/fixtures/movies';
import { UpdateMovieUseCase } from './update-movie.use-case';

describe('UpdateMovieUseCase', () => {
  const MOVIE = MOVIES[0];
  let updateMovieUseCase: UpdateMovieUseCase;
  let mockRepository: jest.Mocked<IMovieRepository>;

  beforeEach(() => {
    mockRepository = {
      updateMovie: jest.fn(),
    } as any;

    updateMovieUseCase = new UpdateMovieUseCase(mockRepository);
  });

  it('should update a Movie successfully', async () => {
    mockRepository.updateMovie.mockResolvedValue();

    const result = await updateMovieUseCase.execute({ id: MOVIE.id, data: MOVIE });

    expect(mockRepository.updateMovie).toHaveBeenCalledWith({ id: MOVIE.id, data: MOVIE });
    expect(result).toBeUndefined();
  });

  it('should handle exceptions thrown by the repository method', async () => {
    const error = {
      "code": "22P02",
      "details": null,
      "hint": null,
      "message": "invalid input syntax for type bigint: \"test\""
    }
    mockRepository.updateMovie.mockRejectedValue(new Error(error.message));

    await expect(
      updateMovieUseCase.execute({ id: 'test' as any, data: MOVIE }),
    ).rejects.toThrow(error.message);
  });
});
