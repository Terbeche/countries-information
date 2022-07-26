import { useSelector } from 'react-redux';
import CountriesDisplay from './CountriesDisplay';

const CountriesList = () => {
  const { Countries } = useSelector((state) => state.countries);

  return (

    <div>
      {Countries.map((Country) => (
        <CountriesDisplay
          key={Country.id}
          id={Country.id}
          name={Country.name}
          population={Country.population}
          reserved={Country.reserved}
        />
      ))}
    </div>

  );
};

export default CountriesList;
