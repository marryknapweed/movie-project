import React from 'react';
import {MovieDetails} from '../components/movieDetails';
import {Recommendations} from '../components/recommendations';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export const MovieItem = () => {
  const {id} = useParams<{id: string}>(); // Получаем id из URL
  const movieId = Number(id); // Преобразуем в число

  const movie = useSelector((state: RootState) => state.movieDetails.movie); // Получаем сам фильм

  // Получаем жанры текущего фильма (обновлено под структуру Kinopoisk API)
  const currentMovieGenres = movie?.genres ? movie.genres.map(genre => genre.genre) : [];

  return (
    <div className="movie-item">
      <MovieDetails movieId={movieId} />
      {movie && <Recommendations currentMovieGenres={currentMovieGenres} movieId={movieId} />}
    </div>
  );
};
