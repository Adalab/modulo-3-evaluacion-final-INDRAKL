import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";

function Filters({ handleFilterName }) {
  return (
    <>
      <FilterCharacter handleFilterName={handleFilterName} />
      <FilterHouse />
    </>
  );
}

export default Filters;
