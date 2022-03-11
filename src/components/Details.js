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

  // console.log(countryDetails);

  return (
    <div className="details">
      <Header className="App-header" search="false" />
    </div>
  );
}

export default Details;
