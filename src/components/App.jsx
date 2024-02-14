import { useState, useEffect } from "react";
import fetchCharacters from "../services/fetch";
import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import PropTypes from "prop-types";
import Header from "./header";
import CharactersList from "./characters/CharactersList";
import Footer from "./Footer";
import CharacterDetail from "./characters/CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id) || {};
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList characters={characters} />} />
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
