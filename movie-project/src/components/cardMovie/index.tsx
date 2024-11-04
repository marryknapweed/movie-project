import {Link} from 'react-router-dom';
// import testPhoto from '../../image/testPhoto.jpg';
import {FaFire} from 'react-icons/fa';
import './index.scss';

interface Movie {
  kinopoiskId: number;
  posterUrl?: string;
  nameRu?: string;
  nameOriginal?: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  genres: {genre: string}[];
}

export const CardMovie = ({movie, isTrendsPage}: {movie: Movie; isTrendsPage?: boolean}) => {
  // const imgUrl = movie.posterUrl || testPhoto;

  return (
    <Link to={`/items/${movie.kinopoiskId}`}>
      <div className="card-movie">
        <div className="card-movie__image">
          <img src={movie.posterUrl} alt={movie.nameRu || movie.nameOriginal || 'Movie'} />
          <span className="rating">
            {isTrendsPage && <FaFire className="rating-icon" />}
            {movie.ratingKinopoisk || movie.ratingImdb || 'N/A'}
          </span>
        </div>
        <div className="card-movie__details">
          <h3 className="card-movie__title">{movie.nameRu || movie.nameOriginal || 'Movie'}</h3>
          <p className="card-movie__genre">{movie.genres.map(genre => genre.genre).join(' • ')}</p>
        </div>
      </div>
    </Link>
  );
};
