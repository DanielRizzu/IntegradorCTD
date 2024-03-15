import React from 'react'
import style from '../Form.module.css'

export const EditUser = () => {
  return (
    <form className={style.form}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name'/>
        <label htmlFor="lasName">Apellido:</label>
        <input type="text" name='lastName'/>
        <label htmlFor="enabled">Rol:</label>
        <select name="enabled">
            <option value="USER">USER</option>
            <option value="ADMIN" selected>ADMIN</option>
        </select>
        <label htmlFor="enabled">Estado:</label>
        <select name="enabled">
            <option value="true">Habilitado</option>
            <option value="false" selected>Deshabilitado</option>
        </select>
    </form>
  )
}
