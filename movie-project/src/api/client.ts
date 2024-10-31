import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  headers: {
    'X-API-KEY': '59V1FVT-JDS4K65-PBWHK5J-GG9X8XK',
  },
});
