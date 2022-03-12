import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDetailsFromAPI } from '../Redux/Details/details';
import { useParams } from 'react-router-dom';

const Details = () => {
  const countryDetails = useSelector((state) => state.detailsReducer)
  const dispatch = useDispatch();
  const params = useParams();


  const { countryName } = params;

  useEffect(() => {
    dispatch(getDetailsFromAPI(countryName));
  }, [dispatch, countryName]);

  return (
    <div className="details">
      <Header search="false" />
      {!countryDetails && <h1 className="loading">No match...</h1>}
      {countryDetails && countryDetails.map((country) => {
        return (
          <div className="single-country">
            <div className="single-country-preview">
              <img src={country.flag} alt="Flag" />
              <h1>{country.name}</h1>
              <h2>{country.region}</h2>
            </div>
            <ul className="single-country-details">
              <li>
                <span>Capital:</span>
                <span>{country.capital}</span>
              </li>
              <li>
                <span>Language:</span>
                <span>{country.languages}</span>
              </li>
              <li>
                <span>Area:</span>
                <span>{country.area} &#13218;</span>
              </li>
              <li>
                <span>Population:</span>
                <span>{(country.population / 1000000).toFixed(1)} million</span>
              </li>
              <li>
                <span>Currency:</span>
                <span>{country.currencies}</span>
              </li>
              <li>
                <span>Timezone:</span>
                <span>{country.timezones}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div >
  )
}

export default Details;
