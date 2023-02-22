import styles from './navbar.module.css' // Importamos el archivo css
import List from '../list/list'// Importamos el componente list

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <List />

    </nav>
  )
}

export default Navbar