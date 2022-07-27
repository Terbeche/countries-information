import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../css/CountryPage.css';

const CountryPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="country-container">
      <div className="country-name">
        <p>Country</p>
        <h2>{data[0].name}</h2>
      </div>
      <div className="country-area">
        <p>Area</p>
        <h2>{data[0].area}</h2>
      </div>
      {' '}
      <div className="country-population">
        <p>Population</p>
        <h2>{data[0].population}</h2>
      </div>
      {' '}
      <div className="country-continent">
        <p>Continent</p>
        <h2>{data[0].continent}</h2>
      </div>
      <div className="country-flag">

        <img src={data[0].flag} alt={data[0].name} />
      </div>
      <div className="back-home">
        <button type="button" onClick={() => navigate(-1)}>Go back</button>
      </div>

    </div>
  );
};
CountryPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default CountryPage;
