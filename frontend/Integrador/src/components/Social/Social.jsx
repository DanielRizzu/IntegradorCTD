import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faSnapchat,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import style from './Social.module.css';

const Social = ({ activeWidth }) => {
  return (
    <div
      className={`${style.social} ${activeWidth < 768 ? style.socialMenu : ''}`}
    >
      <a href="#a">
        <FontAwesomeIcon icon={faSnapchat} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
  );
};

export default Social;
