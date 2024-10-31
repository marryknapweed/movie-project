import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requestMovies} from '../services/movie';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

//Thunks
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (_, {rejectWithValue}) => {
  try {
    const data = await requestMovies();
    return data.docs || []; // Возвращаем пустой массив, если docs не существует
  } catch (error) {
    return rejectWithValue(error);
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
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const movieReducer = movieSlice.reducer;
