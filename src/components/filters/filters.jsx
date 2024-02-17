import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";
import FilterGender from "./filter.gender";

function Filters({ handleFilterName, handleFilterHouse }) {
  return (
    <>
      <FilterCharacter handleFilterName={handleFilterName} />
      <FilterHouse handleFilterHouse={handleFilterHouse} />
    </>
  );
}

export default Filters;
