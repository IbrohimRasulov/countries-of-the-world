const GET_COUNTRIES_API = 'CountriesOfTheWorld/countries/GET_COUNTRIES_API';
const COUNTRIES_API = 'https://restcountries.com/v2/all';

const initialState = [];

export const getCountries = (payload) => ({
  type: GET_COUNTRIES_API,
  payload,
});

export const getCountriesFromAPI = () => async (dispatch) => {
  await fetch(COUNTRIES_API)
    .then((response) => response.json())
    .then((data) => {
      const arrData = data.map((country) => ({
        name: country.name,
        flag: country.flags.png,
        region: country.region,
      }));
      if (arrData) {
        dispatch(getCountries(arrData));
      }
    });
};

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_API:
      return [...action.payload];
    default:
      return state;
  }
};

export default homepageReducer;
