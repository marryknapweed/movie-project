import { FaHome, FaFire, FaBookmark } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

import "./index.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./logo.png" alt="Logo" />
      </div>

      <nav>
        <ul>
          <li className="nav-item">
            <a href="#home">
              <FaHome /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#trends">
              <FaFire />
              Trends
            </a>
          </li>
          <li className="nav-item">
            <a href="#favorites">
              <FaBookmark /> Favorites
            </a>
          </li>
          <li className="nav-item">
            <a href="#settings">
              <IoSettingsSharp /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
