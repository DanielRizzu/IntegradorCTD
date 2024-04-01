import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Corregido el nombre del icono

const Modal = ({
  children,
  state,
  changeState,
  title = 'Alerta',
  showHeader = true,
  showOverlay = true,
  padding = true,
}) => {
  return (
    <>
      {state && (
        <div className={`${style.overlay} ${showOverlay ? style.active : ''}`}>
          <div
            className={`${style.modalContainer} ${padding ? '' : style.notPadding}`}
          >
            {showHeader && (
              <div className={style.modalHeader}>
                <h2>{title}</h2>
              </div>
            )}

            <button
              className={style.closeButton}
              onClick={() => changeState(false)}
            >
              <FontAwesomeIcon icon={faXmark} /> {/* Corregido el nombre del icono */}
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.bool.isRequired,
  changeState: PropTypes.func.isRequired,
  title: PropTypes.string,
  showHeader: PropTypes.bool,
  showOverlay: PropTypes.bool,
  padding: PropTypes.bool,
};

export default Modal;
