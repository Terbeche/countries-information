import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CountryPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{data[0].name}</h2>
      <h2>{data[0].area}</h2>
      <h2>{data[0].population}</h2>
      <h2>{data[0].id}</h2>
      <h2>{data[0].continent}</h2>
      <img src={data[0].flag} alt={data[0].name} />
      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
CountryPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default CountryPage;
