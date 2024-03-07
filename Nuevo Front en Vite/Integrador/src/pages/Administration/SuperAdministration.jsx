import React, { useEffect, useState } from 'react'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader'
import { UserCard } from '../../components/Cards/UserCard'
import style from './SuperAdministration.module.css'

export const SuperAdministration = () => {

  const [listUsers, setListUsers] = useState([])

  const fetchUsers = async()=>{
    const resp = await fetch('http://localhost:8080/users');
    const data = await resp.json();
    console.log(data);
    setListUsers(data);
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <>
      <SecondaryHeader />
      <div className={style.userListContainer}>
        {listUsers.map((user) => <UserCard key={user.id} id={user.id} username={user.name +' '+ user.lastName} rol={user.role.name}/>)}
      </div>
    </>

  )
}

