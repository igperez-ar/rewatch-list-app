import type { Movie } from '@core/capabilities/movies';

export type MovieListState = {
  data: Movie[];
  error: boolean;
  loading: boolean;
};
