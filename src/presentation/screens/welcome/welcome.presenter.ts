import type { ScreenProps } from '@core/infrastructure/navigation/navigation.types';
import { setFlagValue } from '@core/infrastructure/storage/modules/config';
import { useAppDispatch } from 'src/core/infrastructure/index';
import { GlobalRoutesEnum, MovieRoutesEnum } from 'src/shared/enums/routes';

export const useWelcomePresenter = ({ navigation }: ScreenProps<GlobalRoutesEnum.WELCOME>) => {
  const dispatch = useAppDispatch();

  const handleButtonPress = () => {
    dispatch(setFlagValue({ hasLaunched: true }));

    navigation.reset({ index: 0, routes: [{ name: MovieRoutesEnum.STACK }] });
  };

  return { handleButtonPress };
};
