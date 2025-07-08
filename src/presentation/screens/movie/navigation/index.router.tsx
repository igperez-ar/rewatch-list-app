import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetailScreen } from 'src/presentation/screens';
import { MovieRoutesEnum } from 'src/shared/enums/routes';
import { WatchlistScreen } from '../watchlist/watchlist.screen';
import type { MovieNavigatorParams } from './movie-navigator.types';

const Stack = createNativeStackNavigator<MovieNavigatorParams>();

const defaultConfig = {
  headerShown: false,
};

export const MovieNavigator = () => (
  <Stack.Navigator
    screenOptions={defaultConfig}
    initialRouteName={MovieRoutesEnum.WATCHLIST}
  >
    <Stack.Screen
      name={MovieRoutesEnum.WATCHLIST}
      component={WatchlistScreen}
    />
    <Stack.Screen name={MovieRoutesEnum.DETAIL} component={MovieDetailScreen} />
  </Stack.Navigator>
);
