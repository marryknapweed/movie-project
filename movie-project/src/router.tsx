import {Layout} from './components/layout';
import {createBrowserRouter} from 'react-router-dom';
import {MovieListPage} from './pages/MovieList';
import {MovieItem} from './pages/MovieItem';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MovieListPage />,
      },
      {
        path: '/',
        element: <h1>Trends</h1>,
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
