import CharacterCard from "./CharacterCard";

function CharactersList({ characters }) {
  return (
    <div>
      {characters.map((character, index) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharactersList;
