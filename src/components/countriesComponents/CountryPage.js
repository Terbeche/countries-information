import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

const CountryPage = ({ dataList }) => (
  <div>
    <h2>{dataList[0].name}</h2>
    <h2>{dataList[0].area}</h2>
    <h2>{dataList[0].population}</h2>
    <h2>{dataList[0].id}</h2>
    <h2>{dataList[0].continent}</h2>
  </div>

);
CountryPage.propTypes = {
  dataList: PropTypes.node.isRequired,
};

export default CountryPage;
