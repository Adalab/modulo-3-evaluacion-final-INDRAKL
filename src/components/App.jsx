import { useState, useEffect } from "react";
import fetchCharacters from "../services/fetch";
import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import PropTypes from "prop-types";
import Header from "./header";
import Filters from "./filters/filters";
import CharactersList from "./characters/CharactersList";
import CharacterDetail from "./characters/CharacterDetail";
import Footer from "./Footer";

function App() {
  //1. Variables de estado

  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  //2. useEffect

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  //3. Funciones de eventos

  // const handleFilterName = (filterValue) => {
  //   setFilterName(filterValue);
  //   console.log(filterValue);
  //   fetch(`https://hp-api.onrender.com/api/characters`)
  //     .then((response) => response.json())
  //     .then((data) => {});
  // };

  const handleFilterName = (filterValue) => {
    setFilterName(filterValue);
    console.log(filterValue);
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        // Realizar la búsqueda en todos los personajes obtenidos de la API
        const filteredCharacters = data.filter((character) =>
          character.name.toLowerCase().includes(filterValue.toLowerCase())
        );
        // Actualizar el estado characters con los personajes filtrados
        setCharacters(filteredCharacters);
      });
  };

  //4. Variables para el html

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id) || {};
  };

  const filteredCharacterbyName = characters.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filters handleFilterName={handleFilterName} />
              <CharactersList characters={filteredCharacterbyName} />
            </div>
          }
        />
        <Route
          path="/character/:id"
          element={<CharacterDetail findCharacter={findCharacter} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

App.propTypes = {
  characters: PropTypes.array,
};

export default App;
