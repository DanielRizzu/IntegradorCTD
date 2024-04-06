import React from 'react'
import style from './UserCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

            {/* <button className={style.btnCardUser} onClick={handleEdit}>
              <img className={style.imgBtnCardUser}
                // src="src/icons/RiEditCircleFill.png"
                src="https://ibb.co/Pcm6v7b"
                alt="edit button" />
            </button>

            <button className={style.btnCardUser} onClick={handleDelete}>
              <img className={style.imgBtnCardUser} 
                //src="src/icons/PepiconsPopTrashCircleFilled.png" 
                src='https://flyclipart.com/thumb2/bin-delete-garbage-recycle-remove-trash-icon-695067.png'
                alt="delete button" />
            </button> */}
        <button className={style.btnCardUser} onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} className={style.iconBtnCardUser} />
        </button>
        <button className={style.btnCardUser} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} className={style.iconBtnCardUser} />
        </button>
        
        </div>

    </div>
  )
}