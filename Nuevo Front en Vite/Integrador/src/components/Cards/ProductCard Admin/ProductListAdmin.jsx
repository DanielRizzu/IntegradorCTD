import React from 'react';
import ProductAdmin from './ProductAdmin';
import Spinner from '../../Spinner/Spinner';
import style from '../../ProductList/ProductList.module.css';

const ProductListAdmin = ({ products, isLoading,  }) => {
  //console.log(products);
  return (
    <div className={style.container}>
      {isLoading ? (
        <div style={{ alignSelf: 'center' }}>
          <Spinner style={{ alignSelf: 'center' }} />
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <p className={style.msgNoProducts}>
              Lamentablemente no hay productos para los filtros seleccionados.
            </p>
          ) : (
            products.map((product) => (
              <ProductAdmin
                key={product.id}
                id={product.id}
                imgUrl={product.image}
                category={product.category}
                title={product.name}
                description={product.description}
                location={product.city}
                
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ProductListAdmin;