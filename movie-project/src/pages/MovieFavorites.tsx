import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {CardMovie} from '../components/cardMovie';

export const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  if (favorites.length === 0) {
    return <div>No favorites found.</div>;
  }

  return (
    <div className="favorites-page row">
      {favorites.map(movie => (
        <div className="col-2" style={{flex: '0 0 20%', maxWidth: '20%'}} key={movie.kinopoiskId}>
          <CardMovie key={movie.kinopoiskId} movie={movie} />
        </div>
      ))}
    </div>
  );
};
