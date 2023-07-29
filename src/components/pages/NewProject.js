import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const history = useHistory()
    
   

    return(
        <div className={styles.newproject_container}>
            <h1 >Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit="" btnText="Criar Project"/>
        </div>
    )   

}
export default NewProject