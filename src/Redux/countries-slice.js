import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    countryInfo: [],
  },
  reducers: {
    getCountries(state, action) {
      state.countries.push(...action.payload);
    },
    getCountryInfo(state, action) {
      state.countryInfo.push(...action.payload);
    },
  },
});

export const { getCountryInfo, getCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
