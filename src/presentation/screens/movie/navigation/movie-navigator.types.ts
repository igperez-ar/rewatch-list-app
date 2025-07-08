import type { Movie } from '@core/capabilities/movies';
import type { NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { MovieRoutesEnum } from 'src/shared/enums/routes';

export type MovieNavigatorParams = {
  [MovieRoutesEnum.DETAIL]: { movie: Movie } | undefined;
  [MovieRoutesEnum.WATCHLIST]: undefined;
};

export type MovieCompositeRoutes = ParamListBase & {
  [MovieRoutesEnum.STACK]: NavigatorScreenParams<MovieNavigatorParams>;
};
