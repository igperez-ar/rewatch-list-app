import { Box, Text, TextInput } from '@components/index';
import { TextInputProps as RNInputProps } from 'react-native';
import { useTheme } from 'src/presentation/providers';

type TextInputProps = {
  label?: string;
} & RNInputProps;

export const Input: React.FC<TextInputProps> = ({ label, ...props }) => {
  const theme = useTheme();

  return (
    <>
      {label ? (
        <Text variant="label" mb="sm">
          {label}
        </Text>
      ) : null}
      <Box
        borderWidth={1}
        backgroundColor="surface"
        borderColor="divider"
        paddingHorizontal="lg"
        paddingVertical="md-plus"
        borderRadius={12}
      >
        <TextInput color="textPrimary" placeholderTextColor={theme.colors.textDisabled} {...props} />
      </Box>
    </>
  );
};
