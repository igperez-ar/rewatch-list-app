import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import { MOVIES } from '@testing/fixtures/movies';
import { CreateMovieUseCase } from './create-movie.use-case';
import { getOrCreateUserId } from 'src/shared/utils';

describe('CreateMovieUseCase', () => {
  const MOVIE = MOVIES[0];
  const request = (({ id, created_at, user_uuid, ...rest }) => rest)(MOVIE);

  let createMovieUseCase: CreateMovieUseCase;
  let mockRepository: jest.Mocked<IMovieRepository>;

  beforeEach(() => {
    mockRepository = {
      createMovie: jest.fn(),
    } as any;

    createMovieUseCase = new CreateMovieUseCase(mockRepository);
  });

  it('should create a Movie successfully', async () => {
    mockRepository.createMovie.mockResolvedValue(MOVIE);

    const user_uuid = await getOrCreateUserId();
    const result = await createMovieUseCase.execute({ data: { ...request, user_uuid } });

    expect(mockRepository.createMovie).toHaveBeenCalledWith({
      data: expect.objectContaining({
        user_uuid: 'b0f1a7b4-97fa-4f9e-b00f-28111fd2b1c1'
      })
    });
    expect(result).toEqual(MOVIE);
  });

  it('should handle exceptions thrown by the repository method', async () => {
    const error = {
      "code": "23502",
      "details": "Failing row contains (3, Inception, Incredible visuals and concept, 3, 15, 2, 2024-12-01 00:00:00+00, null).",
      "hint": null,
      "message": "null value in column \"user_uuid\" of relation \"movies\" violates not-null constraint"
    }
    mockRepository.createMovie.mockRejectedValue(new Error(error.message));

    await expect(createMovieUseCase.execute({ data: request as typeof MOVIE })).rejects.toThrow(error.message);
  });
});
