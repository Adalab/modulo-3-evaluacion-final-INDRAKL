import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharactersList({ characters }) {
  const sortedCharacters = characters.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  if (sortedCharacters.length === 0) {
    return (
      <p className="characters__list__text">
        Ningún personaje coincide con tu búsqueda. Por favor, prueba de nuevo.
      </p>
    );
  }

  const htmlCharacters = sortedCharacters.map((character, id) => (
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
