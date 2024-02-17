import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filteredCharactersByName,
  filterName,
  filterHouse,
}) {
  return (
    <>
      <FilterCharacter
        handleFilterName={handleFilterName}
        filteredCharactersByName={filteredCharactersByName}
        filterName={filterName}
      />
      <FilterHouse
        handleFilterHouse={handleFilterHouse}
        filterHouse={filterHouse}
      />
    </>
  );
}

export default Filters;
