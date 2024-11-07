import {Movie} from './movie-slice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const movieFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      const isAlreadyFavorite = state.favorites.some(
        favorite => favorite.kinopoiskId === action.payload.kinopoiskId
      );
      if (!isAlreadyFavorite) {
        state.favorites.push(action.payload);
      }
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(favorite => favorite.kinopoiskId !== action.payload);
    },
  },
});

export const {addFavorite, removeFavorite} = movieFavoritesSlice.actions;

export const favoritesReducer = movieFavoritesSlice.reducer;
