import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../ProductHeader/ProductHeader.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

//aca ingresas al panel de administracion para cargar algo (prodcuto)
const SecondaryHeader = () => {
  return (
    <section className={style.header}>
      <div className={style.headerLeft}>
        <h1>Panel Administración</h1>   
      </div>
      <div className={style.headerRight}>
        <Link to="/">
          Inicio
        </Link>
      </div>
    </section>
  );
};

export default SecondaryHeader;
