import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import style from './ProductGallery.module.css';

const ProductGallery = ({ desktop, images, toggleModal }) => {
  return (
    <div className={style.galleryContainer}>
      {desktop ? (
        <>
          <div className={style.imagesDesktopContainer}>
            <div className={style.bigImageContainer}>
              <img
                key={images[0].id}
                src={images[0].url}
                alt="foto"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={style.smallsImageContainer}>
              {images.slice(1, 3).map((image) => (
                <div key={image.id}>
                  <img
                    src={image.url}
                    alt="foto"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <div className={style.smallsImageContainer2}>
              {images.slice(3, 5).map((image) => (
                <div key={image.id}>
                  <img
                    src={image.url}
                    alt="foto"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className={style.viewMoreText}
              onClick={toggleModal}
            >
              Ver más
            </button>
          </div>
        </>
      ) : (
        <ImageGallery images={images.slice(0, 5)} />
      )}
    </div>
  );
};

export default ProductGallery;