import world_map from '../assets/World-map.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountriesFromAPI } from '../Redux/Homepage/homepage';
import { Link } from 'react-router-dom';
import Header from './Header';

const Homepage = () => {
  const countriesList = useSelector((state) => state.homepageReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, [dispatch]);

  return (
    <div className="homepage">
      <Header className="App-header" search="true" />
      <div className="overview">
        <img src={world_map} alt="World map" />
        <h1>Countries Of The World</h1>
      </div>
      <ul className="list">
        {countriesList.map((country) => {
          return (
            <li key={country.name}>
              <Link to={country.name}>
                <img src={country.flag} alt="Flag" />
                <p>{country.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
