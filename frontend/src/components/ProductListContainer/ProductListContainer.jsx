import React, { useEffect, useState } from 'react';
import style from './ProductListContainer.module.css';
import baseUrl from '../../utils/baseUrl.json';
import ProductList from '../ProductList/ProductList'

const ProductListContainer = ({
  searchCity,
  searchRangeDates,
  filterCategories,
  searchTerm // Recibimos el término de búsqueda del usuario
}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const startDate =
    searchRangeDates[0] &&
    new Date(searchRangeDates[0]).toISOString().slice(0, 10);

  const endDate =
    searchRangeDates[1] &&
    new Date(searchRangeDates[1]).toISOString().slice(0, 10);

  const url =
    filterCategories && !(searchCity || (startDate && endDate ))
      ? `${baseUrl.url}/products/category/${filterCategories}`
      : searchCity && startDate && endDate
      ? `${baseUrl.url}/products/cityAndDates/${searchCity.id}/${startDate}/${endDate}`
      : searchCity && !(startDate && endDate)
      ? `${baseUrl.url}/products/city/${searchCity.id}`
      : startDate && endDate
      ? `${baseUrl.url}/products/dates/${startDate}/${endDate}`
      : `${baseUrl.url}/products`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar productos según el término de búsqueda
        const filteredProducts = searchTerm
          ? data.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
          || product.address.toLowerCase().includes(searchTerm.toLowerCase()))
          : data;
        setProducts(filteredProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        setProducts([]);
        setIsLoading(false);
        console.log(err);
      });
  }, [url, searchTerm]); // Actualizamos la dependencia para incluir el término de búsqueda

  return (
    <div className={style.container}>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default ProductListContainer;



