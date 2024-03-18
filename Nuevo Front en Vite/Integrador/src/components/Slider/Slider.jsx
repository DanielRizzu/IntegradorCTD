import React, { useEffect, useState } from 'react';
import './Slider.css';
import { Card } from '../Cards/Card';
import { arraySlider } from '../../utils/array';

export const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState(arraySlider);
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [url, setUrl] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = arraySlider.map((image) => {
                return new Promise((resolve, reject) => {
                    const tempImage = new Image();
                    tempImage.src = image.url;
                    tempImage.onload = resolve;
                    tempImage.onerror = reject;
                });
            });

            Promise.all(imagePromises)
                .then(() => setIsLoaded(true))
                .catch((error) => console.error('Error pre-cargando imágenes:', error));
        };

        preloadImages();
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const intervalId = setInterval(nextImage, 4000);

            return () => clearInterval(intervalId);
        }
    }, [isLoaded, current]);

    const nextImage = () => {
        if (current === images.length - 1) {
            setCurrent(0); // Reiniciar al principio
        } else {
            setCurrent(current + 1);
        }
    };

    useEffect(() => {
        if (isLoaded) {
            const { title, description, url } = images[current];
            setTitle(title);
            setDescr(description);
            setUrl(url);
        }
    }, [current, isLoaded]);

    return (
        <div className={`slider`} style={{ backgroundImage: `url(${url})` }}>
            {isLoaded && (
                <div className={`Card`}>
                    <Card title={title} description={descr} />
                </div>
            )}
        </div>
    );
};