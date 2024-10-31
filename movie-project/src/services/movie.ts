import {client} from '../api/client';
import {movieEndpoint} from '../api/endpoints';

export async function requestMovies() {
  const {data} = await client.get(`${movieEndpoint}`, {params: {}});
  return data;
}

export async function requestMoviesItem(movieId: number) {
  const {data} = await client.get(`/movie/${movieId}`);
  return data;
}
