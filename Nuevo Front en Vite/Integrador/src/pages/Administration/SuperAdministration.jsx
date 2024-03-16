import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader'
import { UserCard } from '../../components/Cards/UserCard'
import style from './SuperAdministration.module.css'
import { EditUser } from '../../components/Forms/EditUser/EditUser'

export const SuperAdministration = () => {

  const [listUsers, setListUsers] = useState([])
  const [actualizacion, setActualizacion] = useState(0)

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

  const actualizar = (id)=>{
    console.log('Se edito el usuario: ' + id)
    if(actualizacion === id){
      setActualizacion(0)
    }else{
      setActualizacion(id)
    }
    console.log(actualizacion)
  }

  const MySwal = withReactContent(Swal)

  const handleEdit = (user)=>{
    console.log("Editar id: "+ user.id);

    MySwal.fire({
      html: <EditUser userData={user} refresh={actualizar}/>,
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  const handleDelete = (user)=>{
    console.log('Eliminar id: ' + user.id);
    MySwal.fire({
      title: "¿Estás seguro de querer eliminar éste usuario?",
      text: "¡Una vez eliminado será imposible revertir los cambios!",
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
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
                />)}
                
      </div>
    </>

  )
}

