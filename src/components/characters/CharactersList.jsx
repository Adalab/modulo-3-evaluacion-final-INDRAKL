import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import FilterHouse from "../filters/filterhouse";
import FilterCharacter from "../filters/filtercharacter";

function CharactersList({ characters }) {
  const htmlCharacters = characters.map((character, id) => (
    <li key={id} className="">
      <CharacterCard
        character={character}
        name={character.name}
        species={character.species}
      />
    </li>
  ));

  return (
    <>
      <FilterCharacter />
      <FilterHouse />
      <ul className="characters__list">{htmlCharacters}</ul>;
    </>
  );
}
CharactersList.PropTypes = {
  characters: PropTypes.array,
};
export default CharactersList;
