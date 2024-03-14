import React from 'react'
import style from '../UserCard.module.css'

export const ProductCard = ( { id, productname, onDelete } ) => {
  return (
    <div className={style.cardContainer} id={id}>
        <p className={style.cardUserP}>{productname}</p>
        <div className={style.btnCardUserContainer}>
            <button className={style.btnCardUser}><img className={style.imgBtnCardUser} src="src/icons/RiEditCircleFill.png" alt="edit button" /></button>
            <button className={style.btnCardUser} onClick={onDelete}> {/* Agregar onClick para invocar la función de eliminación */}
          <img className={style.imgBtnCardUser} src="src/icons/PepiconsPopTrashCircleFilled.png" alt="delete button" />
        </button>
        </div>
    </div>
  )
}
