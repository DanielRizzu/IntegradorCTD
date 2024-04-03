import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dateRangeContext } from '../../context/DateRangeContext';
import style from './BookingDetail.module.css';
import baseUrl from '../../utils/baseUrl.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../context/UserContext';

const BookingDetail = ({ checkInTime}) => {
  const [product, setProduct] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { rangeDate } = useContext(dateRangeContext);
  const { id } = useParams();
  const { userInfo } = useContext(userContext);
  const navigate = useNavigate();
  // console.log('product', product);
  // console.log('id', id);

  //console.log('checkinTime', checkInTime);

  useEffect(() => {
    fetch(`${baseUrl.url}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  function convertDateFormat(dateString) {
    return dateString.split('/').reverse().join('/');
  }

  const startDate = rangeDate[0]
    ? convertDateFormat(
        new Date(rangeDate[0]).toISOString().slice(0, 10).replace(/-/gi, '/')
      )
    : '__/__/__';
  const endDate = rangeDate[1]
    ? convertDateFormat(
        new Date(rangeDate[1]).toISOString().slice(0, 10).replace(/-/gi, '/')
      )
    : '__/__/__';

  useEffect(() => {
    if (
      rangeDate[0] !== null &&
      rangeDate[1] !== null &&
      // checkInTime !== null   // de momento se anula
      checkInTime == null
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rangeDate, checkInTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Valores de rangeDate[0], rangeDate[1] y checkInTime:', rangeDate[0], rangeDate[1], checkInTime);
    const adjustToUTC = (date) => {
      const offset = date.getTimezoneOffset();
      const adjustedDate = new Date(date.getTime() + (offset * 60 * 1000));
      return adjustedDate;
    };
  
    const formattedCheckInTime = checkInTime !== null ? checkInTime + ':00' : '00:00';
    const formattedArrivalTime = formattedCheckInTime + ':00';
    const checkInDate = rangeDate[0] ? adjustToUTC(rangeDate[0]).toISOString().slice(0, 10) : null;
    const checkOutDate = rangeDate[1] ? adjustToUTC(rangeDate[1]).toISOString().slice(0, 10) : null;
  
    console.log('Información de reserva a enviar:', {
      arrival_time: formattedArrivalTime,
      check_in_date: checkInDate,
      checkout_date: checkOutDate,
      comments: '',
      user: { id: userInfo.id },
      product: { id: Number(id) },
    });
  
    if (
      rangeDate[0] !== null &&
      rangeDate[1] !== null
    ) {
      console.log('Condiciones del if se están cumpliendo');
      const token = JSON.parse(localStorage.getItem('jwt'));
      try {
        const response = await fetch(`${baseUrl.url}/reservations/create`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            arrival_time: formattedArrivalTime,
            check_in_date: checkInDate,
            checkout_date: checkOutDate,
            comments: '',
            user: { id: userInfo.id },
            product: { id: Number(id) },
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('New booking:', data);
          navigate('/booking/success');
        } else {
          console.error('Error al procesar la solicitud');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    }
  };
  

  
  return (
    <>
      {product.length !== 0 && (
        <div className={style.reserveDetailContainer}>
          <h2>Detalle de la reserva</h2>
          {/* Image */}
          <div className={style.cardDetailContainer}>
            <div className={style.productImageContainer}>
              <img
                className={style.productImage}
                src={product.image[0]?.url}
                alt={product.image.title}
              />
            </div>

            <div className={style.cardDetailRigth}>
              {/* title and category */}
              <div className={style.categoryTitleContainer}>
                <p className={style.productCategory}>{product.category.name}</p>
                {/* <FontAwesomeIcon className={style.productStars} icon={faStar} /> */}
                <h3 className={style.productTitle}>{product.name}</h3>
                <FontAwesomeIcon className={style.productStars} icon={faStar} />
              </div>
              {/* Address, city, country*/}
              <div className={style.fullAddress}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {product.address}, {product.city.name},{' '}
                  {product.city.country.name}
                </p>
              </div>
              {/* Check */}
              <div className={style.containerCheck}>
                <div className={style.lineBooking}></div>
                <div className={style.checkDate}>
                  <p>Check in</p>
                  <p>{startDate}</p>
                </div>
                <div className={style.lineBooking}></div>
                <div className={style.checkDate}>
                  <p>Check out</p>
                  <p>{endDate}</p>
                </div>
                <div className={style.lineBooking}></div>
              </div>
              
              <button
                disabled={isDisabled}
                className="btn btn2 w-100"
                onClick={handleSubmit}
              >
                Confirmar reserva
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingDetail;
