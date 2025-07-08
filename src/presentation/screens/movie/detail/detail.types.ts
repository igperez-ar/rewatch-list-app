import type { CreateMovieRequest, Movie } from '@core/capabilities/movies';
import type { NestedScreenProps } from '@core/infrastructure/navigation/navigation.types';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import type { MovieNavigatorParams } from '../navigation/movie-navigator.types';

export type MovieDetailScreenProps = NestedScreenProps<
  MovieRoutesEnum.DETAIL,
  MovieRoutesEnum.STACK,
  MovieNavigatorParams
>;

export type MovieFormState = Movie | CreateMovieRequest['data'];