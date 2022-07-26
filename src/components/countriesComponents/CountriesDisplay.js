import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryDetails } from '../../redux/countries/countries';

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
    <div>
      <ul className="rocket-container">
        <li key={id} className="Rocket">

          <div className="Rocket-Detail Rocket-Part2">
            <button type="button" className="name" onClick={() => handleClick(name)}>{name}</button>
            <p className="description">
              {population}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

CountriesDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.node.isRequired,
};

export default CountriesDisplay;
