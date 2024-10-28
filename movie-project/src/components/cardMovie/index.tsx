import testPhoto from "../../image/testPhoto.jpg";
import "./index.scss";

export const CardMovie = () => {
  return (
    <div className="card-movie">
      <div className="card-movie__image">
        <img src={testPhoto} alt="Movie" />
        <span className="rating">5.0</span>
      </div>
      <div className="card-movie__details">
        <h3 className="card-movie__title">Movie Title</h3>
        <p className="card-movie__genre">Movie genre</p>
      </div>
    </div>
  );
};
