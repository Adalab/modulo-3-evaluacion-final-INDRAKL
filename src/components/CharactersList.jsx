import CharacterCard from "./CharacterCard";
import FilterHouse from "../components/filters/filterhouse";
import FilterCharacter from "../components/filters/filtercharacter";

function CharactersList({ characters }) {
  return (
    <>
      <FilterCharacter />
      <FilterHouse />
      <ul className="characters__list">
        {characters.map((character, index) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}

export default CharactersList;
