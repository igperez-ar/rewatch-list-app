import { act, renderWithNavigation, waitFor } from '@testing/test-utils';
import { GlobalRoutesEnum, MovieRoutesEnum } from 'src/shared/enums/routes';
import { SplashScreen } from './splash.screen';

describe('SplashScreen', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should renders successfully', () => {
    const { getByText } = renderWithNavigation(SplashScreen, {
      routeName: GlobalRoutesEnum.SPLASH,
    });

    expect(getByText('RewatchList')).toBeTruthy();
    expect(getByText('Version')).toBeTruthy();
  });

  it('should navigate to "Welcome" if it\'s user first time', async () => {
    const { navigation, store } = renderWithNavigation(SplashScreen, {
      routeName: GlobalRoutesEnum.SPLASH,
    });

    expect(store.getState().config.flags.hasLaunched).toBeFalsy();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: GlobalRoutesEnum.WELCOME }],
      });
    });
  });

  it('should navigate to "Watchlist" if isn\'t user fist time', async () => {
    const { navigation, store } = renderWithNavigation(SplashScreen, {
      routeName: GlobalRoutesEnum.SPLASH,
      preloadedState: {
        config: {
          flags: {
            hasLaunched: true,
          },
        },
      },
    });

    expect(store.getState().config.flags.hasLaunched).toBeTruthy();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: MovieRoutesEnum.STACK }],
      });
    });
  });
});
