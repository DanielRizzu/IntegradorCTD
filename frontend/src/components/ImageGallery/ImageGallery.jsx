import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (currentImage && carouselRef.current) {
      // Obtener el tamaño de la imagen actual
      const imageSize = {
        width: currentImage.offsetWidth,
        height: currentImage.offsetHeight,
      };

      // Establecer el tamaño del carrusel según el tamaño de la imagen
      carouselRef.current.style.width = `${imageSize.width}px`;
      carouselRef.current.style.height = `${imageSize.height}px`;
    }
  }, [currentImage]);

  const handleImageLoad = (event) => {
    setCurrentImage(event.target);
  };

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={`Image ${index}`}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;