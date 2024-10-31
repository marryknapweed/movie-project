import './index.scss';
import filter from '../../image/Filter.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="filter">
          <img src={filter} alt="Filter" />
        </div>
      </div>

      <div className="actions">
        <div className="profile">
          <div className="profile-initial">AL</div>
        </div>
      </div>
    </header>
  );
};
