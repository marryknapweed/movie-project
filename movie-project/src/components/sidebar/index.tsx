import {FaHome, FaFire, FaBookmark} from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5';
import {NavLink} from 'react-router-dom';
import logo from '../../image/logo.png';

import './index.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <nav>
        <ul>
          <li className="nav-item">
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/trends">
              <FaFire />
              Trends
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/favorites">
              <FaBookmark /> Favorites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings">
              <IoSettingsSharp /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
