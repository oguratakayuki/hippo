import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice, CounterState } from './modules/counter';
import { logSlice, LogState } from './modules/log';
import { hippoSlice, hippoState } from './modules/HippoState';

export type AppState = {
  counter: CounterState;
  log: LogState;
  hippo: hippoState;
};

const rootReducer = combineReducers<AppState>({
  counter: counterSlice.reducer,
  log: logSlice.reducer,
  hippo: hippoSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
