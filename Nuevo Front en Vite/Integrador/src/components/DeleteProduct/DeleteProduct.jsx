import React, { useEffect, useState } from 'react'
import adminStyle from '../../pages/Administration/SuperAdministration.module.css'
import { ProductCard } from '../Cards/ProductCard Admin/ProductCard';
import ProductListContainerAdmin from '../Cards/ProductCard Admin/ProductListContainerAdmin';

const DeleteProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [searchCity, setSearchCity] = useState(null);
  const [searchRangeDates, setSearchRangeDates] = useState([null, null]);
  const [categoriesFilter, setCategoriesFilter] = useState(null);

  const fetchProducts = async () => {
    const resp = await fetch('http://localhost:8080/products');
    const data = await resp.json();
    setListProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <div className={adminStyle.userListContainer}>
        <ProductListContainerAdmin
            searchCity={searchCity}
        searchRangeDates={searchRangeDates}
        filterCategories={categoriesFilter}// Define categoriesFilter según tus necesidades
          />
      
    </div>
  );
};
export default DeleteProduct
