import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

function Projects(){
    
    const [projectMessage, setProjectMessage] = useState('')
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projects,setProjects] = useState([])
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
       setTimeout(
        () => {
            fetch('http://localhost:5000/todos/',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) =>{
                console.log(data)//ver dados chegando
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        },300)
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!!')
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.projects_container}>
            <div className={styles.title_container}>
                <h1>Simulação do cálculo do IPTU</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message 
            type="sucess" msg={message} />}
            {projectMessage && <Message type="sucess" msg={projectMessage} />}
            <Container customClass="start">
                <ProjectCard />
             {!removeLoading && <Loading />}
             {removeLoading && projects.length === 0 && (
                <p>Não há projetos cadastrados!</p>
            )}
            </Container>
        </div>
        
    )
}
export default Projects