import React, { useContext, useState } from 'react';
import style from './Search.module.css';
import Calendar from './Calendar/Calendar';
import SelectCity from './SelectCity/SelectCity';
import { dateRangeContext } from '../../context/DateRangeContext';
import { Input } from '@mui/material';

const Search = ({ handleSearch }) => {
  const [city, setCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { rangeDate } = useContext(dateRangeContext);

  const getCity = (valueCity) => {
    setCity(valueCity);
    // Realizar la búsqueda solo si el término de búsqueda está presente
    if (searchTerm) {
      handleSearch(valueCity, rangeDate, searchTerm);
    }
  };

  const handleTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Realizar la búsqueda cuando el término de búsqueda cambia
    handleSearch(city, rangeDate, term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la búsqueda cuando se envía el formulario
    handleSearch(city, rangeDate, searchTerm);
  };

  return (
    <div className={style.searchContainer}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <Input
          className={style.searchPackageInput}
          type="search"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleTermChange}
        />
        <SelectCity getCity={getCity} />
        <Calendar />
        <button type="submit" className={`btn btn2 ${style.searchBtn}`}>Buscar</button>
      </form>
    </div>
  );
};

export default Search;
