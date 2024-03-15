import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader'
import { UserCard } from '../../components/Cards/UserCard'
import style from './SuperAdministration.module.css'
import { EditUser } from '../../components/Forms/EditUser/EditUser'

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

  const MySwal = withReactContent(Swal)

  const handleEdit = (id)=>{
    console.log("Editar id: "+ id);

    MySwal.fire({
      html: <EditUser/>
    })
  }

  const handleDelete = (id)=>{
    console.log('Eliminar id: ' + id);
    MySwal.fire({
      title: "¿Estás seguro de querer eliminar éste usuario?",
      text: "Una vez eliminar será imposible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5191c1",
      cancelButtonColor: "#99082c",
      confirmButtonText: "Si, eliminalo!"
    })
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

