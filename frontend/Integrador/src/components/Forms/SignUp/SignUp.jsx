import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';
import baseUrl from '../../../utils/baseUrl.json';

import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';
import Spinner from '../../Spinner/Spinner';
import { Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";


const SignUp = () => {
  const [name, setName] = useState({ value: '', valid: null });
  const [lastName, setLastName] = useState({ value: '', valid: null });
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });
  const [password2, setPassword2] = useState({ value: '', valid: null });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isFormValid, setIsFormValid] = useState(null);
  const [msgError, setMsgError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false); // 1. Agregar estado para controlar la carga del botón


  const { loginUser } = useContext(userContext);

  const navigate = useNavigate();

  const regularExpressions = {
    nameAndLastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{7,25}$/, // 7 to 25 digits.
  };

  const validateRepeatPassword = () => {
    if (password.value.length > 0) {
      if (password.value !== password2.value) {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else if (password.valid === 'false') {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'true' };
        });
      }
    } else if (password.value === '') {
      setPassword2((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
  };

  const validateInputs = () => {
    if (name.value === '') {
      setName((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (lastName.value === '') {
      setLastName((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (email.value === '') {
      setEmail((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (password.value === '') {
      setPassword((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (password2.value === '') {
      setPassword2((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
  };

  const validateForm = () => {
    return (
      name.valid === 'true' &&
      lastName.valid === 'true' &&
      email.valid === 'true' &&
      password.valid === 'true' &&
      password2.valid === 'true'
    );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateInputs();
    setIsFormValid(true);
  
    if (validateForm()) {
      setLoadingButton(true);
  
      const data = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        enabled: true,
        city: { id: 1 },
        role: { id: 1 },
      };
  
      try {
        const response = await fetch(`${baseUrl.url}/users/create`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        try {
          let responseData = await response.json();
          if (response.ok) {
            try {
              const loginResponse = await fetch(`${baseUrl.url}/authenticate`, {
                method: 'POST',
                body: JSON.stringify({
                  email: email.value,
                  password: password.value,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              
              const loginData = await loginResponse.json();
          
              if (loginResponse.ok) {
                setIsLoading(true);
                loginUser({ ...loginData, redirect: false });
                setOpenSnackbar(true);
                setTimeout(() => {
                  navigate('/');
                }, 3000);
              } else {
                setIsFormValid(false);
                setIsLoading(false);
                setMsgError(
                  'La cuenta se ha creado exitosamente, pero hay un error al intentar loguearse.'
                );
                setOpenSnackbar(true);
              }
              setIsLoading(false);
              setTimeout(() => {
                setLoadingButton(false);
              }, 100);
            } catch (error) {
              console.error('Error al iniciar sesión:', error);
              setIsFormValid(false);
              setIsLoading(false);
              setMsgError('La cuenta se ha creado exitosamente, pero hay un error al intentar loguearse.');
              setOpenSnackbar(true);
            }
          } else {
            console.error('Error al registrar:', responseData.message);
            setOpenSnackbar(true);
            setIsFormValid(false);
          }   
        } catch (error) {
          console.error('Error al parsear JSON:', error);
        }
      } catch (error) {
        console.error('Error al registrar:', error);
        setOpenSnackbar(true);
        setIsFormValid(false);
      }
    }
  }

  return (
    <div className={style.containerForms}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          className={style.form}
          onSubmit={handleSubmit}
          onChange={validateForm}
        >
          <h1 className={style.titleForm}>Crear cuenta</h1>
          <div>
            <div className={style.inputGroup}>
              <Input
                state={name}
                changeState={setName}
                label="Nombre"
                type="text"
                id="name"
                name="name"
                error="Sólo están permitidas letras y espacios"
                regex={regularExpressions.nameAndLastName}
              />
              <Input
                state={lastName}
                changeState={setLastName}
                label="Apellido"
                type="text"
                id="lastName"
                name="lastName"
                error="Sólo están permitidas letras y espacios"
                regex={regularExpressions.nameAndLastName}
              />
            </div>

            <Input
              state={email}
              changeState={setEmail}
              label="Correo electrónico"
              type="email"
              id="email"
              name="email"
              error="Correo electrónico incorrecto"
              regex={regularExpressions.email}
            />
            <Input
              state={password}
              changeState={setPassword}
              label="Contraseña"
              type="password"
              id="password"
              name="password"
              error="La contraseña debe tener entre 7 y 25 caracteres"
              regex={regularExpressions.password}
            />
            <Input
              state={password2}
              changeState={setPassword2}
              label="Confirmar contraseña"
              type="password"
              id="password2"
              name="password2"
              error="Las contraseñas deben ser iguales"
              // regex={regularExpressions.password}
              executeFunction={validateRepeatPassword}
            />
            {isFormValid === false && (
              <p className={style.msgErrorInvalidForm}>
                {msgError
                  ? msgError
                  : 'Por favor vuelva a intentarlo, algunos de los datos ingresados no son correctos.'}
              </p>
            )}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 5 }}
                disabled={loadingButton} // 3. Deshabilitar el botón mientras se carga
>
  {loadingButton ? (
    <CircularProgress size={24} color="primary" />  ) : ('Crear Cuenta')}
              </Button>

            {/*<button type="submit" className={`btn btn2 ${style.submitButton}`}>
              Crear cuenta
            </button>*/}
            <p className={style.linkContainer}>
              ¿Ya tienes una cuenta?{' '}
              <Link className={style.linkAction} to="/login">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={isFormValid ? 'success' : 'error'}
        >
          {isFormValid
            ? '¡Registrado con éxito! Redireccionando a inicio de sesión...'
            : 'Error: Por favor, verifica los campos e intenta nuevamente.'}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SignUp;
