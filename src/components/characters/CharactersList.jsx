import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import FilterHouse from "../filters/filterhouse";
import FilterCharacter from "../filters/filtercharacter";

function CharactersList({ characters }) {
  const htmlCharacters = characters.map((character, id) => (
    <li key={id} className="" key={id}>
      <img
        className="character__photo"
        src={
          character.image ||
          "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
        }
        alt={character.name}
      />
      <CharacterCard name={character.name} species={character.species} />
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
