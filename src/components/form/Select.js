
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Select.module.css'
import SubmitButton from './SubmitButton';
import Axios from "axios";

function Select(){
   
    const history = useHistory()
    let [terreno, setTerreno] = useState(0.0);
    let [construcao, setConstrucao] = useState(0.0);
    let [venalTerreno, setVenalTerreno] = useState(0.0);
    let [venalConstrucao, setVenalConstrucao] = useState(0.0);
    let [venalTotal, setVenalTotal] = useState(0.0);

    const [selectTipo, setSelectTipo] = useState('');
    const [selectPadrao, setSelectPadrao] = useState('');
    const [selectSetor, setSelectSetor] = useState('');
    const [selectCategoria, setSelectCategoria] = useState('');
    const [selectExercicio, setSelectExercicio] = useState('');

    const[todos,setTodos] = useState([])
   
    
    useEffect(() => {
        setTimeout(
          () => {
            Axios.get("http://localhost:3001/getPlantaGenerica").then((response) => {
              setTodos(response.data);
            });
        },300)
      }, []);

    todos.sort((a, b) => b.exercicio - a.exercicio);

    const padrao = [
        { valor: 'Alvenaria', label: 'alvenaria' },
        { valor: 'Mista', label: 'mista' },
        { valor: 'Madeira', label: 'madeira' },
      ];

    const tipo = [
        { valor: 'Luxo', label: 'luxo' },
        { valor: 'Primeira', label: 'primeira' },
        { valor: 'Segunda', label: 'segunda' },
        { valor: 'Terceira', label: 'terceira' },
    ];

    const setor = [
        { valor: 'Setor A', label: 'a' },
        { valor: 'Setor B', label: 'b' },
        { valor: 'Setor C', label: 'c' },
        { valor: 'Setor D', label: 'd' },
        { valor: 'Setor E', label: 'e' },
    ];

    const categoria = [
        { valor: 'Residencial', label: 'residencial' },
        { valor: 'Comercial', label: 'comercial' },
    ];


    const handleSelectTipo = (event) => {
        setSelectTipo(event.target.options[event.target.selectedIndex].text);
    }

    const handleSelectPadrao = (event) => {
        setSelectPadrao(event.target.options[event.target.selectedIndex].text);
    }

    const handleSelectSetor = (event) => {
        setSelectSetor(event.target.options[event.target.selectedIndex].text);
    }

    const handleSelectCategoria = (event) => {
        setSelectCategoria(event.target.options[event.target.selectedIndex].text);
    }

    const handleSelectExercicio = (event) => {
        setSelectExercicio(event.target.options[event.target.selectedIndex].text);
    }

    const handleTerrenoChange = (event) => {
        setTerreno(event.target.value)
    }
    
    const handleConstrucaoChange = (event) =>{
        setConstrucao(event.target.value)
    }

    function calcularVenal() {
        todos.map((option) => {
            if (option.exercicio === parseInt(selectExercicio)) {
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.a_1_0
                    venalTerreno = terreno * option.a_terreno
                    console.log(option.a_1_0)
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_1_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_1_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_1_3
                    venalTerreno = terreno * option.a_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_2_0
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_2_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_2_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_2_3
                    venalTerreno = terreno * option.a_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_3_0
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_3_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_3_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.a_3_3
                    venalTerreno = terreno * option.a_terreno
                }
                else if(selectSetor ==='Setor A' && construcao ===0){
                    venalTerreno = terreno * option.a_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_1_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_1_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_1_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_1_3
                    venalTerreno = terreno * option.b_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_2_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_2_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_2_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_2_3
                    venalTerreno = terreno * option.b_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_3_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_3_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_3_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.b_3_3
                    venalTerreno = terreno * option.b_terreno
                }
                else if(selectSetor ==='Setor B' && construcao ===0){
                    venalTerreno = terreno * option.b_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_1_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_1_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_1_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_1_3
                    venalTerreno = terreno * option.c_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_2_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_2_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_2_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_2_3
                    venalTerreno = terreno * option.c_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_3_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_3_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_3_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.c_3_3
                    venalTerreno = terreno * option.c_terreno
                }
                else if(selectSetor ==='Setor C' && construcao ===0){
                    venalTerreno = terreno * option.c_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_1_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_1_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_1_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_1_3
                    venalTerreno = terreno * option.d_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_2_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_2_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_2_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_2_3
                    venalTerreno = terreno * option.d_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_3_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_3_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_3_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.d_3_3
                    venalTerreno = terreno * option.d_terreno
                }
                else if(selectSetor ==='Setor D' && construcao ===0){
                    venalTerreno = terreno * option.d_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_1_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_1_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_1_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_1_3
                    venalTerreno = terreno * option.e_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_2_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_2_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_2_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_2_3
                    venalTerreno = terreno * option.e_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_3_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_3_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_3_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    console.log('Calculando venal da cosntrução...')
                    venalConstrucao = construcao * option.e_3_3
                    venalTerreno = terreno * option.e_terreno
                }
                else if(selectSetor ==='Setor E' && construcao ===0){
                    venalTerreno = terreno * option.e_terreno
                }
            }
            return { venalConstrucao, venalTerreno, venalTotal };
        })
        setVenalConstrucao(venalConstrucao);
        setVenalTerreno(venalTerreno);

        venalTotal = venalTerreno + venalConstrucao
        setVenalTotal(venalTotal);
    }
    
    
    const submit = (e) => {
        e.preventDefault()
        calcularVenal()
        //history.push('/projectCard', { message: 'Projeto criado com sucesso!' })
       history.push(`/projectCard?venalTerreno=${venalTerreno}&venalConstrucao=${venalConstrucao}&venalTotal=${venalTotal}&exercicio=${selectExercicio}`)
    }

    const clear = (e) => {
        e.preventDefault()
        setTerreno(0)
        setConstrucao(0)
        setVenalTerreno(0)
        setVenalConstrucao(0)
        setSelectExercicio(0)
        setSelectPadrao(0)
        setSelectTipo(0)
        setSelectSetor(0)
        setSelectCategoria(0)
    }

    const [tipoFormulario, setTipoFormulario] = useState('terreno');

    function handleChange(event) {
      setTipoFormulario(event.target.value);
    }

    return(
        <form onSubmit={submit} className={styles.form_control}>
            <div>
                <label>
                <input
                    type="radio"
                    value="terreno"
                    checked={tipoFormulario === 'terreno'}
                    onChange={handleChange}
                />
                Calcular somente o terreno
                </label>
            </div>
            <div>
                <label>
                <input
                    type="radio"
                    value="construcao"
                    checked={tipoFormulario === 'construcao'}
                    onChange={handleChange}
                />
                Calcular com a edificação
                </label>
            </div>
            <select id="select_exercicio" value={selectExercicio} onChange={handleSelectExercicio}>
                    <option>Selecione o exercicio</option>
                    {todos.map((option) => (
                        <option value={option.exercicio} key={option.exercicio}>
                            {option.exercicio}
                        </option>
                    ))}
            </select>   
            <select id="select_setor" value={selectSetor} onChange={handleSelectSetor}>
                    <option>Selecione o setor</option>
                    {setor.map((option) => (
                        <option value={option.valor} key={option.valor}>
                            {option.valor}
                        </option>
                    ))}
             </select>
            {tipoFormulario === 'terreno' ? (
            <div>
            {/* Renderiza o formulário simples */}
                <label htmlFor="terreno">Terreno: </label>
                <input 
                   type="number"
                   placeholder="Informe a área do terreno"
                   onChange={handleTerrenoChange}
                   value={terreno}
                 />   
            </div>
            ) : (
            <div>
            {/* Renderiza o formulário avançado */}
            <select id="select_padrao" value={selectPadrao} onChange={handleSelectPadrao}>
                <option>Selecione o padrão</option>
                    {padrao.map((option) => (
                        <option value={option.valor} key={option.valor}>
                            {option.valor}
                        </option>
                    ))}
            </select>    
            <select id="select_tipo" value={selectTipo} onChange={handleSelectTipo}>
                <option>Selecione o tipo</option>
                    {tipo.map((option) => (
                        <option value={option.valor} key={option.valor}>
                            {option.valor}
                        </option>
                    ))}
                </select>
                <select id="select_categoria" value={selectCategoria} onChange={handleSelectCategoria}>
                    <option>Selecione a categoria</option>
                    {categoria.map((option) => (
                        <option value={option.valor} key={option.valor}>
                            {option.valor}
                        </option>
                    ))}
                </select>

                <label htmlFor="terreno">Terreno: </label>
                <input 
                   type="number"
                   placeholder="Informe a área do terreno"
                   onChange={handleTerrenoChange}
                   value={terreno}
                 />           
                
                <label htmlFor="contrucao">Construção: </label>
                <input
                    type="number"
                    placeholder="Informe a área edificada"
                    onChange={handleConstrucaoChange}
                    value={construcao}
                 />           
            </div>
            )}
            <div className={styles.inLine}>
                <SubmitButton type="submit" text="Simular" onClick={submit} /> 
                <SubmitButton type="button" text="Limpar" onClick={clear} /> 
            </div>  
        </form>
    )
}
export default Select
