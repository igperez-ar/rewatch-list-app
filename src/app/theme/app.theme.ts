import { createTheme } from '@shopify/restyle';
import { TextStyle } from 'react-native';
import { IOS } from 'src/shared/constants';
import { scale } from 'src/shared/utils/sizes';

export const colors = {
  primary: '#496D9C',
  primaryDark: '#2D3C67',
  secondary: '#FFFFFF',
  background: '#0F0F0F',
  surface: '#1A1A1A',
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textDisabled: '#666666',
  shadow: '#000',
  error: '#FF5252',
  success: '#4CAF50',
  divider: '#404040',
  overlay: 'rgba(0, 0, 0, 0.8)',
};

export const fonts = {
  bukhariScript: 'Bukhari-Script',

  cascadiaMonoRegular: IOS ? 'Cascadia Mono Regular' : 'Cascadia-Mono-Regular',
  cascadiaMonoMedium: IOS ? 'Cascadia Mono Medium' : 'Cascadia-Mono-Medium',
  cascadiaMonoBold: IOS ? 'Cascadia Mono Bold' : 'Cascadia-Mono-Bold',

  nunitoRegular: 'Nunito-Regular',
  nunitoMedium: 'Nunito-Medium',
  nunitoBold: 'Nunito-Bold',
};

export const shadows = {
  sm: {
    shadowColor: 'shadow',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: 'shadow',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  lg: {
    shadowColor: 'shadow',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
};

export const spacing = {
  'none': 0,
  'xs': scale(2),
  'sm': scale(4),
  'md': scale(8),
  'md-plus': scale(12),
  'lg': scale(16),
  'lg-plus': scale(20),
  'xl': scale(24),
  '2xl': scale(32),
  '3xl': scale(40),
  '4xl': scale(48),
  '5xl': scale(56),
  '6xl': scale(64),
  '7xl': scale(72),
  '8xl': scale(80),
};

export const typography: Record<string, TextStyle> = {
  defaults: {
    color: 'textSecondary',
    fontFamily: fonts.nunitoRegular,
    fontSize: scale(14),
    lineHeight: scale(20),
  },
  logo: {
    color: 'textPrimary',
    fontFamily: fonts.bukhariScript,
    fontSize: scale(28),
    lineHeight: scale(40),
  },
  h1: {
    color: 'textPrimary',
    fontFamily: fonts.nunitoBold,
    fontSize: scale(18),
    lineHeight: scale(24),
  },
  h2: {
    color: 'textPrimary',
    fontFamily: fonts.nunitoMedium,
    fontSize: scale(18),
    lineHeight: scale(24),
  },
  label: {
    color: 'textPrimary',
    fontFamily: fonts.nunitoBold,
    fontSize: scale(16),
    lineHeight: scale(22),
  },
  body: {
    color: 'textSecondary',
    fontFamily: fonts.nunitoRegular,
    fontSize: scale(14),
    lineHeight: scale(20),
  },
  button: {
    fontSize: scale(16),
    lineHeight: scale(22),
    textTransform: 'uppercase',
    fontFamily: fonts.nunitoBold,
    color: 'textPrimary',
  },
  caption: {
    color: 'textSecondary',
    fontFamily: fonts.nunitoRegular,
    fontSize: scale(16),
    lineHeight: scale(22),
  },
};

export const theme = createTheme({
  colors,
  shadows,
  spacing,
  textVariants: typography,
});

export type AppTheme = typeof theme;
