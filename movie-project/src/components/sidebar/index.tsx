import {FaHome, FaFire, FaBookmark} from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./logo.png" alt="Logo" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#trends">
              <FaFire />
              Trends
            </a>
          </li>
          <li>
            <a href="#favorites">
              <FaBookmark /> Favorites
            </a>
          </li>
          <li>
            <a href="#settings">
              <IoSettingsSharp /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
