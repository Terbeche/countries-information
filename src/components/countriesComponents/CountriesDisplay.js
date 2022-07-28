import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getCountryDetails } from '../../redux/countries/countries';
import '../../css/CountriesDisplay.css';

const CountriesDisplay = ({
  id, name, population,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(getCountryDetails({ name }));
    navigate(`/countries/${name}`);
  };

  return (
    <ul className="country-container">
      <li className="goto-country">
        <button type="button" className="name" onClick={() => handleClick(name)}>
          <BsArrowRightCircle />
        </button>
      </li>
      <li key={id} className="country">

        <div className="country-detail">
          <button type="button" className="name" onClick={() => handleClick(name)}>{name}</button>
          <div className="population">
            <span>Population:</span>
            <span>
              {population}
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
};

CountriesDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.node.isRequired,
};

export default CountriesDisplay;
