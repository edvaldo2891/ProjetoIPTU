import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from './Lancamentos.module.css';
import Cards from "./Cards";
import ReactPaginate from 'react-paginate';
import Loading from '../layout/Loading';

function Lancamentos() {
  const [removeLoading, setRemoveLoading] = useState(false)
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 20;

  useEffect(() => {
    setTimeout(
      () => {
          Axios.get("http://54.94.200.152:3001/getCards").then((response) => {
            setListCard(response.data);
            setFilteredCards(response.data);
            setRemoveLoading(true)
          });
        },300)
      }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.proprietario]: value.target.value,
      [value.target.inscricao]: value.target.value,
      [value.target.logradouro]: value.target.value,
    }));
  };

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term === '') {
      setFilteredCards(listCard);
    } else {
      const filtered = listCard.filter(card => {
        return card.proprietario.toLowerCase().includes(term.toLowerCase()) 
            || card.compromissario.toLowerCase().includes(term.toLowerCase())
            || card.inscricao.toLowerCase().includes(term.toLowerCase())
            || card.cpf_pro.toLowerCase().includes(term.toLowerCase())
            || card.cpf_com.toLowerCase().includes(term.toLowerCase())
        });
      setFilteredCards(filtered);
    }
  };

  const pageCount = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * cardsPerPage;
  const currentCards = filteredCards.slice(offset, offset + cardsPerPage);

  return (
    <div className={styles.app_container}>
        <label className={styles.form_control}>Pesquisar cadastro
            <input  type="text" placeholder="Proprietário, compromissário, inscrição, cpf..." value={searchTerm} onChange={handleSearchTermChange} />
        </label>
      {currentCards.map((val) => (
        <Cards
          listCard={listCard}
          setListCard={setListCard}
          key={val.cod}
          cod={val.cod}
          inscricao={val.inscricao}
          proprietario={val.proprietario}
          compromissario={val.compromissario}
          logradouro={val.logradouro}
          numero={val.numero}
          bairro={val.bairro}
          terreno={val.terreno}
          construcao={val.construcao}
          padrao={val.padrao}
          tipo={val.tipo}
          setor={val.setor}
          categoria={val.categoria}
          lote={val.lote}
          quadra={val.quadra}
        />
      ))}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
      {!removeLoading && <Loading />}
      {removeLoading && listCard.length === 0 && (
        <p>Não há lançamentos cadastrados!</p>
      )}    
    </div>
  );
}

export default Lancamentos;
