import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Tabela from './components/pages/Tabela';
import Calculo from './components/pages/Calculo';
import Projects from './components/pages/Projects';
import ProjectCard from './components/project/ProjectCard';
import Formulario from './components/form/Formulario';
import Lancamentos from './components/pages/Lancamentos';
import FormResult from './components/pages/FormResult';



function App() {
  
  return (
     <Router>
     <NavBar />
     <Switch>
       <Container customClass="min-height">
           <Route exact path="/">
             <Home />
           </Route>
           <Route path="/tabela">
           <Tabela />
           </Route>
           <Route path="/calculo">
             <Calculo />
           </Route>
           <Route path="/contact">
             <Contact />
           </Route>
           <Route path="/projects">
             <Projects />
           </Route>
           <Route path="/projectCard">
             <ProjectCard />
           </Route>
           <Route path="/formulario">
             <Formulario />
           </Route>
           <Route path="/lancamentos">
             <Lancamentos />
           </Route>
           <Route path="/FormResult">
             <FormResult />
           </Route>
           <Route path="/project/:id">
             <Project />
           </Route>
       </Container>
     </Switch>
     <Footer />
   </Router>
  );
}
export default App
