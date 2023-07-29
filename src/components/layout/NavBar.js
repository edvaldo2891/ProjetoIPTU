import { Link } from "react-router-dom"
import Container from "./Container"
import logo from '../../img/costs_logo.png'
import styles from './NavBar.module.css'

function NavBar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/tabela">Planta Genérica</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/calculo">Cálculo</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/lancamentos">Lançamentos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )

}
export default NavBar