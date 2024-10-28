import React from "react";
import { MovieDetails } from "../components/movieDetails";
import { Recommendations } from "../components/recommendations";

export const MovieItem = () => {
  return (
    <div className="movie-item">
      <MovieDetails />
      <Recommendations />
    </div>
  );
};
