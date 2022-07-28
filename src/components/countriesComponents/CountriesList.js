import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CountriesDisplay from './CountriesDisplay';

const CountriesList = () => {
  const { Countries } = useSelector((state) => state.countries);

  return (

    <div className="countries-container">
      {Countries.map((Country) => (
        <CountriesDisplay
          key={uuidv4()}
          id={uuidv4()}
          name={Country.name}
          population={Country.population}
          area={Country.area}
          capital={Country.capital}
          continent={Country.continent}
          flag={Country.flag}

        />
      ))}
    </div>

  );
};

export default CountriesList;
