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
  const [searchTerm, setSearchTerm] = useState('');
  const jwt = JSON.parse(localStorage.getItem('jwt'))

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

  const actualizar = (id)=>{
    console.log('Se edito el usuario: ' + id)
    if(actualizacion === id){
      setActualizacion(0)
    }else{
      setActualizacion(id)
    }
    console.log(actualizacion)
  }


  const handleEdit = (user)=>{
    console.log("Editar id: "+ user.id);

    MySwal.fire({
      html: <EditUser userData={user} refresh={fetchUsers}/>,
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
      confirmButtonText: "Si, eliminalo!",
    }).then(result =>{
      if(result.isConfirmed){
        fetchDelete(user.id)
      }
       

    })
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = listUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchDelete = (id)=>{
    fetch(`http://localhost:8080/users/delete/${id}`,{
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
              }
        }).then(res =>{
          if(res.ok){
              MySwal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Usuario eliminado",
                  showConfirmButton: false,
                  timer: 2000
              })
              setTimeout(()=>{
                  fetchUsers()
              },[300])
              console.log(res)
          }else{
              MySwal.fire({
                  position: "top-end",
                  icon: "error",
                  title: "Ocurrio un problema al intentar eliminar el usuario",
                  showConfirmButton: false,
                  timer: 2000
              })
              console.log(res)
          }
      })
  }

  
  return (
    <>
      <SecondaryHeader />
      <div className={style.userListContainer}>
      <div className={style.searchContainer}>
          <input
            type="text"
            className={style.searchInput}
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

