import { useState, useEffect } from "react";
import "../scss/App.scss";
import Header from "./header";
import CharactersList from "./CharactersList";
import Footer from "./Footer";

function App() {
  // const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   fetchCharacters().then((data) => {
  //     setCharacters(data);
  //   });
  // }, []);
  return (
    <div>
      <Header />
      <CharactersList />
      <Footer />
    </div>
  );
}

export default App;
