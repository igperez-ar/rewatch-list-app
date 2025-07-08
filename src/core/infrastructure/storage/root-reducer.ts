import { combineReducers } from '@reduxjs/toolkit';
import { ConfigReducer } from './modules/config';

export const rootReducer = combineReducers({
  config: ConfigReducer,
});
