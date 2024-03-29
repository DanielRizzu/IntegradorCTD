import React, { useEffect, useState } from 'react';
import style from './Categories.module.css';
import baseUrl from '../../utils/baseUrl.json';
import CategorieSkeleton from '../Skeletons/CategorieSkeleton/CategorieSkeleton';

const Categories = ({ handleFilterCategories }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl.url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex === categories.length - 1 ? prevIndex : prevIndex + 1));
  };

  return (
    <div className={style.categoriesContainer}>
      <h2>Categorias</h2>
      <div className={style.categoriesList}>
        {isLoading ? (
          <>
            <CategorieSkeleton />
            <CategorieSkeleton />
            <CategorieSkeleton />
            <CategorieSkeleton />
          </>
        ) : (
          <>
            {categories.slice(currentCategoryIndex, currentCategoryIndex + 4).map((category, index) => (
              <div
                className={style.categoryCard}
                key={category.id}
                onClick={() => handleFilterCategories(category.id)}
              >
                <img
                  className={style.categoryImage}
                  src={category.url}
                  alt={category.name}
                />
                <div className={style.containerDescription}>
                  <p>{category.name}</p>
                  <p className={style.categoryDescription}>
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
            {currentCategoryIndex !== 0 && (
              <button className={`${style.prevButton} ${style.navigationButton}`} onClick={prevCategory}>{'<'}</button>
            )}
            {currentCategoryIndex !== categories.length - 4 && (
              <button className={`${style.nextButton} ${style.navigationButton}`} onClick={nextCategory}>{'>'}</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
