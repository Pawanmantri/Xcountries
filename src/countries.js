// src/Countries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://xcountries-backend.azurewebsites.net/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchCountries();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <div key={country.alpha3Code} className="country">
          <img src={country.flag} alt={`Flag of ${country.name}`} />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
