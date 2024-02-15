import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";

function Filters({ handleFilterName, handleFilterHouse }) {
  return (
    <>
      <FilterCharacter handleFilterName={handleFilterName} />
      <FilterHouse handleFilterHouse={handleFilterHouse} />
    </>
  );
}

export default Filters;
