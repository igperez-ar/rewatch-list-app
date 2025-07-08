import {
  color,
  type ColorProps,
  createRestyleComponent,
  spacing,
  type SpacingProps,
  typography,
  type TypographyProps,
} from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native';
import { AppTheme } from 'src/app/theme/app.theme';

export type TextInputProps = SpacingProps<AppTheme> &
  ColorProps<AppTheme> &
  TypographyProps<AppTheme> &
  RNTextInputProps;

export const TextInput = createRestyleComponent<TextInputProps, AppTheme>(
  [spacing, typography, color],
  RNTextInput,
);
