import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../components/ProductHeader/ProductHeader.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography  } from '@mui/material';
import baseUrl from '../../../utils/baseUrl.json'

const WhiteTextButton = styled(Button)({
  color: 'white',
  '&:hover': {
    color: 'orange',
  },
});

const BookingReservation = ({ onCreateProductClick, onDeleteProductClick }) => {
  // Define un estado para almacenar las reservas
  const [reservations, setReservations] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const userId = userData.id;

  // Función para obtener las reservas del usuario desde el backend
  const fetchReservations = async () => {
    try {
      // Obtener el token del localStorage
      const response = await fetch(`${baseUrl.url}/reservations/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReservations(data); // Actualiza el estado con las reservas obtenidas
      } else {
        console.error('Error al obtener las reservas');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  // Llama a fetchReservations al cargar el componente
  useEffect(() => {
    fetchReservations();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div>
      <section className={style.header}>
        <div className={style.headerLeft}>
          <h1>Reservas</h1>
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
        </Box>
        <div className={style.headerRight}>
          <Link to="/">Inicio</Link>
        </div>
      </section>
      <div>
        {reservations.length === 0 ? (
          <Typography variant="body1" color="textSecondary" align="center" sx={{ marginTop: '10px'}}>
    La cuenta no posee reservas asignadas en este momento.
  </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID de Reserva</TableCell>
                  <TableCell>Fecha de Check-in</TableCell>
                  <TableCell>Fecha de Check-out</TableCell>
                  <TableCell>Paquete de reserva</TableCell>
                  {/* Agrega más columnas según la información que desees mostrar */}
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations.map(reservation => (
                  <TableRow key={reservation.id}>
                    <TableCell>{reservation.id}</TableCell>
                    <TableCell>{formatDate(reservation.check_in_date)}</TableCell>
                    <TableCell>{formatDate(reservation.checkout_date)}</TableCell>
                    <TableCell>
                      {/* Botón de enlace que redirige a la página del producto */}
                      <Link to={`/products/${reservation.product.id}`}>
                        Ver su paquete elegido
                      </Link>
                    </TableCell>
                    {/* Agrega más celdas según la información que desees mostrar */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};
  
  export default BookingReservation;