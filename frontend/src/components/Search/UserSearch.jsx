import React from 'react'
import style from './UserSearch.module.css'

export const UserSearch = () => {
    return (
        <div className={style.user-search-container}>
            <input type='text'/>
            <button>Crear nuevo usuario</button>
        </div>
    
    )
}
