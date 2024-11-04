export type Movie = {
  kinopoiskId: number;
  posterUrl?: string;
  nameRu?: string;
  nameOriginal?: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  genres: {genre: string}[];
};
