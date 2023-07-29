import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import styles from './Tabela.module.css'
import Axios from "axios";

function Tabela(){

const [filtro, setFiltro] = useState('todos');
const [todos,setTodos] = useState([])
const [removeLoading, setRemoveLoading] = useState(false)

useEffect(() => {
  setTimeout(
    () => {
      Axios.get("http://localhost:3001/getPlantaGenerica").then((response) => {
        setTodos(response.data);
        setRemoveLoading(true)
      });
  },300)
}, []);

  const itensFiltrados = filtro === 'todos' ? todos : todos.filter((todos) => todos.exercicio === parseInt(filtro));
  itensFiltrados.sort((a, b) => b.exercicio - a.exercicio);

  function formatarMoeda(valor) {
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatoMoeda.format(valor);
  }

return(
    <div className={styles.geral_container}>
          <p >Nesta página você pode pesquisar a Planta Genérica de valores desde o exercício de 1.996.</p>
          <div className={styles.select_container}>
            <label className={styles.separador}><b>Selecione o exercício: </b></label>
            <select className={styles.select_arrow} value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="todos">Todos</option>
                {todos.map(todos => (
                  <option key={todos.cod} value={todos.exercicio}>
                    {todos.exercicio}
                  </option>
                ))}
            </select>
          </div>
          <ul>
            {itensFiltrados.map((todos) => (
              <div className={styles.separador} key={todos.cod}>
                <h3 className="alinhar"> Planta Genérica de valores de {todos.exercicio}</h3>
                <table>
                    <thead>
                      <tr>
                        <th colSpan="2">PADRÃO E TIPO</th>
                        <th colSpan="5">SETOR</th>
                      </tr>
                      <tr>
                        <th>P</th>
                        <th>T</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td className="alinhar">1</td>
                          <td className="alinhar">0</td>
                          <td>{formatarMoeda(todos.a_1_0)}</td>
                          <td>{formatarMoeda(todos.b_1_0)}</td>
                          <td>{formatarMoeda(todos.c_1_0)}</td>
                          <td>{formatarMoeda(todos.d_1_0)}</td>
                          <td> {formatarMoeda(todos.e_1_0)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">1</td>
                          <td className="alinhar">1</td>
                          <td> {formatarMoeda(todos.a_1_1)}</td>
                          <td> {formatarMoeda(todos.b_1_1)}</td>
                          <td> {formatarMoeda(todos.c_1_1)}</td>
                          <td> {formatarMoeda(todos.d_1_1)}</td>
                          <td> {formatarMoeda(todos.e_1_1)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">1</td>
                          <td className="alinhar">2</td>
                          <td> {formatarMoeda(todos.a_1_2)}</td>
                          <td> {formatarMoeda(todos.b_1_2)}</td>
                          <td> {formatarMoeda(todos.c_1_2)}</td>
                          <td> {formatarMoeda(todos.d_1_2)}</td>
                          <td> {formatarMoeda(todos.e_1_2)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">1</td>
                          <td className="alinhar">3</td>
                          <td> {formatarMoeda(todos.a_1_3)}</td>
                          <td> {formatarMoeda(todos.b_1_3)}</td>
                          <td> {formatarMoeda(todos.c_1_3)}</td>
                          <td> {formatarMoeda(todos.d_1_3)}</td>
                          <td> {formatarMoeda(todos.e_1_3)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">2</td>
                          <td className="alinhar">0</td>
                          <td> {formatarMoeda(todos.a_2_0)}</td>
                          <td> {formatarMoeda(todos.b_2_0)}</td>
                          <td> {formatarMoeda(todos.c_2_0)}</td>
                          <td> {formatarMoeda(todos.d_2_0)}</td>
                          <td> {formatarMoeda(todos.e_2_0)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">2</td>
                          <td className="alinhar">1</td>
                          <td> {formatarMoeda(todos.a_2_1)}</td>
                          <td> {formatarMoeda(todos.b_2_1)}</td>
                          <td> {formatarMoeda(todos.c_2_1)}</td>
                          <td> {formatarMoeda(todos.d_2_1)}</td>
                          <td> {formatarMoeda(todos.e_2_1)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">2</td>
                          <td className="alinhar">2</td>
                          <td> {formatarMoeda(todos.a_2_2)}</td>
                          <td> {formatarMoeda(todos.b_2_2)}</td>
                          <td> {formatarMoeda(todos.c_2_2)}</td>
                          <td> {formatarMoeda(todos.d_2_2)}</td>
                          <td> {formatarMoeda(todos.e_2_2)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">2</td>
                          <td className="alinhar">3</td>
                          <td> {formatarMoeda(todos.a_2_3)}</td>
                          <td> {formatarMoeda(todos.b_2_3)}</td>
                          <td> {formatarMoeda(todos.c_2_3)}</td>
                          <td> {formatarMoeda(todos.d_2_3)}</td>
                          <td> {formatarMoeda(todos.e_2_3)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">3</td>
                          <td className="alinhar">0</td>
                          <td> {formatarMoeda(todos.a_3_0)}</td>
                          <td> {formatarMoeda(todos.b_3_0)}</td>
                          <td> {formatarMoeda(todos.c_3_0)}</td>
                          <td> {formatarMoeda(todos.d_3_0)}</td>
                          <td> {formatarMoeda(todos.e_3_0)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">3</td>
                          <td className="alinhar">1</td>
                          <td> {formatarMoeda(todos.a_3_1)}</td>
                          <td> {formatarMoeda(todos.b_3_1)}</td>
                          <td> {formatarMoeda(todos.c_3_1)}</td>
                          <td> {formatarMoeda(todos.d_3_1)}</td>
                          <td> {formatarMoeda(todos.e_3_1)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">3</td>
                          <td className="alinhar">2</td>
                          <td> {formatarMoeda(todos.a_3_2)}</td>
                          <td> {formatarMoeda(todos.b_3_2)}</td>
                          <td> {formatarMoeda(todos.c_3_2)}</td>
                          <td> {formatarMoeda(todos.d_3_2)}</td>
                          <td> {formatarMoeda(todos.e_3_2)}</td>
                      </tr>
                      <tr>
                          <td className="alinhar">3</td>
                          <td className="alinhar"
                          >3</td>
                          <td> {formatarMoeda(todos.a_3_3)}</td>
                          <td> {formatarMoeda(todos.b_3_3)}</td>
                          <td> {formatarMoeda(todos.c_3_3)}</td>
                          <td> {formatarMoeda(todos.d_3_3)}</td>
                          <td> {formatarMoeda(todos.e_3_3)}</td>
                      </tr>
                      <tr>
                          <th colSpan="2">TERRENO</th>
                          <td> {formatarMoeda(todos.a_terreno)}</td>
                          <td> {formatarMoeda(todos.b_terreno)}</td>
                          <td> {formatarMoeda(todos.c_terreno)}</td>
                          <td> {formatarMoeda(todos.d_terreno)}</td>
                          <td> {formatarMoeda(todos.e_terreno)}</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            ))}
          </ul> 
          {!removeLoading && <Loading />}
             {removeLoading && todos.length === 0 && (
                <p>Não há tabelas cadastradas!</p>
          )}      
    </div>
  )

}
export default Tabela