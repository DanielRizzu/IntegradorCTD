import React, { useEffect, useState } from 'react'
import style from '../Form.module.css'
import styleInput from '../Input/InputForm.module.css'

export const EditUser = ({ userData }) => {
    console.log(userData)

    const [data, setData] = useState({})
    useEffect(()=>{
        setData(userData)
    },[])

  return (
    <form className={style.form}>
        <label className={styleInput.labelEdit} htmlFor="name">Nombre:</label>
        <input className={styleInput.inputEdit}type="text" name='name' value={data.userName}/>
        <label className={styleInput.labelEdit} htmlFor="lasName">Apellido:</label>
        <input className={styleInput.inputEdit}type="text" name='lastName'value={data.userLastName}/>
        <label className={styleInput.labelEdit} htmlFor="enabled">Rol:</label>
        <select className={styleInput.selectInput} name="enabled" >
            <option value="USER" selected={data.rol === 'USER'}>USER</option>
            <option value="ADMIN" selected={data.rol === 'ADMIN'}>ADMIN</option>
        </select>
        <label className={styleInput.labelEdit} htmlFor="enabled">Estado:</label>
        <select className={styleInput.selectInput} name="enabled" >
            <option value="true" selected={data.enabled === true} >Habilitado</option>
            <option value="false" selected={data.enabled === false} >Deshabilitado</option>
        </select>
    </form>
  )
}
