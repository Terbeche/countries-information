import '../../css/Navigation.css';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav className="nav">
      <div className="logo Flex-1">
        <Link to="/">
          <h2>Countries Hub</h2>
        </Link>
      </div>
      <ul className="navLinks Flex-1">
        <li className="linkItems">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeClassName' : '')}
            to="countries"
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
