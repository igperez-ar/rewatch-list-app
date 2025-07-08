import {
  Box,
  GradientContainer,
  Header,
  Icon,
  MainContainer,
  Text,
  TouchableOpacity,
} from '@components/index';
import { ActivityIndicator, FlatList } from 'react-native';
import { ICON_RATING_MAP } from 'src/shared/constants';
import { useWatchlistPresenter } from './watchlist.presenter';
import { WatchlistScreenProps } from './watchlist.types';

export const WatchlistScreen: React.FC<WatchlistScreenProps> = props => {
  const { movieState, goToEdition, goToCreation } = useWatchlistPresenter(props);

  const renderContent = () => {
    if (movieState.loading) {
      return (
        <Box flex={1} justifyContent="center">
          <ActivityIndicator size={'large'} />
        </Box>
      );
    }

    if (movieState.error) {
      return (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text variant="h1" textAlign="center" width={'80%'}>
            Oops! Something went wrong. Please try again later.
          </Text>
        </Box>
      );
    }

    return (
      <Box backgroundColor="surface" borderRadius={20} p="lg-plus" m="lg-plus">
        <FlatList
          bounces={false}
          data={movieState.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToEdition(item)} testID='movie_list_item'>
              <Box flexDirection="row" alignItems="center">
                <Icon name={ICON_RATING_MAP[item.rating].icon} size={20} />
                <Box justifyContent="center" marginVertical="xs" pl="lg">
                  <Text variant="h2">{item.title}</Text>
                  <Text variant="body">{item.comment}</Text>
                </Box>
              </Box>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <Box height={1} backgroundColor="divider" marginVertical="md" />
          )}
          ListEmptyComponent={() => (
            <Box alignItems="center" p="lg-plus">
              <Icon name="film" size={48} />
              <Text variant="h2" textAlign="center" mt="md" mb="sm">
                No movies yet
              </Text>
              <Text variant="body" textAlign="center" opacity={0.7}>
                Start building your movie collection by adding your first film!
              </Text>
            </Box>
          )}
        />
      </Box>
    );
  };

  return (
    <MainContainer header={<Header title="My movies" />}>
      <Box flex={1}>{renderContent()}</Box>
      <TouchableOpacity onPress={goToCreation} testID="add_movie_btn">
        <Box
          position="absolute"
          overflow="hidden"
          borderRadius={50}
          right={40}
          bottom={30}
        >
          <GradientContainer
            colors={['#e7e2f3', '#a7b2e6', '#688cca', '#496d9c', '#2d3c67']}
          >
            <Box p="md">
              <Icon name="plus" size={28} />
            </Box>
          </GradientContainer>
        </Box>
      </TouchableOpacity>
    </MainContainer>
  );
};
