import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharactersList({ characters }) {
  if (characters.length === 0) {
    return (
      <p className="characters__list__text">
        Ningún personaje coincide con tu búsqueda. Por favor, prueba de nuevo.
      </p>
    );
  }
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
