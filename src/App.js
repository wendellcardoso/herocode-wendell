import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/global.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersRender, setCharactersRender] = useState([]);

  useEffect(() => {

    const publicKey = "683181e8d97212fef95e84879055cd63";

    const hash = "371b267365d4480f7313c97c50a27a67";

    const urlBase = "https://gateway.marvel.com/v1/public/characters";

    const uri = `${urlBase}?ts=1&apikey=${publicKey}&hash=${hash}`;

    const fetchCharacters = async () => {
      // setLoading(true);
      // const res = await axios.get(uri);
      // setCharacters(res.data.data.results);
      // setLoading(false);

      // if(localStorage.getItem("dataTeste") == null){
      //   localStorage.setItem("dataTeste", JSON.stringify(res.data.data.results));
      // }
    };
    
    // fetchData();

    if(characters.length == 0){
      setCharacters(JSON.parse(localStorage.getItem("dataTeste")));
      setCharactersRender(JSON.parse(localStorage.getItem("dataTeste")));
    };
  }, []);

  useEffect(() => {
      console.log(charactersRender);
  }, [charactersRender]);
  
  // console.log(characters);

  //Alimentar o array de rederizacao

  const manageResultsArray = (inputText) => {

    if(inputText == ""){
      setCharactersRender(characters);
    }else{
      setCharactersRender(characters.filter(character => 
        character.name
          .toLowerCase()
          .includes(inputText.toLowerCase()))
      ) 
    }
  }
  return (
    <div>
      <Header/>
      <div className="content">
        <h1>Busca de personagens</h1>
        <Form manageResultsArray={manageResultsArray} />
      </div>
    </div>
  );
}

export default App;
