import React, { useState } from 'react';
import CreateProduct from '../../components/CreateProduct/CreateProduct';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import style from './Administration.module.css';
import DeleteProduct from '../../components/DeleteProduct/DeleteProduct';

const Administration = () => {
  const [renderCreateProduct, setRenderCreateProduct] = useState(true);

  const handleCreateProductClick = () => {
    setRenderCreateProduct(true);
  };

  const handleDeleteProductClick = () => {
    setRenderCreateProduct(false);
  };

  const products = []; // You need to provide actual product data here
  const onDelete = () => {};

  return (
    <div className={style.container}>
      <SecondaryHeader
        onCreateProductClick={handleCreateProductClick}
        onDeleteProductClick={handleDeleteProductClick}
      />
      {renderCreateProduct ? <CreateProduct /> : <DeleteProduct products={products} onDelete={onDelete}/>}
    </div>
  );
};

export default Administration;
