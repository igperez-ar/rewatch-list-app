import {
  ThemeProvider as ThemeProviderRS,
  useTheme as useThemeRS,
} from '@shopify/restyle';
import { type AppTheme, theme } from 'src/app/theme/app.theme';

type ThemeProviderProps = {
  children?: React.ReactNode | undefined;
};

export const useTheme: () => AppTheme = useThemeRS;

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProviderRS theme={theme}>{children}</ThemeProviderRS>
);
