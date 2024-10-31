import {RouterProvider} from 'react-router-dom';
import {router} from './router'; // Импортируем роутер, который был создан ранее
import {Provider} from 'react-redux';
import {store} from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};
