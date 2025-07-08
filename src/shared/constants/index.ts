import { Dimensions, Platform } from 'react-native';

export const IOS = Platform.OS === 'ios';
export const ANDROID = Platform.OS === 'android';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ICON_RATING_MAP = [
  { icon: 'skull', name: 'Dislike' },
  { icon: 'emoticon-neutral', name: 'Meh' },
  { icon: 'thumb-up', name: 'Like' },
  { icon: 'heart', name: 'Love' },
] as const;