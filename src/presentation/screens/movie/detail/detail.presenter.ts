import type { Genre } from '@core/capabilities/genres';
import type { Movie } from '@core/capabilities/movies';
import { useEffect, useState } from 'react';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import { getOrCreateUserId } from 'src/shared/utils/user-id';
import { useMovieDetailInteractor } from './detail.interactor';
import type { MovieDetailScreenProps } from './detail.types';

type NewMovie = Omit<Movie, 'id' | 'created_at'>;

const BLANK_MOVIE: NewMovie = {
  title: '',
  comment: '',
  rating: 0,
  rewatch_count: 0,
  genre_id: 0,
  user_uuid: '',
};

export const hasId = (movie: Movie | NewMovie): movie is Movie => 'id' in movie && typeof movie.id === 'number';

export const useMovieDetailPresenter = (props: MovieDetailScreenProps) => {
  const {
    navigation,
    route: { params },
  } = props;
  const { executeCreateMovie, executeUpdateMovie, executeDeleteMovie, executeGetGenres } = useMovieDetailInteractor();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movieState, setMovieState] = useState<Movie | NewMovie>(params?.movie ?? BLANK_MOVIE);
  const selectedGenre = genres.find(item => item.id === movieState.genre_id);
  const isValid = !!movieState.title && !!movieState.comment && movieState.genre_id !== 0

  const loadGenres = async () => {
    const result = await executeGetGenres();
    setGenres(result);
  };

  useEffect(() => {
    loadGenres();
  }, []);

  const goToHome = () => {
    navigation.reset({ index: 0, routes: [{ name: MovieRoutesEnum.WATCHLIST }] });
  };

  const deleteMovie = async () => {
    if (hasId(movieState)) {
      await executeDeleteMovie(movieState.id);
      goToHome();
    }
  };

  const saveMovie = async () => {
    if (hasId(movieState)) {
      await executeUpdateMovie({ id: movieState.id, data: movieState });
    } else {
      const user_uuid = await getOrCreateUserId()
      await executeCreateMovie({ data: { ...movieState, user_uuid } });
    }
    goToHome();
  };

  return {
    genres,
    selectedGenre,
    movieState,
    setMovieState,
    deleteMovie,
    saveMovie,
    isValid,
  };
};
