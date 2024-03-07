import React from 'react';
import Social from '../Social/Social';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>Viajando ™</p>
      <Social />
    </div>
  );
};

export default Footer;
