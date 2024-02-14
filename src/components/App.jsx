import { useState, useEffect } from "react";
import fetchCharacters from "../services/fetch";
import "../scss/App.scss";
import Header from "./header";
import CharactersList from "./characters/CharactersList";
import Footer from "./Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <div>
      <Header />
      <CharactersList characters={characters} />
      <Footer />
    </div>
  );
}

export default App;
