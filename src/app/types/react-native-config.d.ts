/**
 * @see https://github.com/lugg/react-native-config
 */
declare module 'react-native-config' {
  export interface NativeConfig {
    APP_NAME: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
