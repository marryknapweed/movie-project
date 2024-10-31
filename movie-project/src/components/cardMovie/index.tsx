import {Link} from 'react-router-dom';
import testPhoto from '../../image/testPhoto.jpg';
import './index.scss';

interface Movie {
  id: number;
  poster?: {url: string; previewUrl?: string};
  name?: string;
  alternativeName?: string;
  rating: {imdb?: number};
  genres: {name: string}[];
}

export const CardMovie = ({movie}: {movie: Movie}) => {
  const imgUrl = movie.poster?.url || testPhoto;

  return (
    <Link to={`/items/${movie.id}`}>
      <div className="card-movie">
        <div className="card-movie__image">
          <img src={imgUrl} alt={movie.name || movie.alternativeName || 'Movie'} />
          <span className="rating">{movie.rating.imdb || 'N/A'}</span>
        </div>
        <div className="card-movie__details">
          <h3 className="card-movie__title">{movie.name || movie.alternativeName || 'Movie'}</h3>
          <p className="card-movie__genre">{movie.genres.map(genre => genre.name).join(' • ')}</p>
        </div>
      </div>
    </Link>
  );
};
