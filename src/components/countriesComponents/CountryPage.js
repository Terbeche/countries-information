import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import '../../css/CountryPage.css';

const CountryPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="country-page">

      <div className="back-home">
        <button type="button" className="back-home-btn" aria-label="Return to home page" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Return to Home
        </button>
      </div>
      <div className="single-country">
        <div className="contry-information-container">
          <div className="contry-information">
            <p>Country</p>
            <p>Area</p>
            <p>Population</p>
            <p>Continent</p>
          </div>
          <div className="contry-information">
            <div className="country-name">
              <h2>{data[0].name}</h2>
            </div>
            <div className="country-area">

              <h2>{data[0].area}</h2>
            </div>
            <div className="country-population">

              <h2>{data[0].population}</h2>
            </div>
            <div className="country-continent">

              <h2>{data[0].continent}</h2>
            </div>
          </div>

        </div>
        <div className="country-flag">

          <img src={data[0].flag} alt={data[0].name} className="flag-image" />
        </div>

      </div>

    </div>

  );
};
CountryPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default CountryPage;
