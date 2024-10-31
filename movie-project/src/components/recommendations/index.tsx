import React from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

import {CardMovie} from '../cardMovie';
import './index.scss';

interface Movie {
  id: number;
  poster?: {url: string; previewUrl?: string};
  name?: string;
  alternativeName?: string;
  rating: {imdb?: number};
  genres: {name: string}[];
}

export const Recommendations = ({
  currentMovieGenres,
  movieId,
}: {
  currentMovieGenres: string[];
  movieId: number;
}) => {
  const {movies} = useSelector((state: RootState) => state.movies);
  const recommendedMovies = movies.filter(
    movie =>
      movie.genres.some(genre => currentMovieGenres.includes(genre.name)) && movie.id !== movieId // исключаем текущий фильм
  );

  return (
    <div className="recommendations">
      <div className="recommendations__header">
        <h3 className="recommendations__title">Recommendations</h3>
        <div className="recommendations__arrow">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      <div className="recommendations__list">
        {recommendedMovies.map(movie => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
