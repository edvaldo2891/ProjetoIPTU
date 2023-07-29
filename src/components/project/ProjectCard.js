import { useLocation } from 'react-router-dom';
import LinkButton from '../layout/LinkButton';
import styles from './ProjectCard.module.css'

function ProjectCard(){

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const venalTerreno = parseFloat(searchParams.get('venalTerreno')) || 0;
  const venalConstrucao = parseFloat(searchParams.get('venalConstrucao')) || 0;
  const venalTotal = parseFloat(searchParams.get('venalTotal')) || 0;
  const exercicio = parseInt(searchParams.get('exercicio')) || 0;

  return (
    <div className={styles.project_card}>
      {venalConstrucao === 0 ? (
        <div>
          {/* Renderiza o o resultado somente para o terreno */}
          <p>Simulação de valor venal para imóvel sem bemfeitorias no exercicio de {exercicio}.</p>
          <h5>Valor venal do terreno: {venalTerreno.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
          <h5>Valor venal total: {venalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>    
        </div>
        ) : (
        <div>
          {/* Renderiza o formulário avançado */}
          <p>Simulação de valor venal para imóvel com bemfeitorias no exercicio de {exercicio}.</p>
          <h5>Valor venal do terreno: {venalTerreno.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
          <h5>Valor venal da construção: {venalConstrucao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
          <h5>Valor venal total: {venalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>    
        </div>
      )}
      <LinkButton to="/calculo" text="Voltar" />
    </div>
  );
}

export default ProjectCard;
