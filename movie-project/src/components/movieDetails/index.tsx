import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchMovieById} from '../../redux/movieDetails-slice';
import testImage from '../../image/testPhoto.jpg';
import './index.scss';

export const MovieDetails = ({movieId}: {movieId: number}) => {
  const dispatch = useDispatch<AppDispatch>();

  const {movie, isLoading, error} = useSelector((state: RootState) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [dispatch, movieId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="movie-details">
      <div className="movie-details__left">
        <div className="movie-details__image">
          <img src={movie?.posterUrl || testImage} alt="Movie Poster" />
        </div>

        <div className="movie-details__action">
          <button className="favorites">Favorites</button>
          <button className="share">Share</button>
        </div>
      </div>

      <div className="movie-details__right">
        <p className="movie-details__genres">
          {movie?.genres?.map(genre => genre.genre).join(' • ') || 'No genre info'}
        </p>
        <h2 className="movie-details__title">
          {movie?.nameRu || movie?.nameOriginal || 'Movie Title'}
        </h2>

        <div className="movie-details__ratings">
          <span className="rating">{movie?.ratingKinopoisk || movie?.ratingImdb || 'N/A'}</span>
          <span className="imdb-rating">IMDb {movie?.ratingImdb || 'N/A'}</span>
          <span className="duration">{movie?.filmLength || 'N/A'} min</span>
        </div>

        <div className="movie-details__description">
          <p>{movie?.description || 'No description available'}</p>
        </div>

        <ul className="movie-details__info">
          <li>
            <span className="label">Year</span>
            <span className="value">{movie?.year || 'N/A'}</span>
          </li>
          <li>
            <span className="label">Released</span>
            <span className="value">{movie?.premiere?.world || 'N/A'}</span>
          </li>
          <li>
            <span className="label">BoxOffice</span>
            <span className="value">${movie?.fees?.world?.value || 'N/A'}</span>
          </li>
          <li>
            <span className="label">Country</span>
            <span className="value">
              {movie?.countries?.map(country => country.country).join(', ') || 'N/A'}
            </span>
          </li>
          <li>
            <span className="label">Actors</span>
            <span className="value">
              {movie?.persons
                ?.filter(person => person.enProfession === 'actor')
                .map(person => person.name)
                .join(', ') || 'N/A'}
            </span>
          </li>
          <li>
            <span className="label">Director</span>
            <span className="value">
              {movie?.persons?.find(person => person.enProfession === 'director')?.name || 'N/A'}
            </span>
          </li>
          <li>
            <span className="label">Writers</span>
            <span className="value">
              {movie?.persons
                ?.filter(person => person.enProfession === 'writer')
                .map(person => person.name)
                .join(', ') || 'N/A'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
