import {
  type BoxProps,
  createRestyleComponent,
  layout,
  spacing,
} from '@shopify/restyle';
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { AppTheme } from 'src/app/theme/app.theme';

export const SafeAreaBox = createRestyleComponent<
  BoxProps<AppTheme> &
    SafeAreaViewProps & {
      disabled?: boolean;
    },
  AppTheme
>([layout, spacing], SafeAreaView);
