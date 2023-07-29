import { useEffect, useState } from 'react'
import styles from './Calculo.module.css'
import SubmitButton from '../form/SubmitButton';
import Axios from "axios";
import FormResult from './FormResult';
import React from "react";

function Calculo(props){
   
    const [open, setOpen] = React.useState(false);
    let [terreno, setTerreno] = useState(0.0);
    let [construcao, setConstrucao] = useState(0.0);
    let [venalTerreno, setVenalTerreno] = useState(0.0);
    let [venalConstrucao, setVenalConstrucao] = useState(0.0);
    let [venalTotal, setVenalTotal] = useState(0.0);
    let [ipu, setIpu] = useState(0.0);
    let [itu, setItu] = useState(0.0);
    let [iptu, setIptu] = useState(0.0);
    let [lixo, setLixo] = useState(0.0);

    const [selectTipo, setSelectTipo] = useState('');
    const [selectPadrao, setSelectPadrao] = useState('');
    const [selectSetor, setSelectSetor] = useState('');
    const [selectCategoria, setSelectCategoria] = useState('');
    const [selectExercicio, setSelectExercicio] = useState('');
    const [tipoFormulario, setTipoFormulario] = useState('terreno');

    const[todos,setTodos] = useState([])
    const[lixoDB,setLixoDB] = useState([])
   
    
    useEffect(() => {
        setTimeout(
          () => {
            Axios.get("http://54.94.200.152:3001/getColetaLixo").then((response) => {
              setLixoDB(response.data);
            });
        },300)
      }, []);

      useEffect(() => {
        setTimeout(
          () => {
            Axios.get("http://54.94.200.152:3001/getPlantaGenerica").then((response) => {
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
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.a_1_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.a_1_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.a_1_3
                    venalTerreno = terreno * option.a_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.a_2_0
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.a_2_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.a_2_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.a_2_3
                    venalTerreno = terreno * option.a_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.a_3_0
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.a_3_1
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.a_3_2
                    venalTerreno = terreno * option.a_terreno
                }
                if(selectSetor ==='Setor A' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.a_3_3
                    venalTerreno = terreno * option.a_terreno
                }
                else if(selectSetor ==='Setor A' && construcao ===0){
                    venalTerreno = terreno * option.a_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.b_1_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.b_1_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.b_1_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.b_1_3
                    venalTerreno = terreno * option.b_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.b_2_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.b_2_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.b_2_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.b_2_3
                    venalTerreno = terreno * option.b_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.b_3_0
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.b_3_1
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.b_3_2
                    venalTerreno = terreno * option.b_terreno
                }
                if(selectSetor ==='Setor B' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.b_3_3
                    venalTerreno = terreno * option.b_terreno
                }
                else if(selectSetor ==='Setor B' && construcao ===0){
                    venalTerreno = terreno * option.b_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.c_1_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.c_1_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.c_1_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.c_1_3
                    venalTerreno = terreno * option.c_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.c_2_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.c_2_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.c_2_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.c_2_3
                    venalTerreno = terreno * option.c_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.c_3_0
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.c_3_1
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    
                    venalConstrucao = construcao * option.c_3_2
                    venalTerreno = terreno * option.c_terreno
                }
                if(selectSetor ==='Setor C' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    
                    venalConstrucao = construcao * option.c_3_3
                    venalTerreno = terreno * option.c_terreno
                }
                else if(selectSetor ==='Setor C' && construcao ===0){
                    venalTerreno = terreno * option.c_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Luxo'){
                    
                    venalConstrucao = construcao * option.d_1_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.d_1_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.d_1_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Alveraria' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.d_1_3
                    venalTerreno = terreno * option.d_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.d_2_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.d_2_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.d_2_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.d_2_3
                    venalTerreno = terreno * option.d_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.d_3_0
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.d_3_1
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.d_3_2
                    venalTerreno = terreno * option.d_terreno
                }
                if(selectSetor ==='Setor D' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.d_3_3
                    venalTerreno = terreno * option.d_terreno
                }
                else if(selectSetor ==='Setor D' && construcao ===0){
                    venalTerreno = terreno * option.d_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.e_1_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.e_1_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.e_1_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Alvenaria' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.e_1_3
                    venalTerreno = terreno * option.e_terreno
                }
                /*---------------------------------------------------------------------------------------------------------------------------*/               
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.e_2_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.e_2_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.e_2_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Mista' && selectTipo ==='Terceira'){
                    venalConstrucao = construcao * option.e_2_3
                    venalTerreno = terreno * option.e_terreno
                }
                 /*---------------------------------------------------------------------------------------------------------------------------*/               
                 if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Luxo'){
                    venalConstrucao = construcao * option.e_3_0
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Primeira'){
                    venalConstrucao = construcao * option.e_3_1
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Segunda'){
                    venalConstrucao = construcao * option.e_3_2
                    venalTerreno = terreno * option.e_terreno
                }
                if(selectSetor ==='Setor E' && selectPadrao ==='Madeira' && selectTipo ==='Terceira'){
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
        calcularIPTU()
        calculaLixo()
    }
    
    function calculaLixo(){
        lixoDB.map((option) => {
            if (option.exercicio === parseInt(selectExercicio)) {
                if(selectCategoria ==='Residencial' && selectSetor === 'Setor A'){
                    lixo = parseFloat(option.a_residencial)
                }
                if(selectCategoria ==='Comercial' && selectSetor === 'Setor A'){
                    lixo = parseFloat(option.a_comercial)
                }
                if(selectCategoria ==='Residencial' && selectSetor === 'Setor B'){
                    lixo = parseFloat(option.b_residencial)
                }
                if(selectCategoria ==='Comercial' && selectSetor === 'Setor B'){
                    lixo = parseFloat(option.b_comercial)
                }
                if(selectCategoria ==='Residencial' && selectSetor === 'Setor C'){
                    lixo = parseFloat(option.c_residencial)
                }
                if(selectCategoria ==='Comercial' && selectSetor === 'Setor C'){
                    lixo = parseFloat(option.c_comercial)
                }
                if(selectCategoria ==='Residencial' && selectSetor === 'Setor D'){
                    lixo = parseFloat(option.d_residencial)
                }
                if(selectCategoria ==='Comercial' && selectSetor === 'Setor D'){
                    lixo = parseFloat(option.d_comercial)
                }
                if(selectCategoria ==='Residencial' && selectSetor === 'Setor E'){
                    lixo = parseFloat(option.e_residencial)
                }
                if(selectCategoria ==='Comercial' && selectSetor === 'Setor E'){
                    lixo = parseFloat(option.e_comercial)
                }
            }
            return {lixo};
        })
        setLixo(lixo)
    }

    function calcularIPTU() {
        if(venalConstrucao === 0){
            itu = venalTerreno * 0.025
            iptu = itu
            setItu(itu)
            setIptu(iptu)
        }else{
            ipu = venalConstrucao * 0.005
            itu = venalTerreno * 0.005
            iptu = ipu + itu + lixo
            setItu(itu)
            setIpu(ipu)
            setIptu(iptu)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        calcularVenal()
        calcularIPTU()
        calculaLixo()
        setOpen(true)
        //history.push('/projectCard', { message: 'Projeto criado com sucesso!' })
       //history.push(`/projectCard?venalTerreno=${venalTerreno}&venalConstrucao=${venalConstrucao}&venalTotal=${venalTotal}&exercicio=${selectExercicio}`)
    }

    const clear = (e) => {
        e.preventDefault()
        zerar()
    }

    function zerar(){
        setTerreno(0)
        setConstrucao(0)
        setVenalTerreno(0)
        setVenalConstrucao(0)
        setSelectExercicio(0)
        setSelectPadrao(0)
        setSelectTipo(0)
        setSelectSetor(0)
        setSelectCategoria(0)
        setIptu(0)
        setIpu(0)
        setItu(0)
        setLixo(0)
    }

    function handleChange(event) {
      setTipoFormulario(event.target.value);
      zerar()
    }

    return(
        <>
            <div className={styles.form_control}>
                <form>
                    <h1>Simular valores para o IPTU</h1>
                    <div className={styles.radio}>
                        <label> 
                            <input
                                type="radio"
                                value="terreno"
                                checked={tipoFormulario === 'terreno'}
                                onChange={handleChange}
                            />
                        Calcular somente o terreno</label>
                    </div>
                    <div className={styles.radio}>
                        <label>
                            <input
                                type="radio"
                                value="construcao"
                                checked={tipoFormulario === 'construcao'}
                                onChange={handleChange}
                            />
                        Calcular com a edificação</label>
                    </div>
                    <div>
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
                    </div>
                    {tipoFormulario === 'terreno' ? (
                         <div className={styles.textField}>    
                        {/* Renderiza o formulário só do terreno */}
                            <label>Terreno: </label>
                            <input 
                            type="number"
                            placeholder="Informe a área do terreno"
                            onChange={handleTerrenoChange}
                            value={terreno}
                            />   
                        </div>
                        ) : (
                        <div>
                            {/* Renderiza o formulário com a construção */}
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
                            <div className={styles.textField}>         
                                <label>Terreno: </label>
                                <input 
                                type="number"
                                placeholder="Informe a área do terreno"
                                onChange={handleTerrenoChange}
                                value={terreno}
                                />           
                                    
                                <label>Construção: </label>
                                <input
                                    type="number"
                                    placeholder="Informe a área edificada"
                                    onChange={handleConstrucaoChange}
                                    value={construcao}
                                />    
                            </div>  
                        </div>
                    )}
                    <div className={styles.button}>
                        <SubmitButton type="button" text="Simular" onClick={submit} /> 
                        <SubmitButton type="button" text="Limpar" onClick={clear} /> 
                    </div>  
                </form>
            </div>
            <FormResult
                open={open}
                setOpen={setOpen}
                venalTerreno={venalTerreno}
                venalConstrucao={venalConstrucao}
                venalTotal={venalTotal}
                itu={itu}
                ipu={ipu}
                iptu={iptu}
                lixo={lixo}
            />
        </>
    )
}
export default Calculo
