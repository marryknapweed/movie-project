import {Link} from 'react-router-dom';
// import testPhoto from '../../image/testPhoto.jpg';
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

export const CardMovie = ({movie}: {movie: Movie}) => {
  // const imgUrl = movie.posterUrl || testPhoto;

  return (
    <Link to={`/items/${movie.kinopoiskId}`}>
      <div className="card-movie">
        <div className="card-movie__image">
          <img src={movie.posterUrl} alt={movie.nameRu || movie.nameOriginal || 'Movie'} />
          <span className="rating">{movie.ratingKinopoisk || movie.ratingImdb || 'N/A'}</span>
        </div>
        <div className="card-movie__details">
          <h3 className="card-movie__title">{movie.nameRu || movie.nameOriginal || 'Movie'}</h3>
          <p className="card-movie__genre">{movie.genres.map(genre => genre.genre).join(' • ')}</p>
        </div>
      </div>
    </Link>
  );
};
