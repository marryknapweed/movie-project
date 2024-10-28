import { CardMovie } from "./components/cardMovie";
import { Layout } from "./components/layout";
import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./components/movieDetails";
import { MovieItem } from "./pages/MovieItem";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MovieList />,
      },
      {
        path: "/",
        element: <h1>Trends</h1>,
      },
      {
        path: "/items",
        element: <MovieItem />,
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>,
      },
    ],
  },
]);
