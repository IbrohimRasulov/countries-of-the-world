import world_map from '../assets/World-map.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountriesFromAPI } from '../Redux/Homepage/homepage';
import { Link } from 'react-router-dom';
import Header from './Header';

const Homepage = () => {
  const countriesList = useSelector((state) => state.homepageReducer)
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, [dispatch]);

  const filteredData = countriesList.filter((country) => {
    const data = Object.keys(country).some((key) => {
      const res = country[key].toLowerCase().includes(search.toLowerCase());
      return res;
    });
    return data;
  });

  return (
    <div className="homepage">
      <Header className="App-header" search="true" />
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <div className="overview">
        <img src={world_map} alt="World map" />
        {filteredData.length !== 0 && <h1>Countries Of The World</h1>}
      </div>
      <ul className="list">
        {countriesList.length === 0 && <h1 className="loading">Loading...</h1>}
        {(filteredData.length === 0 && search.length !== 0) && <h1 className="loading">No match :(</h1>}
        {filteredData && filteredData.map((country) => {
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
