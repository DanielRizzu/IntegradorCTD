import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fas,
  faStar,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const Product = ({
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

        <div className={style.productInformation}>
          {/* <p className={style.productLocation}>
            <FontAwesomeIcon icon={faLocationDot} /> {location.name} -{' '}
            <Link className={style.linkLocation} href="">
              Ver ubicacion
            </Link>{' '}
          </p> */}
          <p className={style.productLocation}>
            <FontAwesomeIcon icon={faLocationDot} /> {location.name} -{' '}
          <a
            className={style.linkLocation}
            href="https://www.google.com/maps/place/712+Red+Bark+Ln,+Henderson,+NV+89011,+EE.+UU./@36.0771811,-115.0153233,3a,75y,130.67h,85.17t/data=!3m6!1e1!3m4!1sg1ETpkB_QDQI6IUm55QaMw!2e0!7i13312!8i6656!4m7!3m6!1s0x80c8d0b89793735f:0x82738f1bb7cadcb8!8m2!3d36.0773875!4d-115.0153163!10e5!16s%2Fg%2F11c2gxkb7m?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación
          </a>
        </p>
          {/* attributes */}
          <div className={style.propertyHighlights}>
            {attributes?.map((attribute) => (
              <FontAwesomeIcon icon={fas[attribute?.icon]} key={attribute.id} />
            ))}
          </div>
        </div>

        <p className={style.productDescription}>{description}</p>
        <Link to={`/products/${id}`} className={`btn btn2 w-100`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Product;
