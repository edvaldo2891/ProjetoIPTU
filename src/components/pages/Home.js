import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'


function Home(){

    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>IPTU Calc</span></h1>
            <p>Simule valores do seu imposto predial e territorial!</p>
            <LinkButton to="/calculo" text="Começar" />
            <img src={savings} alt="IPTU Calc" />
        </section>
    )   

}
export default Home