import { GetAllByUserUseCase } from '@core/capabilities/movies';
import { MOVIES } from '@testing/fixtures/movies';
import {
  act,
  fireEvent,
  renderWithNavigation,
  waitFor,
} from '@testing/test-utils';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import { WatchlistScreen } from './watchlist.screen';

const ROUTE_PROPS = {
  routeName: MovieRoutesEnum.WATCHLIST,
};

describe('WatchlistScreen', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest
      .spyOn(GetAllByUserUseCase.prototype, 'execute')
      .mockResolvedValue(MOVIES);
  });

  it('should render successfully', async () => {
    const { getByText, getByTestId, getAllByTestId } = renderWithNavigation(
      WatchlistScreen as any,
      ROUTE_PROPS,
    );

    await waitFor(() => {
      MOVIES.map(movie => expect(getByText(movie.title)).toBeTruthy());
      expect(getByTestId('add_movie_btn')).toBeTruthy();
      expect(getByText('My movies')).toBeTruthy();
    });
  });

  it('should navigate to "MovieDetail" for update on press item', async () => {
    const { findAllByTestId, navigation } = renderWithNavigation(
      WatchlistScreen as any,
      ROUTE_PROPS,
    );

    const movieItems = await findAllByTestId('movie_list_item');

    fireEvent(movieItems[0], 'press');

    expect(navigation.navigate).toHaveBeenCalledWith(MovieRoutesEnum.STACK, {
      screen: MovieRoutesEnum.DETAIL,
      params: { movie: MOVIES[0] },
    });
  });

  it('should navigate to "MovieDetail" for create on press item', async () => {
    const { findByTestId, navigation } = renderWithNavigation(
      WatchlistScreen as any,
      ROUTE_PROPS,
    );

    const button = await findByTestId('add_movie_btn');

    fireEvent(button, 'press');

    expect(navigation.navigate).toHaveBeenCalledWith(MovieRoutesEnum.STACK, {
      screen: MovieRoutesEnum.DETAIL,
      params: undefined,
    });
  });

  it('should handle fetching errors successfully', async () => {
    jest
      .spyOn(GetAllByUserUseCase.prototype, 'execute')
      .mockRejectedValue(new Error('Error retrieving movies'));
    const { queryByText, queryAllByTestId } = renderWithNavigation(
      WatchlistScreen as any,
      ROUTE_PROPS,
    );

    await waitFor(() => {
      MOVIES.map(movie => expect(queryByText(movie.title)).toBeFalsy());
      expect(queryAllByTestId('movie_list_item')).toHaveLength(0);
    });
  });
});
