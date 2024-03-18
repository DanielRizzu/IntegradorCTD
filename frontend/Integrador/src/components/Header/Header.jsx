import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.svg';
import style from './Header.module.css';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.containerLeft}>
          <Link to="/" aria-label="Página de inicio de Equipo ">
            <div className={style.logoContainer}>
              <img src={logo} alt="logo" />
              <span className={style.motto}>VIAJANDO</span>
            </div>
          </Link>
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
