import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../Product/Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fas,
  faStar,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const RedButton = styled(Button)({
  backgroundColor: '#b30000',
  color: 'white',
  '&:hover': {
    backgroundColor: 'red', // Cambia el color al pasar el ratón sobre el botón
  },
});

const ProductAdmin = ({
  id,
  imgUrl,
  category,
  title,
  description,
  location,
  attributes,
  averageScore,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleAddFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  const textScore = (rating) => {
    let text =
      rating >= 0 && rating <= 2.5
        ? 'Muy Malo'
        : rating >= 2.6 && rating <= 5
        ? 'Malo'
        : rating >= 5.1 && rating <= 6.5
        ? 'Regular'
        : rating >= 6.6 && rating <= 8
        ? 'Bueno'
        : 'Muy bueno';
    return text;
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.productImageContainer}>
        <img className={style.productImage} src={imgUrl[0]?.url} alt={title} />
      </div>
      <div className={style.cardDetails}>
        <div className={style.row1}>
          <div className={style.productInitialContainer}>
            <h5 className={style.productTitle}>{title}</h5>
          </div>
        </div>

        

        <p className={style.productDescription}>{description}</p>
        <RedButton variant="contained" >
      Eliminar Paquete
    </RedButton>
      </div>
    </div>
  );
};

export default ProductAdmin;
