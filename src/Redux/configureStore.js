import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homepageReducer, { getCountriesFromAPI } from './Homepage/homepage';
// import detailsReducer, { getDetailsFromAPI } from './Details/details';

const reducer = combineReducers({
  homepageReducer,
  // detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getCountriesFromAPI());
// store.dispatch();
export default store;
