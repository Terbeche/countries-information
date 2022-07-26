import '../css/Profile.css';
import { useSelector } from 'react-redux';
import ProfileTable from './Profile-components/ProfileTables';

const MyProfile = () => {
  const { Countries } = useSelector((state) => state.countries);

  const reservedRockets = Countries.filter(({ reserved }) => reserved);

  return (
    <section className="mission-container">
      <div className="profile-holder">
        <ProfileTable dataList={reservedRockets} header="My Countries" type="countries" />
      </div>
    </section>
  );
};

export default MyProfile;
