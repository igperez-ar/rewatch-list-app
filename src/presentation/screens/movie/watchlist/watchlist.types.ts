import type { Movie } from '@core/capabilities/movies';
import type { NestedScreenProps } from '@core/infrastructure/navigation/navigation.types';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import type { MovieNavigatorParams } from '../navigation/movie-navigator.types';

export type WatchlistScreenProps = NestedScreenProps<
  MovieRoutesEnum.WATCHLIST,
  MovieRoutesEnum.STACK,
  MovieNavigatorParams
>;

export type MovieListState = {
  data: Movie[];
  error: boolean;
  loading: boolean;
};
