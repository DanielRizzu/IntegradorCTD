// import React, { useState } from 'react';
// import Categories from '../Categories/Categories';
// import ProductListContainer from '../ProductListContainer/ProductListContainer';
// import Search from '../Search/Search'; // Importamos Search
// import style from './Home.module.css';
// import { Slider } from '../Slider/Slider';
// import Product from '../Product/Product';

// const Home = () => {
//   const [searchCity, setSearchCity] = useState(null);
//   const [searchRangeDates, setSearchRangeDates] = useState([null, null]);
//   const [categoriesFilter, setCategoriesFilter] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (citySearch, dateRange, searchTerm) => {
//     setSearchCity(citySearch);
//     setSearchRangeDates(dateRange);
//     setSearchTerm(searchTerm); // Agregamos la actualización del término de búsqueda
//   };

//   const handleFilterCategories = (category) => {
//     setCategoriesFilter(category);
//   };

//   const handleCardFilter = (e) => {
//     setSearchTerm(e)
//   }

//   return (
//     <div className={style.homeContainer}>
//       <Slider />
//       <Search handleCardFilter={handleCardFilter} handleSearch={handleSearch} />
//       <Categories handleFilterCategories={handleFilterCategories} />
//       <ProductListContainer
//         searchCity={searchCity}
//         searchRangeDates={searchRangeDates}
//         filterCategories={categoriesFilter}
//         searchTerm={searchTerm}
//       />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Search from '../Search/Search';
import style from './Home.module.css';
import { Slider } from '../Slider/Slider';
import Product from '../Product/Product';

const Home = () => {
  const [searchCity, setSearchCity] = useState(null);
  const [searchRangeDates, setSearchRangeDates] = useState([null, null]);
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (citySearch, dateRange, searchTerm) => {
    setSearchCity(citySearch);
    setSearchRangeDates(dateRange);
    setSearchTerm(searchTerm);
  };

  const handleFilterCategories = (category) => {
    setCategoriesFilter(category);
  };

  const handleCardFilter = (e) => {
    setSearchTerm(e)
  };

  const resetFilters = () => {
    setCategoriesFilter(null);
    setSearchTerm('');
  };

  const resetSearch = () => {
    setSearchCity(null);
    setSearchRangeDates([null, null]);
  };

  const handleClearFilters = () => {
    resetFilters();
    resetSearch();
  };

  return (
    <div className={style.homeContainer}>
      <Slider />
      <Search handleCardFilter={handleCardFilter} handleSearch={handleSearch} handleClearFilters={handleClearFilters} />
      <Categories handleFilterCategories={handleFilterCategories} />
      <ProductListContainer
        searchCity={searchCity}
        searchRangeDates={searchRangeDates}
        filterCategories={categoriesFilter}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;






