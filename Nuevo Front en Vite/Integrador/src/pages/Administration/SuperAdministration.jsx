import React, { useEffect, useState } from 'react'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader'
import { UserCard } from '../../components/Cards/UserCard'
import style from './SuperAdministration.module.css'

export const SuperAdministration = () => {

  const [listUsers, setListUsers] = useState([])

  const fetchUsers = async()=>{
    const resp = await fetch('http://localhost:8080/users');
    const data = await resp.json();
    data.shift() //Para filtrar al usuario "superuser" que siempre ocupará la prosicion 0 del array obtenido de la base de datos.
    console.log(data);
    setListUsers(data);
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  const handleEdit = (id)=>{
    console.log("Editar id: "+ id);
  }

  const handleDelete = (id)=>{
    console.log('Eliminar id: ' + id);
  }


  return (
    <>
      <SecondaryHeader />
      <div className={style.userListContainer}>
        {listUsers.map(user => 
              <UserCard 
                key={user.id} 
                id={user.id} 
                username={user.name +' '+ user.lastName} 
                rol={user.role.name}
                onEdit={handleEdit}
                onDelete={handleDelete}
                />)}
                
      </div>
    </>

  )
}

