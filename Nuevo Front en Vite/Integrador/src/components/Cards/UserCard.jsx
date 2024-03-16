import React from 'react'
import style from './UserCard.module.css'

export const UserCard = ( { id, user,onEdit, onDelete } ) => {
  
  const userInfo = user.id
  const handleEdit= ()=>{
    onEdit(user)
  }

  const handleDelete= ()=>{
    onDelete(user)
  }

  return (
    <div className={style.cardContainer} id={id}>

        <p className={style.cardUserP}>{user.name + ' ' + user.lastName}</p>
        <p className={style.cardUserRol}>{user.role.name}</p>

        <div className={style.btnCardUserContainer}>

            <button className={style.btnCardUser} onClick={handleEdit}>
              <img className={style.imgBtnCardUser}
                src="src/icons/RiEditCircleFill.png"
                alt="edit button" />
            </button>

            <button className={style.btnCardUser} onClick={handleDelete}>
              <img className={style.imgBtnCardUser} 
                src="src/icons/PepiconsPopTrashCircleFilled.png" 
                alt="delete button" />
            </button>
        
        </div>

    </div>
  )
}
