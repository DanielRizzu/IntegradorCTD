import React from 'react'
import style from './UserCard.module.css'

export const UserCard = ( { id, userName, userLastName, rol, enabled,onEdit, onDelete } ) => {

  const userInfo = {
    id,
    userName,
    userLastName,
    rol,
    enabled
  }
  const handleEdit= ()=>{
    onEdit(userInfo)
  }

  const handleDelete= ()=>{
    
    onDelete(userInfo)
  }

  return (
    <div className={style.cardContainer} id={id}>

        <p className={style.cardUserP}>{userName + ' ' + userLastName}</p>
        <p className={style.cardUserRol}>{rol}</p>

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
