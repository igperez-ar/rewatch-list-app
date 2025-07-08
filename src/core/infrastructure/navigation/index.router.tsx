import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '@screens/index';
import { MovieNavigator } from '@screens/movie/navigation/index.router';
import { WelcomeScreen } from '@screens/welcome/welcome.screen';
import { GlobalRoutesEnum, MovieRoutesEnum } from 'src/shared/enums/routes';
import {
  navigationRef,
  onReadyNavigationContainer,
  onStateChangeNavigationContainer,
  type RootParamList,
} from './root-navigation';

const Stack = createNativeStackNavigator<RootParamList>();

const defaultConfig = {
  headerShown: false,
};
const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const MainNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={defaultTheme}
      onStateChange={onStateChangeNavigationContainer}
      onReady={onReadyNavigationContainer}
    >
      <Stack.Navigator
        screenOptions={defaultConfig}
        initialRouteName={GlobalRoutesEnum.SPLASH}
      >
        <Stack.Screen name={GlobalRoutesEnum.SPLASH} component={SplashScreen} />
        <Stack.Screen
          name={GlobalRoutesEnum.WELCOME}
          component={WelcomeScreen}
        />
        <Stack.Screen name={MovieRoutesEnum.STACK} component={MovieNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
