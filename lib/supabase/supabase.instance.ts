import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import Config from 'react-native-config';
import type { Database } from './database.types';

export const supabase = createClient<Database>(Config.SUPABASE_URL, Config.SUPABASE_KEY);
