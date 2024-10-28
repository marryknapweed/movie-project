// import {CardMovie} from '../components/cardMovie';
// import {Layout} from '../components/ layout';

// export const MovieList = () => {
//   return (
//     <div className="movie-list d-grid ">
//       <CardMovie />
//       <CardMovie />
//       {/* <CardMovie /> */}
//     </div>
//   );
// };

import { CardMovie } from "../components/cardMovie";
import { Layout } from "../components/layout";

export const MovieList = () => {
  return (
    <div className="row">
      <div className="col-3">
        <CardMovie />
      </div>
      <div className="col-3">
        <CardMovie />
      </div>
      <div className="col-3">
        <CardMovie />
      </div>
      <div className="col-3">
        <CardMovie />
      </div>
      <div className="col-3">
        <CardMovie />
      </div>
      {/* Добавьте больше карточек, если нужно */}
    </div>
  );
};
