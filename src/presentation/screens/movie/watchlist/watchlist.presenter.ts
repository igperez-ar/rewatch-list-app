import type { Movie } from '@core/capabilities/movies';
import { useEffect, useState } from 'react';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import { useWatchistInteractor } from './watchlist.interactor';
import type { MovieListState, WatchlistScreenProps } from './watchlist.types';

const initialState: MovieListState = {
  loading: true,
  error: false,
  data: [],
};

export const useWatchlistPresenter = ({ navigation }: WatchlistScreenProps) => {
  const { executeGetAllByUser } = useWatchistInteractor();
  const [movieState, setMovieState] = useState<MovieListState>(initialState);

  const goToEdition = (movie: Movie) => {
    navigation.navigate(MovieRoutesEnum.STACK, {
      screen: MovieRoutesEnum.DETAIL,
      params: { movie },
    });
  };
  const goToCreation = () => {
    navigation.navigate(MovieRoutesEnum.STACK, {
      screen: MovieRoutesEnum.DETAIL,
    });
  };

  const loadMovies = async () => {
    try {
      const result = await executeGetAllByUser();

      setMovieState({
        error: false,
        loading: false,
        data: result,
      });
    } catch (error) {
      setMovieState({
        error: true,
        loading: false,
        data: [],
      });
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return {
    movieState,
    goToEdition,
    goToCreation,
  };
};
