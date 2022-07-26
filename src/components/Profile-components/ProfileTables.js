import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ProfileTable = ({ header, dataList, type }) => (
  <div className="Flex">
    <h2 className="profile-heading table-heading">{header}</h2>
    <table className="profile-table">
      <tbody>
        {dataList.map((data) => (
          <tr key={uuidv4()}>
            <td className="column data-name">
              {type === 'countries' ? data.name : data.mission_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ProfileTable.propTypes = {
  header: PropTypes.string.isRequired,
  dataList: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProfileTable;
