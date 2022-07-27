import '../../css/Navigation.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { GrMicrophone } from 'react-icons/gr';
import { filterCountries, fetchCountries } from '../../redux/countries/countries';

const Navigation = () => {
  const dispatch = useDispatch();
  const { Countries } = useSelector((state) => state.countries);

  const handleContinentChoice = () => {
    if (document.getElementById('myDropdown').classList.toggle === 'show') {
      document.getElementById('myDropdown').classList.toggle('hide');
    } else {
      document.getElementById('myDropdown').classList.toggle('show');
    }
  };

  const helperFunction = () => {
    dispatch(fetchCountries());
  };

  const handleContinentSelection = (continentArg) => {
    if (document.getElementById('myDropdown').classList.toggle === 'show') {
      document.getElementById('myDropdown').classList.toggle('hide');
    } else {
      document.getElementById('myDropdown').classList.toggle('show');
    }
    const countryDetail = Countries.filter(({ continent }) => continent === continentArg);
    dispatch(filterCountries(countryDetail));
  };

  return (
    <header>
      <nav className="nav">
        <div className="logo Flex-1">
          <Link to="/">
            <h2>Countries Hub</h2>
          </Link>
        </div>
        <div className="dropdown">
          <button type="button" onClick={() => { helperFunction(); handleContinentChoice(); }} className="dropbtn">Continents</button>
          <div id="myDropdown" className="dropdown-content">
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('Africa')}>Africa</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('Asia')}>Asia</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('Europe')}>Europe</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('North America')}>North America</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('South America')}>South America</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('Oceania')}>Oceania</button>
            <button type="button" className="dropbtn" onClick={() => handleContinentSelection('Antarctica')}>Antarctica</button>

          </div>
        </div>

        <ul className="navLinks Flex-1">
          <li className="linkItems">
            <NavLink
              to="countries"
            >
              <GrMicrophone />
            </NavLink>
            <NavLink
              to="countries"
            >
              <FiSettings />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

  );
};

export default Navigation;
