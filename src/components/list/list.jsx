import React from 'react' 
import styles from './list.module.css' // Importamos el archivo css
import CartWidget from '../cartWidget/cartWidget' // Importamos el componente cartWidget

const List = () => {
  const click = () => {
    alert("hiciste click")}
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <a href="#" onClick={click} className={styles.anchor}><li className={styles.item}>Proteina</li></a>
        <a href="#" onClick={click} className={styles.anchor}><li className={styles.item}>Creatina</li></a>
        <a href="#" onClick={click} className={styles.anchor}><li className={styles.item}>Pre entreno</li></a>
      </ul>
      <CartWidget />
    </div>
  )
}

export default List