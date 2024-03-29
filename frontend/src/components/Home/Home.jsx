// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories';
import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Search from '../Search/Search';
// import PackageListContainer from '../Search/PackageListContainer';
import style from './Home.module.css';
import { Slider } from '../Slider/Slider';
import Product from '../Product/Product';

const Home = () => {
  const [searchCity, setSearchCity] = useState(null);
  const [searchRangeDates, setSearchRangeDates] = useState([null, null]);
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  // const [searchPackage, setPackage] = useState(null);


  const handleSearch = (citySearch, dateRange) => {
    setSearchCity(citySearch);
    setSearchRangeDates(dateRange);
  };

  const handleFilterCategories = (category) => {
    setCategoriesFilter(category);
  };


  return (
    <div className={style.homeContainer}>
      <Slider />
      <Search handleSearch={handleSearch} />
      <Categories handleFilterCategories={handleFilterCategories} />
      <ProductListContainer

        searchCity={searchCity}
        searchRangeDates={searchRangeDates}
        filterCategories={categoriesFilter}
      />
      
    </div>
  );
};

export default Home;
