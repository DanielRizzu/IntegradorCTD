import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';
import style from './Avatar.module.css';

const Avatar = () => {
  const userContextResult = useContext(userContext);

  const name = userContextResult.userInfo.name;
  const lastname = userContextResult.userInfo.lastName;
  const roleType = userContextResult.userInfo.role;

  return (
    <div className={style.container}>
      {roleType === 'ADMIN' && (
        <div className={style.containerRole}>
          <Link to="/administration" className={style.textRole}>
            Panel Admin
          </Link>{' '}
          <span className={style.lineVertical}></span>
        </div>
      )}
      {roleType === 'SUPERUSER' && (
        <div className={style.containerRole}>
          <Link to="/superuser" className={style.textRole}>
            Panel Super usuario
          </Link>{' '}
          <span className={style.lineVertical}></span>
        </div>
      )}
      <div className={style.initialsContainer}>
        <span>{`${name.substring(0, 1)}${lastname.substring(0, 1)}`}</span>
      </div>
      <p>
        <span className={style.greeting}>Hola,</span>
        <br />
        {name} {lastname}
      </p>
    </div>
  );
};

export default Avatar;
