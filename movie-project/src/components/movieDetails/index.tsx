import testImage from "../../image/testPhoto.jpg";
import "./index.scss";

export const MovieDetails = () => {
  return (
    <div className="movie-details">
      <div className="movie-details__left">
        <div className="movie-details__image">
          <img src={testImage} alt="Films" />
        </div>

        <div className="movie-details__action">
          <button className="favorites">Favorites</button>
          <button className="share">Share</button>
        </div>
      </div>

      <div className="movie-details__right">
        <p className="movie-details__genres">Adventure • Action • Fantasy</p>
        <h2 className="movie-details__title">Wonder Woman: 1984</h2>

        <div className="movie-details__ratings">
          <span className="rating">7.6</span>
          <span className="imdb-rating">IMDb 7.6</span>
          <span className="duration">130 min</span>
        </div>

        <div className="movie-details__description">
          <p>
            In 1984, after saving the world in Wonder Woman (2017), the immortal
            Amazon warrior, Princess Diana of Themyscira, finds herself trying
            to stay under the radar, working as an archaeologist at the
            Smithsonian Museum. With the memory of the brave U.S. pilot, Captain
            Steve Trevor, etched on her mind, Diana Prince becomes embroiled in
            a sinister conspiracy of global proportions when a transparent,
            golden-yellow citrine gemstone catches the eye of the power-hungry
            entrepreneur, Maxwell Lord.{" "}
          </p>
        </div>

        <ul className="movie-details__info">
          <li>
            <span className="label">Year</span>
            <span className="value">2011</span>
          </li>
          <li>
            <span className="label">Released</span>
            <span className="value">15 Jul 2011</span>
          </li>
          <li>
            <span className="label">BoxOffice</span>
            <span className="value">$381,409,310</span>
          </li>
          <li>
            <span className="label">Country</span>
            <span className="value">United Kingdom, United States</span>
          </li>
          <li>
            <span className="label">Production</span>
            <span className="value">
              Heyday Films, Moving Picture Company, Warner Bros.
            </span>
          </li>
          <li>
            <span className="label">Actors</span>
            <span className="value">
              Daniel Radcliffe, Emma Watson, Rupert Grint
            </span>
          </li>
          <li>
            <span className="label">Director</span>
            <span className="value">David Yates</span>
          </li>
          <li>
            <span className="label">Writers</span>
            <span className="value">J.K. Rowling, Steve Kloves</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
