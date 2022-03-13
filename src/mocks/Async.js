import { useEffect, useState } from 'react';

const Async = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/egypt')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.population}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
