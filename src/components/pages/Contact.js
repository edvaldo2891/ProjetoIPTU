import React, { useState } from 'react';
import styles from './Contact.module.css';
import SubmitButton from '../form/SubmitButton';

function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
  };

  return (
    <div className={styles.contact_form}>
      <h3>Envie suas sugestões ou reclamações e teremos prazer em ajudar!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            autoComplete="name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </label>
        <label htmlFor="mensagem">
          Mensagem:
          <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            autoComplete="off"
          />
        </label>
        <div>
          <SubmitButton type="button" text="Enviar" /*onClick={""}*/ />
        </div>
      </form>
    </div>
  );
}

export default Contact;
