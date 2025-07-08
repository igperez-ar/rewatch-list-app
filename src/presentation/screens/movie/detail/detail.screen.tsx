import {
  Box,
  Dropdown,
  Header,
  Input,
  MainContainer,
  Text,
  TouchableOpacity,
} from '@components/index';
import { RatingInput } from './components';
import { hasId, useMovieDetailPresenter } from './detail.presenter';
import type { MovieDetailScreenProps } from './detail.types';

export const MovieDetailScreen: React.FC<MovieDetailScreenProps> = props => {
  const {
    genres,
    selectedGenre,
    movieState,
    setMovieState,
    deleteMovie,
    saveMovie,
    isValid,
  } = useMovieDetailPresenter(props);

  return (
    <MainContainer header={<Header title="Movie details" />}>
      <Box p="lg-plus">
        <Box flexDirection="row" mb="lg-plus">
          <Box flex={1} mr="lg-plus">
            <Input
              label="Title"
              placeholder="Title"
              value={movieState.title}
              onChangeText={text =>
                setMovieState(prev => ({ ...prev, title: text }))
              }
            />
          </Box>
          <Box flex={1}>
            <Input
              label="Rewatch count"
              placeholder="Rewatch count"
              keyboardType="numeric"
              value={movieState.rewatch_count.toString() ?? ''}
              onChangeText={text => {
                setMovieState(prev => ({
                  ...prev,
                  rewatch_count: text ? parseInt(text) : 0,
                }));
              }}
            />
          </Box>
        </Box>
        <Box mb="lg-plus">
          <Input
            label="Comment"
            placeholder="Comment"
            value={movieState.comment ?? ''}
            onChangeText={text =>
              setMovieState(prev => ({ ...prev, comment: text }))
            }
          />
        </Box>
        <Box mb="lg-plus">
          <Dropdown
            label="Genre"
            value={selectedGenre}
            keyExtractor={item => item.id.toString()}
            labelExtractor={item => item.name}
            onPress={item =>
              setMovieState(prev => ({ ...prev, genre_id: item.id }))
            }
            data={genres}
          />
        </Box>
        <Box mb="lg-plus">
          <RatingInput
            value={movieState.rating}
            onPress={value =>
              setMovieState(prev => ({ ...prev, rating: value }))
            }
          />
        </Box>
        <TouchableOpacity
          onPress={saveMovie}
          disabled={!isValid}
          style={{ opacity: isValid ? 1 : 0.5 }}
        >
          <Box
            backgroundColor="secondary"
            borderRadius={8}
            p="md-plus"
            alignItems="center"
            mb="md"
          >
            <Text color="surface" fontWeight="bold" fontSize={16}>
              Save changes
            </Text>
          </Box>
        </TouchableOpacity>
        {hasId(movieState) ? (
          <TouchableOpacity onPress={deleteMovie}>
            <Box
              backgroundColor="error"
              borderRadius={8}
              p="md-plus"
              alignItems="center"
            >
              <Text color="textPrimary" fontWeight="bold" fontSize={16}>
                Delete
              </Text>
            </Box>
          </TouchableOpacity>
        ) : null}
      </Box>
    </MainContainer>
  );
};
