import React from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

import {CardMovie} from '../cardMovie';
import './index.scss';

interface Movie {
  kinopoiskId: number;
  posterUrl?: string;
  nameRu?: string;
  nameOriginal?: string;
  genres: {genre: string}[]; // Изменено для совпадения с API
  ratingKinopoisk?: number;
  ratingImdb?: number;
}

export const Recommendations = ({
  currentMovieGenres,
  movieId,
}: {
  currentMovieGenres: string[];
  movieId: number;
}) => {
  const {movies}: {movies: Movie[]} = useSelector((state: RootState) => state.movies);

  // Фильтруем фильмы по жанрам, исключая текущий фильм
  const recommendedMovies = movies.filter(
    (movie: Movie) =>
      movie.genres.some(genre => currentMovieGenres.includes(genre.genre)) &&
      movie.kinopoiskId !== movieId
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
          <CardMovie key={movie.kinopoiskId} movie={movie} />
        ))}
      </div>
    </div>
  );
};
