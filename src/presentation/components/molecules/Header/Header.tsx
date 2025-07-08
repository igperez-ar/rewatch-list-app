import { Box, Icon, Text, TouchableOpacity } from '@components/index';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      backgroundColor="surface"
      height={50}
      alignItems="center"
    >
      <Box width={'100%'} position="absolute">
        <Text variant="h1" textAlign="center">
          {title}
        </Text>
      </Box>
      {navigation.canGoBack() ? (
        <Box m="md-plus">
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon name="arrow-left" size={24} />
          </TouchableOpacity>
        </Box>
      ) : null}
    </Box>
  );
};
