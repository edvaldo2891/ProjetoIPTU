import React from 'react';
import queryString from 'query-string';

function ConfirmationPage(props) {
  const { name, email, message } = queryString.parse(props.location.search);

  return (
    <div>
        <h1>Obrigado por entrar em contato, {name}!</h1>
        <p>Seu e-mail ({email}) foi enviado com sucesso com a seguinte mensagem:</p>
        </div>   
    )
}
export default ConfirmationPage