import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const CountryPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="country-container country-detail">
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
        <button type="button" aria-label="Return to home page" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
      </div>

    </div>
  );
};
CountryPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default CountryPage;
