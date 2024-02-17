import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filteredCharactersByName,
}) {
  return (
    <>
      <FilterCharacter
        handleFilterName={handleFilterName}
        filteredCharactersByName={filteredCharactersByName}
      />
      <FilterHouse handleFilterHouse={handleFilterHouse} />
    </>
  );
}

export default Filters;
