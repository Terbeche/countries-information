/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const countriesAPI = 'https://restcountries.com/v3.1/all';

const INITIAL_STATE = {
  loading: true,
  Countries: [],
};

export const fetchCountries = createAsyncThunk('countries/getCountries', async () => {
  const res = await fetch(countriesAPI);
  return res.json();
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: INITIAL_STATE,
  reducers: {
    getCountryDetails: (state, action) => {
      const { name } = action.payload;
      const singleCountry = current(state).Countries.map((country) => {
        if (name === country.name) {
          return { ...country, show: true };
        }
        if (name !== country.name) {
          return { ...country, show: false };
        }
        return country;
      });
      state.Countries = singleCountry;
    },

    filterCountries: (state, action) => {
      const continentCountries = action.payload;
      state.Countries = continentCountries;
    },
  },
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      const countriesArr = action.payload.map((item) => ({
        name: item.name.common,
        population: item.population,
        area: item.area,
        capital: item.capital,
        continent: item.continents[0],
        flag: item.flags.svg,
        show: false,
      }));

      state.Countries = countriesArr;
      state.loading = false;
    },

    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },

    [fetchCountries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { getCountryDetails, filterCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
