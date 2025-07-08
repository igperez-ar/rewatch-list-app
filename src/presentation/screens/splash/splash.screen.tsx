import { Box, SafeAreaBox, Text } from '@components/index';
import type { ScreenProps } from '@core/infrastructure/navigation/navigation.types';
import { Animated } from 'react-native';
import { GlobalRoutesEnum } from 'src/shared/enums/routes';
import { useSplashPresenter } from './splash.presenter';

export const SplashScreen: React.FC<
  ScreenProps<GlobalRoutesEnum.SPLASH>
> = props => {
  const { opacity } = useSplashPresenter(props);

  return (
    <Box flex={1} backgroundColor="background">
      <SafeAreaBox flex={1}>
        <Animated.View style={{ flex: 1, opacity }}>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Text variant="logo" textAlign="center">
              RewatchList
            </Text>
            <Box position="absolute" mb="md" bottom={0} alignItems="center">
              <Text variant="body" marginBottom="sm" textAlign="center">
                Version
              </Text>
              <Text variant="body" textAlign="center">
                1.0.0
              </Text>
            </Box>
          </Box>
        </Animated.View>
      </SafeAreaBox>
    </Box>
  );
};
