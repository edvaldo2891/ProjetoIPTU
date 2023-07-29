import React from "react";
import FormDialog from "./FormDialog";
import styles from './Cards.module.css';

function Result(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        cod={props.cod}
        inscricao={props.inscricao}
        proprietario={props.proprietario}
        compromissario={props.compromissario}
        logradouro={props.logradouro}
        numero={props.numero}
        bairro={props.bairro}
        terreno={props.terreno}
        construcao={props.construcao}
        padrao={props.padrao}
        tipo={props.tipo}
        setor={props.setor}
        categoria={props.categoria}
        lote={props.lote}
        quadra={props.quadra}
      />
      <div className={styles.card_container} onClick={() => setOpen(true)}>
        <h1 className={styles.card_title}>{props.inscricao}</h1>
        <p className={styles.card_id}>{props.proprietario}</p>
      </div>
      
    </>
  );
}
export default Result
