import { useSelector } from 'react-redux';
import CountryPage from './CountryPage';

const Country = () => {
  const { Countries } = useSelector((state) => state.countries);
  const countryDetail = Countries.filter(({ show }) => show);
  console.log(countryDetail);
  return (
    <section>
      <div>
        <CountryPage data={countryDetail} />
      </div>
    </section>
  );
};

export default Country;
