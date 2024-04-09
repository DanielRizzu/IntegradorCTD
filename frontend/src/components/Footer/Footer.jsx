import React from 'react';
import Social from '../Social/Social';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>Viajando ™</p>
      <a href="/about" className={style.aboutLink}>Sobre Nosotros</a> {/* Agregar clase aboutLink */}
      <Social />
    </div>
  );
};

export default Footer;