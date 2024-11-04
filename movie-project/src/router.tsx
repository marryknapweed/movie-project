import {Layout} from './components/layout';
import {createBrowserRouter} from 'react-router-dom';
import {MovieListPage} from './pages/MovieList';
import {MovieItem} from './pages/MovieItem';
import {MovieTrendsPage} from './pages/MovieTrends';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MovieListPage />,
      },
      {
        path: '/trends',
        element: <MovieTrendsPage />,
      },
      {
        path: '/items/:id',
        element: <MovieItem />,
      },
      {
        path: '/settings',
        element: <h1>Settings</h1>,
      },
    ],
  },
]);
