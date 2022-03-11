const GET_DETAILS_API = 'CountriesOfTheWorld/details/GET_DETAILS';


const initialState = [];

export const getDetails = (payload) => ({
  type: GET_DETAILS_API,
  payload,
});

export const getDetailsFromAPI = (country) => async (dispatch) => {
  await fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const arrData = data.map((country) => ({
        name: country.name,
        flag: country.flags.png,
        region: country.region,
        callingCodes: country.callingCodes,
        population: country.population,
        area: country.area,
        timezones: country.timezones[0],
        currencies: country.currencies.name,
        languages: country.languages.name
      }));
      if (arrData) {
        dispatch(getDetails(arrData));
      }
    });
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_API:
      return [...action.payload];
    default:
      return state;
  }
};

export default detailsReducer;
