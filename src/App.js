import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Pagination from "./components/Pagination";
import Modal from "react-modal";
import ModalContent from "./components/ModalContent";

import "./styles/global.css";

Modal.setAppElement("#root");
function App() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);

  /*PAGINACAO*/
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  /*MODAL*/
  const [modalIsOpen, setIsOpen] = useState(false);
  const [charSelected, setCharSelected] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const publicKey = "683181e8d97212fef95e84879055cd63";
    const hash = "371b267365d4480f7313c97c50a27a67";
    const urlBase = "https://gateway.marvel.com/v1/public/characters";
    const limit = 100;
    const uri = `${urlBase}?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`;

    const fetchCharacters = async () => {
      const res = await axios.get(uri);
      setCharacters(res.data.data.results);
      setSearchedCharacters(res.data.data.results);
    };
    
    fetchCharacters();

  }, []);

  
  useEffect(() => {
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const x = searchedCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    setCurrentCharacters(x);
  }, [searchedCharacters, currentPage]);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  //Alimentar o array de rederizacao
  const manageResultsArray = (inputText) => {

    setCurrentPage(1);

    if(inputText === ""){
      setSearchedCharacters(characters);
    }else{
      setSearchedCharacters(characters.filter(character => 
        character.name
          .toLowerCase()
          .includes(inputText.toLowerCase()))
      ) 
    }
  }

  const openModal = (charId) => {
    setCharSelected(currentCharacters.filter(char => char.id === charId));
    
    setIsOpen(true);

    const uriSeries = `https://gateway.marvel.com/v1/public/characters/${charId}/series?ts=1&limit=3&apikey=683181e8d97212fef95e84879055cd63&hash=371b267365d4480f7313c97c50a27a67`;
    
    const fetchSeries = async () => {
      
      const seriesData = await axios.get(uriSeries);
      setSeries(seriesData.data.data.results);      
    }
    fetchSeries();
    
    const uriEvents = `https://gateway.marvel.com/v1/public/characters/${charId}/events?ts=1&limit=3&apikey=683181e8d97212fef95e84879055cd63&hash=371b267365d4480f7313c97c50a27a67`;
    
    const fetchEvents = async () => {

      const seriesData = await axios.get(uriEvents);
      setEvents(seriesData.data.data.results);
  
    }
    fetchEvents();
  }
  
  const closeModal = () => {
    setSeries([]);
    setEvents([]);
    
    setIsOpen(false);
  }

  return (
    <div>
      <Header/>
      <section className="content">
        <h1>Busca de personagens</h1>
        <Form manageResultsArray={manageResultsArray} />
        <Result 
          currentPage={currentPage} 
          currentCharacters={currentCharacters}
          openModal={openModal}

        />
      </section>
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacter={searchedCharacters.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Modal isOpen={modalIsOpen}>
        <ModalContent
          charSelected={charSelected}
          series={series}
          events={events}
          closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
