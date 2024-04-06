import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';
import style from './Avatar.module.css';

const Avatar = () => {
  const userContextResult = useContext(userContext);

  const name = userContextResult.userInfo.name;
  const lastname = userContextResult.userInfo.lastName;
  const roleType = userContextResult.userInfo.role;
  const navigate = useNavigate();


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuOpen && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuOpen]);

  return (
    <div className={style.container}>
      {roleType === 'ADMIN' && (
        <div className={style.containerRole}>
          <Link to="/administration" className={style.textRole}>
            Panel Admin
          </Link>
          <span className={style.lineVertical}></span>
        </div>
      )}
      {roleType === 'SUPERUSER' && (
        <div className={style.containerRole}>
          <Link to="/superuser" className={style.textRole}>
            Panel Super usuario
          </Link>
          <span className={style.lineVertical}></span>
        </div>
      )}
      {roleType === 'USER' && (
        <div className={style.containerRole}>
          <Link to="/reservas" className={style.textRole}>
            Mis reservas
          </Link>
          <span className={style.lineVertical}></span>
        </div>
      )}
      <div className={style.initialsContainer}>
        <span>{`${name.substring(0, 1)}${lastname.substring(0, 1)}`}</span>
        {menuOpen && (
          <div className={style.dropdownMenu}>
            <ul>
              <li>
                <button onClick={() => {
                  userContextResult.logoutUser();
                  navigate("/")
                  // Otros códigos necesarios para cerrar el menú o realizar acciones adicionales
                }}>
                  Cerrar sesión
                </button>
              </li>
              {/* Agrega más opciones de menú según sea necesario */}
            </ul>
          </div>
        )}
      </div>
      <p onClick={toggleMenu} ref={menuRef}>
        <span className={style.greeting}>Hola,</span>
        <br />
        {name} {lastname}
      </p>
    </div>
  );
};

export default Avatar;
