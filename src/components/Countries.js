import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import CountriesList from './countriesComponents/CountriesList';

const Countries = () => {
  const dispatch = useDispatch();
  const { loading, Countries } = useSelector((state) => state.countries);

  useEffect(() => {
    if (Countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch]);

  return (

    <div>
      {loading && <div>Loading ...</div>}
      {!loading && (<CountriesList />)}

    </div>
  );
};

export default Countries;
