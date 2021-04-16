import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Pagination from "./components/Pagination";

import "./styles/global.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);

  /*PAGINACAO*/
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  useEffect(() => {

    const publicKey = "683181e8d97212fef95e84879055cd63";
    const hash = "371b267365d4480f7313c97c50a27a67";
    const urlBase = "https://gateway.marvel.com/v1/public/characters";
    const limit = 50;
    const uri = `${urlBase}?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`;

    const fetchCharacters = async () => {
      // setLoading(true);
      // const res = await axios.get(uri);
      // setCharacters(res.data.data.results);
      // setLoading(false);

      // if(localStorage.getItem("dataTeste") == null){
      //   localStorage.setItem("dataTeste", JSON.stringify(res.data.data.results));
      // }
    };
    
    // fetchCharacters();

    if(characters.length == 0){
      setCharacters(JSON.parse(localStorage.getItem("dataTeste")));
      setSearchedCharacters(JSON.parse(localStorage.getItem("dataTeste")));
    };
  }, []);

  

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
      // console.log(searchedCharacters);
      const indexOfLastCharacter = currentPage * charactersPerPage;
      const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
      const x = searchedCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
      setCurrentCharacters(x);
  }, [searchedCharacters, currentPage]);
  
  // console.log(characters);

  //Alimentar o array de rederizacao

  const manageResultsArray = (inputText) => {

    setCurrentPage(1);

    if(inputText == ""){
      setSearchedCharacters(characters);
    }else{
      setSearchedCharacters(characters.filter(character => 
        character.name
          .toLowerCase()
          .includes(inputText.toLowerCase()))
      ) 
    }
  }
  return (
    <div>
      <Header/>
      <section className="content">
        <h1>Busca de personagens</h1>
        <Form manageResultsArray={manageResultsArray} />
        <Result currentPage={currentPage} currentCharacters={currentCharacters} />
      </section>
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacter={searchedCharacters.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
