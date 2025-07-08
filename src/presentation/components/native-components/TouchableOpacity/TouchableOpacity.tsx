import {
  createRestyleComponent,
  spacing,
  type SpacingProps,
} from '@shopify/restyle';
import {
  TouchableOpacity as RNTouchableOpacity,
  type TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import { AppTheme } from 'src/app/theme/app.theme';

export type TouchableOpacityProps = SpacingProps<AppTheme> &
  RNTouchableOpacityProps;

export const TouchableOpacity = createRestyleComponent<
  TouchableOpacityProps,
  AppTheme
>([spacing], RNTouchableOpacity);
