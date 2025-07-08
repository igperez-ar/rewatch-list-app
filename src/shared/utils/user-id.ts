import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const USER_ID_KEY = 'user_id';

/**
 * Gets or creates a user ID for the application.
 * 
 * NOTE: This function is currently hardcoded to return a random UUID
 * to demonstrate mock data from the server. In a real implementation,
 * this would retrieve the user ID from AsyncStorage or generate a new one.
 * 
 * @returns Promise<string> - The user ID (currently hardcoded)
 */
export const getOrCreateUserId = async (): Promise<string> => {
  let userId = await AsyncStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = /* uuidv4() */'b0f1a7b4-97fa-4f9e-b00f-28111fd2b1c1';
    await AsyncStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
};