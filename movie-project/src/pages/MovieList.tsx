import React, {useEffect} from 'react';
import {CardMovie} from '../components/cardMovie';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchMovies} from '../redux/movie-slice';

export const MovieListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {movies, isLoading, error} = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-2" style={{flex: '0 0 20%', maxWidth: '20%'}} key={index}>
          <CardMovie movie={movie} />
        </div>
      ))}
    </div>
  );
};
