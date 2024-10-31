import {client} from '../api/client';
import {movieEndpoint} from '../api/endpoints';

export async function requestMovies() {
  const {data} = await client.get(`${movieEndpoint}`, {params: {}});
  console.log('API Response:', data);
  return data;
}
