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
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterGender, setFilterGender] = useState("all");

  //2. useEffect

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  //3. Funciones de eventos

  const handleFilterName = (filterValue) => {
    setFilterName(filterValue);
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setCharacters(filteredCharacters);
  };

  const handleFilterHouse = (filterType, value) => {
    if (filterType === "house") {
      setFilterHouse(value);
    } else {
      fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data);
        });
    }
  };

  const handleChangeFilterGender = (gender) => {
    setFilterGender(gender);
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

  const filteredCharactersGender = characters.filter(
    (character) => filterGender === "all" || character.gender === filterGender
  );

  return (
    <div className="homepage">
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
