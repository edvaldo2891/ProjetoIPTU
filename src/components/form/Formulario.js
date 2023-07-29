import React, { useState } from 'react';

function Formulario() {
  const [tipoFormulario, setTipoFormulario] = useState('simples');

  function handleChange(event) {
    setTipoFormulario(event.target.value);
  }

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            value="simples"
            checked={tipoFormulario === 'simples'}
            onChange={handleChange}
          />
          Formulário simples
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="avancado"
            checked={tipoFormulario === 'avancado'}
            onChange={handleChange}
          />
          Formulário avançado
        </label>
      </div>
      {tipoFormulario === 'simples' ? (
        <div>
          {/* Renderiza o formulário simples */}
        </div>
      ) : (
        <div>
          {/* Renderiza o formulário avançado */}
        </div>
      )}
    </form>
  );
}
export default Formulario
