import React, { useEffect, useState } from 'react'
import style from '../Form.module.css'
import styleInput from '../Input/InputForm.module.css'

export const EditUser = ({ userData }) => {
    const [data, setData] = useState(userData)
    

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name+':', value);
        const modified = {...data, [name]: value};
        setData(modified)
        console.log(data)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        const closeButton = document.querySelector('.swal2-close')
        console.log(data)
        closeButton.click()
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <label className={styleInput.labelEdit} htmlFor="userName">Nombre:</label>
        <input className={styleInput.inputEdit}type="text" name='userName' value={data.userName} onChange={handleChange}/>

        <label className={styleInput.labelEdit} htmlFor="userLastName">Apellido:</label>
        <input className={styleInput.inputEdit}type="text" name='userLastName'value={data.userLastName} onChange={handleChange}/>

        <label className={styleInput.labelEdit} htmlFor="rol">Rol:</label>
        <select className={styleInput.selectInput} name="rol" onChange={handleChange}>
            <option value="USER" selected={data.rol === 'USER'}>USER</option>
            <option value="ADMIN" selected={data.rol === 'ADMIN'}>ADMIN</option>
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
