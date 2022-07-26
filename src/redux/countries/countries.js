/* eslint-disable */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const countriesAPI = 'https://api.spacexdata.com/v3/rockets';
const countriesAPI = 'https://restcountries.com/v3.1/all';


const INITIAL_STATE = {
  loading: false,
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
  },
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {

      const countriesArr = action.payload.map((item) => ({
        id :uuidv4(), 
        name: item.name.common,
        population: item.population,
        reserved: false,
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

export const { handleRocketReservation } = countriesSlice.actions;

export default countriesSlice.reducer;
