import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";
import FilterGender from "./filter.gender";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filterGender,
  handleChangeFilterGender,
}) {
  return (
    <>
      <FilterCharacter handleFilterName={handleFilterName} />
      <FilterHouse handleFilterHouse={handleFilterHouse} />
      <FilterGender
        filterGender={filterGender}
        handleChangeFilterGender={handleChangeFilterGender}
      />
    </>
  );
}

export default Filters;
