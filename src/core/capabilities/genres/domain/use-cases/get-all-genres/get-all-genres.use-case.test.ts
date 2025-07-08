
import { GENRES } from '@testing/fixtures/movies';
import type { IGenreRepository } from '../../../repository/genres.repository';
import { GetAllGenresUseCase } from './get-all-genres.use-case';

describe('GetAllGenresUseCase', () => {
  it('should return all genres from the repository', async () => {
    const repository: IGenreRepository = {
      getAllGenres: jest.fn().mockResolvedValue(GENRES),
    };
    const useCase = new GetAllGenresUseCase(repository);
    const result = await useCase.execute();
    expect(result).toEqual(GENRES);
    expect(repository.getAllGenres).toHaveBeenCalled();
  });
}); 