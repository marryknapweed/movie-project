// import {RouterProvider} from 'react-router-dom';
// // import {router} from './router';
// import {Provider} from 'react-redux';
// // import {store} from './redux/store';
// import './index.scss';

import {Layout} from './components/Layout';

// export const App = () => {
//   return (
//     <Provider store={store}>{/* <RouterProvider router={router}></RouterProvider> */}</Provider>
//   );
// };

export const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};
