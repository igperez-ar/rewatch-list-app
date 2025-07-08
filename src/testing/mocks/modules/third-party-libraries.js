jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('@react-native-vector-icons/material-design-icons', () => 'MaterialIcon');
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: {
      signIn: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      onAuthStateChange: jest.fn(),
      user: jest.fn(),
    },
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockReturnThis(),
      maybeSingle: jest.fn().mockReturnThis(),
    })),
  })),
}));
jest.mock('react-native-config', () => ({}));
jest.mock('react-native-linear-gradient', () => ({ children }) => children);
jest.mock('react-native-url-polyfill/auto', () => ({}));
jest.mock('redux-persist', () => {
  const actualReduxPersist = jest.requireActual('redux-persist');
  return {
    ...actualReduxPersist,
    persistReducer: (config, reducer) => reducer,
    persistStore: () => ({ purge: jest.fn() }),
  };
});
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }) => children,
}));
jest.mock('src/shared/utils/user-id.ts', () => ({
  getOrCreateUserId: () => 'b0f1a7b4-97fa-4f9e-b00f-28111fd2b1c1',
}));
