import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharactersList({ characters }) {
  const htmlCharacters = characters.map((character, id) => (
    <li key={id} className="character">
      <CharacterCard
        character={character}
        name={character.name}
        species={character.species}
      />
    </li>
  ));

  return (
    <>
      <ul className="characters__list">{htmlCharacters}</ul>
    </>
  );
}
CharactersList.propTypes = {
  characters: PropTypes.array,
};
export default CharactersList;
