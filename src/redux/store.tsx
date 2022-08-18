import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import deckSlice from './slice';

export const rootReducer = combineReducers({
  deck: deckSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export default store;
