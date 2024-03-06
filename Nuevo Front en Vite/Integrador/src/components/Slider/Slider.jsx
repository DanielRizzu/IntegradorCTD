import React, { useEffect, useState } from 'react'
import './Slider.css'
import { Card } from '../Card/Card'
import { arraySlider } from '../../assets/array'

export const Slider = () => {

    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState(arraySlider);
    const [title, setTitle] = useState('');
    const[descr, setDescr] = useState('');
    const [url, setUrl] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            let title = images[current].title
            let description = images[current].description
            let link = images[current].url

            setTitle(title);
            setDescr(description);
            setUrl(link);

            console.log(url);
            nextImage();

        },4000) 
    },[current])

    const nextImage = ()=>{
        if (current === images.length - 1) {
            setCurrent(0); // Reiniciar al principio
        } else {
            setCurrent(current + 1);
        }
    }




    return (
        <div className="slider" style={{backgroundImage: `url(${url})`}}>
            <Card title={title} description={descr} />
        </div>  
    )
}
