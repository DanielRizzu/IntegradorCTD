import React, { useEffect, useState } from 'react'
import style from '../Form.module.css'
import styleInput from '../Input/InputForm.module.css'
import baseUrl from '../../../utils/baseUrl.json'

export const EditUser = ({ userData }) => {
    const [data, setData] = useState(userData)
    console.log(data)
    

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name+':', value);
        let modified = {...data, [name]: value};
        setData(modified)
        console.log(data)
    }

    const handleRole = (e)=>{
        const roleInfo = e.target.value;
        console.log('id del rol: ' + roleInfo);
        console.log(typeof(roleInfo));
        const userInfo = data;

        if (roleInfo === '1'){
            console.log('Modificar rol a USER')
            userInfo.role = {id: 1, name: 'USER'}
        }else{
            console.log('Modificar rol a ADMIN')
            userInfo.role = {id: 2, name: 'ADMIN'}
        }

        setData(userInfo)
        console.log('DATOS ACTUALIZADOS')
        console.log(data)
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        const closeButton = document.querySelector('button.swal2-close');
        const jwt = JSON.stringify(localStorage.getItem('jwt'))

        console.log(data);
        console.log('ESTE ES EL TOKEN:')
        console.log(jwt)

        fetch("http://localhost:8080/users/update",{
            method: 'PUT',
            headers: {
                authorization:jwt,
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(data)

        }).then(response =>console.log(response))

        closeButton.click();
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <label className={styleInput.labelEdit} htmlFor="name">Nombre:</label>
        <input className={styleInput.inputEdit}type="text" name='name' value={data.name} onChange={handleChange}/>

        <label className={styleInput.labelEdit} htmlFor="userLastName">Apellido:</label>
        <input className={styleInput.inputEdit}type="text" name='userLastName'value={data.lastName} onChange={handleChange}/>

        <label className={styleInput.labelEdit} htmlFor="email">Email:</label>
        <input className={styleInput.inputEdit}type="text" name='email'value={data.email} onChange={handleChange}/>

        <label className={styleInput.labelEdit} htmlFor="role">Rol:</label>
        <select className={styleInput.selectInput} name="role" onChange={handleRole}>
            <option value='1' selected={data.role.id === 1}>USER</option>
            <option value='2' selected={data.role.id === 2}>ADMIN</option>
        </select>

        <label className={styleInput.labelEdit} htmlFor="enabled">Estado:</label>
        <select className={styleInput.selectInput} name="enabled" onChange={handleChange}>
            <option value="true" selected={data.enabled === true} >Habilitado</option>
            <option value="false" selected={data.enabled === false} >Deshabilitado</option>
        </select>
        <button className='btn btn2'>Modificar usuario</button>
    </form>
  )
}
