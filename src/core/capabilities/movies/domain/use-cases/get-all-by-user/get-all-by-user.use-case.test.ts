import type { IMovieRepository } from '@core/capabilities/movies/repository/movies.repository';
import { MOVIES } from '@testing/fixtures/movies';
import { getOrCreateUserId } from 'src/shared/utils';
import { GetAllByUserUseCase } from './get-all-by-user.use-case';

describe('GetAllByUserUseCase', () => {
  let getAllByUserUseCase: GetAllByUserUseCase;
  let mockRepository: jest.Mocked<IMovieRepository>;

  beforeEach(() => {
    mockRepository = {
      getAllByUser: jest.fn(),
    } as any;

    getAllByUserUseCase = new GetAllByUserUseCase(mockRepository);
  });

  it('should retrieve Movies data successfully', async () => {
    mockRepository.getAllByUser.mockResolvedValue(MOVIES);

    const user_uuid = await getOrCreateUserId();
    const result = await getAllByUserUseCase.execute({ user_uuid });

    expect(mockRepository.getAllByUser).toHaveBeenCalledWith({ user_uuid });
    expect(result).toEqual(MOVIES);
  });

  it('should handle exceptions thrown by the repository method', async () => {
    const error = {
      "code": "22P02",
      "details": null,
      "hint": null,
      "message": "invalid input syntax for type uuid: \"2\""
    }
    mockRepository.getAllByUser.mockRejectedValue(new Error(error.message));

    await expect(
      getAllByUserUseCase.execute({ user_uuid: 2 as any }),
    ).rejects.toThrow(error.message);
  });
});
