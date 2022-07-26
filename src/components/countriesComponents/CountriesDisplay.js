import PropTypes from 'prop-types';

const CountriesDisplay = ({
  id, name, population,
}) => (

  <div>
    <ul className="rocket-container">
      <li key={id} className="Rocket">

        <div className="Rocket-Detail Rocket-Part2">
          <h2 className="name">{name}</h2>
          <p className="description">
            {population}
          </p>
        </div>
      </li>
    </ul>
  </div>

);

CountriesDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.node.isRequired,
};

export default CountriesDisplay;
