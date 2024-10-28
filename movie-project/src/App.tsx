import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // Импортируем роутер, который был создан ранее

export const App = () => {
  return <RouterProvider router={router} />;
};
