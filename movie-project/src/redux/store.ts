import {configureStore} from '@reduxjs/toolkit';
import {movieReducer} from './movie-slice';
import {movieDetailsReducer} from './movieDetails-slice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
