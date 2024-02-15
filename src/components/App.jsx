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
  const [filterHouse, setFilterHouse] = useState("all");

  //2. useEffect

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  //3. Funciones de eventos

  const handleFilterName = (filterValue) => {
    setFilterName(filterValue);
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

  const handleFilterHouse = (filterType, value) => {
    if (filterType === "house") {
      setFilterHouse(value);
      if (value === "all") {
        fetch(`https://hp-api.onrender.com/api/characters`)
          .then((response) => response.json())
          .then((data) => {
            setCharacters(data);
          });
      } else {
        // Si se selecciona una casa específica, recuperar los personajes de esa casa
        fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
          .then((response) => response.json())
          .then((data) => {
            setCharacters(data);
          });
      }
    }
  };

  //4. Variables para el html

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id) || {};
  };

  const filteredCharactersByHouse = characters.filter((character) => {
    return filterHouse === "all" || character.house === filterHouse;
  });
  const filteredCharactersByName = filteredCharactersByHouse.filter(
    (character) =>
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
              <Filters
                handleFilterName={handleFilterName}
                handleFilterHouse={handleFilterHouse}
              />
              <CharactersList characters={filteredCharactersByName} />
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
