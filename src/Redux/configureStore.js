import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homepageReducer from './Homepage/homepage';
import detailsReducer from './Details/details';

const reducer = combineReducers({
  homepageReducer,
  detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
