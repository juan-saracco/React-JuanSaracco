import React from 'react'
import styles from './itemListContainer.module.css'

const ItemListContainer = (props) => {
  return (
    <div>
        <h1 className={styles.titulo}>{props.titulo}</h1>
        <h2 className={styles.subtitulo}>{props.subitutlo}</h2>
    </div>
  )
}

export default ItemListContainer