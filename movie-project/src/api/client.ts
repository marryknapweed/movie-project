import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',

  headers: {
    'X-API-KEY': '15c71d04-5231-4ee5-8259-eab304de20f4',
    'Content-Type': 'application/json',
  },
});
