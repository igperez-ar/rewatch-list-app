import { fireEvent, renderWithNavigation, waitFor } from '@testing/test-utils';
import { WelcomeScreen } from './welcome.screen';
import { GlobalRoutesEnum, MovieRoutesEnum } from 'src/shared/enums/routes';

describe('WelcomeScreen', () => {
  const renderScreen = () =>
    renderWithNavigation(WelcomeScreen, { routeName: GlobalRoutesEnum.WELCOME });

  it('should render successfully', () => {
    const { getByText } = renderScreen();

    expect(getByText('Welcome\nto RewatchList')).toBeTruthy();
    expect(getByText('Track your movie journey')).toBeTruthy();
    expect(getByText('Save your opinions and watch count\nfor every movie you\'ve seen.')).toBeTruthy();
  });

  it('should navigate to "Watchlist" and update flag value on button press', async () => {
    const { store, navigation, getByText } = renderScreen();

    expect(store.getState().config.flags.hasLaunched).toBeFalsy();

    fireEvent.press(getByText('Get started'));

    expect(store.getState().config.flags.hasLaunched).toBeTruthy();

    await waitFor(() => {
      expect(navigation.reset).toHaveBeenCalledTimes(1);
      expect(navigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: MovieRoutesEnum.STACK }],
      });
    });
  });
});
