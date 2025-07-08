import { fireEvent, renderWithNavigation, waitFor } from '@testing/test-utils';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import { MovieDetailScreen } from './detail.screen';
import { GENRES, MOVIES } from '@testing/fixtures/movies';
import { GetAllGenresUseCase } from '@core/capabilities/genres';
import {
  CreateMovieUseCase,
  DeleteMovieUseCase,
  UpdateMovieUseCase,
} from '@core/capabilities/movies';

const MOVIE = MOVIES[0];
const ROUTE_PROPS = {
  routeName: MovieRoutesEnum.DETAIL,
  routeParams: { movie: MOVIE },
};

describe('DetailScreen', () => {
  beforeAll(() => {
    jest
      .spyOn(GetAllGenresUseCase.prototype, 'execute')
      .mockResolvedValue(GENRES);
  });

  it('should render successfully', async () => {
    const { getByText, getByDisplayValue } = renderWithNavigation(
      MovieDetailScreen as any,
      ROUTE_PROPS,
    );

    await waitFor(() => {
      expect(getByDisplayValue(MOVIE.title)).toBeTruthy();
      expect(getByDisplayValue(MOVIE.comment)).toBeTruthy();
      expect(getByText('Save changes')).toBeTruthy();
      expect(getByText('Delete')).toBeTruthy();
    });
  });

  it('should create a movie successfully', async () => {
    const createMovieSpy = jest
      .spyOn(CreateMovieUseCase.prototype, 'execute')
      .mockResolvedValue(MOVIE);
    const { navigation, findByTestId, getByTestId } = renderWithNavigation(
      MovieDetailScreen as any,
      { ...ROUTE_PROPS, routeParams: undefined },
    );

    const newMovie = (({ id, genre_id, created_at, ...rest }) => ({...rest, genre_id: 3}))(MOVIES[1]);
    const button = await findByTestId('save_button');
    
    expect(button.props.accessibilityState.disabled).toBe(true);
    
    fireEvent.changeText(getByTestId('title_input'), newMovie.title);
    fireEvent.changeText(getByTestId('rewatch_count_input'), newMovie.rewatch_count);
    fireEvent.changeText(getByTestId('comment_input'), newMovie.comment);
    fireEvent.press(getByTestId('dropdown_input'));
    fireEvent.press(getByTestId(`dropdown_input_item_${newMovie.genre_id}`));

    expect(button.props.accessibilityState.disabled).toBe(false);

    fireEvent.press(getByTestId(`rating_input_item_${newMovie.rating}`));

    fireEvent(button, 'press');

    await waitFor(() => {
      expect(createMovieSpy).toHaveBeenCalledTimes(1);
      expect(createMovieSpy).toHaveBeenCalledWith({data: newMovie});
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: 'Movie_Watchlist' }],
      });
    });
  });

  it('should update the movie successfully', async () => {
    const updateMovieSpy = jest
      .spyOn(UpdateMovieUseCase.prototype, 'execute')
      .mockResolvedValue();
    const { navigation, findByText, findByTestId } = renderWithNavigation(
      MovieDetailScreen as any,
      ROUTE_PROPS,
    );

    const titleInput = await findByTestId('title_input');
    const button = await findByText('Save changes');

    const title = 'Test title';
    fireEvent.changeText(titleInput, title);
    fireEvent(button, 'press');

    await waitFor(() => {
      expect(updateMovieSpy).toHaveBeenCalledTimes(1);
      expect(updateMovieSpy).toHaveBeenCalledWith({
        id: MOVIE.id,
        data: { ...MOVIE, title },
      });
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: 'Movie_Watchlist' }],
      });
    });
  });

  it('should delete the movie successfully', async () => {
    const deleteMovieSpy = jest
      .spyOn(DeleteMovieUseCase.prototype, 'execute')
      .mockResolvedValue();
    const { navigation, findByText } = renderWithNavigation(
      MovieDetailScreen as any,
      ROUTE_PROPS,
    );

    const button = await findByText('Delete');

    fireEvent(button, 'press');

    await waitFor(() => {
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: 'Movie_Watchlist' }],
      });
      expect(deleteMovieSpy).toHaveBeenCalledTimes(1);
      expect(deleteMovieSpy).toHaveBeenCalledWith(MOVIE.id);
    });
  });
});
