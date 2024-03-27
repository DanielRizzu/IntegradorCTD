import React, { useContext, useState } from 'react';
import style from './Search.module.css';
import Calendar from './Calendar/Calendar';
import SelectCity from './SelectCity/SelectCity';
import { dateRangeContext } from '../../context/DateRangeContext';
import { UserSearch } from './UserSearch';
import { Input } from '@mui/material';

const Search = ({ handleSearch, handleCardFilter }) => {
  const [city, setCity] = useState(null);
  const { rangeDate } = useContext(dateRangeContext);

  const getCity = (valueCity) => {
    setCity(valueCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city, rangeDate);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    handleCardFilter(input)
  }

  return (
    <div className={style.searchContainer}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
      <input className={style.searchPackageInput} 
          type="search" 
          placeholder="Buscar..."
          onChange={handleChange}
          />
        <SelectCity getCity={getCity} />
        <Calendar />
        <button className={`btn btn2 ${style.searchBtn}`}>Buscar</button>
        
      </form>
    </div>
  );
};

export default Search;
