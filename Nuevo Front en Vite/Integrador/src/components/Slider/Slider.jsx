import React from 'react'
import './Slider.css'
import { Card } from '../Card/Card'

const images = [
    'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export const Slider = () => {
    return (
        <div className="slider" style={{backgroundImage: `url(${images[1]})`}}>
            <Card />
        </div>  
    )
}
