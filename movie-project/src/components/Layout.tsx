import {Sidebar} from './sidebar';
import {Header} from './header';

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
      </div>
    </div>
  );
};
