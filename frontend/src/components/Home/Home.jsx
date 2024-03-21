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

  //console.log('id category', categoriesFilter);

  const handleFilterCategories = (category) => {
    setCategoriesFilter(category);
  };

  // para buscar paquetes

  const [listPackages, setListPackage] = useState([])
  // const [actualizacion, setActualizacion] = useState(0)
  const [searchTerm, setSearchTerm] = useState('');
  // const jwt = JSON.parse(localStorage.getItem('jwt'))

  const fetchPackages= async()=>{
    const resp = await fetch('http://localhost:8080/products');
    const data = await resp.json();
    console.log(data);
    setListPackage(data);
  }

  useEffect(()=>{
    fetchPackages();
  },[])

  const handleSearchPackages = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPackages = listPackages.filter((products) =>
    products.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    products.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // fin buscar paquetes

  return (
    <div className={style.homeContainer}>
      <Slider />
      <Search handleSearch={handleSearch} />
      <Categories handleFilterCategories={handleFilterCategories} />
      <form action="">
      <input className={style.searchPackageInput} 
          type="search" 
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchPackages}
          />
          <div className={style.slidercard}>
          {filteredPackages.map((product) => (
          <Product
          key={product.id}
          id={product.id}
          imgUrl={product.image}
          category={product.category}
          title={product.name}
          description={product.description}
          location={product.city}
          address={product.address}
          attributes={product.attributes}
          latitude={product.latitude}
          longitude={product.longitude}
          policiesSite={product.policiesSite}
          policiesSecurityAndHealth={product.policiesSecurityAndHealth}
          policiesCancellation={product.policiesCancellation}
          averageScore={product.average_score}
        />
        ))}
          </div>
      </form>
      <div>
          
          
      </div>
     
      <ProductListContainer
        searchTerm={searchTerm}
        searchCity={searchCity}
        searchRangeDates={searchRangeDates}
        filterCategories={categoriesFilter}
      />
      
    </div>
  );
};

export default Home;
