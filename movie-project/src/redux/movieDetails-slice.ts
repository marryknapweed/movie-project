import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requestMoviesItem} from '../services/movie';

const initialState = {
  movie: null,
  isLoading: false,
  error: null,
};

export const fetchMovieById = createAsyncThunk(
  'movieDetails/fetchMovieById',
  async (movieId: number, {rejectWithValue}) => {
    try {
      const data = await requestMoviesItem(movieId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovieById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, state => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const movieDetailsReducer = movieDetailsSlice.reducer;
