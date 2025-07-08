import {
  GetAllByUserUseCase,
  MovieFactory
} from '@core/capabilities/movies';
import { getOrCreateUserId } from 'src/shared/utils/user-id';

export const useWatchistInteractor = (
  getAllByUserUseCase = new GetAllByUserUseCase(MovieFactory.getInstance()),
) => {
  const executeGetAllByUser = async () => {
    try {
      const user_uuid = await getOrCreateUserId();
      return getAllByUserUseCase.execute({ user_uuid });
    } catch (error) {
      throw error;
    }
  };

  return { executeGetAllByUser };
};
