// src/pages/MovieTrendsPage.tsx
import React, {useEffect} from 'react';
import {CardMovie} from '../components/cardMovie';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchMovies, selectHighRatedMovies} from '../redux/movie-slice';
import '../components/cardMovie/index.scss';

export const MovieTrendsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, error} = useSelector((state: RootState) => state.movies);
  const highRatedMovies = useSelector(selectHighRatedMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (highRatedMovies.length === 0) return <div>No high-rated movies found.</div>;

  return (
    <div className="movie-trends-page row">
      {highRatedMovies.map(movie => (
        <div className="col-2" style={{flex: '0 0 20%', maxWidth: '20%'}} key={movie.kinopoiskId}>
          <CardMovie movie={movie} isTrendsPage={true} />
        </div>
      ))}
    </div>
  );
};
