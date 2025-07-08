import { Box, SafeAreaBox, Text, TouchableOpacity } from '@components/index';
import type { ScreenProps } from '@core/infrastructure/navigation/navigation.types';
import { MoviesCollage } from 'assets/images';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GlobalRoutesEnum } from 'src/shared/enums/routes';
import { useWelcomePresenter } from './welcome.presenter';

export const WelcomeScreen: React.FC<
  ScreenProps<GlobalRoutesEnum.WELCOME>
> = props => {
  const { handleButtonPress } = useWelcomePresenter(props);

  return (
    <ImageBackground source={MoviesCollage} style={{ flex: 1 }}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.9)']}
        style={{ flex: 1 }}
      >
        <SafeAreaBox
          flex={1}
          alignItems="center"
          justifyContent="flex-end"
          padding="4xl"
          marginBottom="xl"
        >
          <Text
            variant="logo"
            fontSize={36}
            textAlign="center"
            marginBottom="6xl"
          >
            Welcome{'\n'}to RewatchList
          </Text>
          <Text variant="h2" textAlign="center" marginBottom="md-plus">
            Track your movie journey
          </Text>
          <Text variant="caption" textAlign="center" marginBottom="2xl">
            Save your opinions and watch count{'\n'}for every movie you've seen.
          </Text>

          <Box
            width={'100%'}
            backgroundColor="primary"
            borderRadius={20}
            paddingVertical="md"
          >
            <TouchableOpacity onPress={handleButtonPress}>
              <Text variant="button" textAlign="center">
                Get started
              </Text>
            </TouchableOpacity>
          </Box>
        </SafeAreaBox>
      </LinearGradient>
    </ImageBackground>
  );
};
