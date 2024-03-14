import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../ProductHeader/ProductHeader.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const WhiteTextButton = styled(Button)({
  color: 'white',
  '&:hover': {
    color: 'orange',
  },
});

//aca ingresas al panel de administracion para cargar algo (prodcuto)
const SecondaryHeader = ({ onCreateProductClick, onDeleteProductClick }) => {
  return (
    <section className={style.header}>
      <div className={style.headerLeft}>
        <h1>Panel Administración</h1>
      </div>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
      <WhiteTextButton onClick={onCreateProductClick}>Crear Paquete</WhiteTextButton>
          <WhiteTextButton onClick={onDeleteProductClick}>Eliminar Paquete</WhiteTextButton>
      </ButtonGroup>
    </Box> 
      <div className={style.headerRight}>
        <Link to="/">
          Inicio
        </Link>
      </div>
    </section>
  );
};

export default SecondaryHeader;
