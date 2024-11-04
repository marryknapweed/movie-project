// movie-slice.ts

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requestMovies} from '../services/movie';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

// Thunk для запроса списка фильмов
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, {rejectWithValue}) => {
  try {
    const data = await requestMovies();
    return data.items || [];
  } catch (error) {
    return rejectWithValue((error as Error).message); // Передаем только сообщение об ошибке
  }
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string; // Ожидаем сообщение ошибки
      });
  },
});

export const movieReducer = movieSlice.reducer;
