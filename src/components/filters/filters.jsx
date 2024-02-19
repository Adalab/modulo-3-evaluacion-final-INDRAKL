import FilterHouse from "./filterhouse";
import FilterCharacter from "./filtercharacter";
import PropTypes from "prop-types";

function Filters({
  handleFilterName,
  handleFilterHouse,
  filteredCharactersByName,
  filterName,
  filterHouse,
  handleReset,
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
      <button className="filters" onClick={handleReset}>
        Reset{" "}
      </button>
    </>
  );
}

Filters.propTypes = {
  handleFilterName: PropTypes.func,
  filteredCharactersByName: PropTypes.array,
  filterName: PropTypes.string,
  handleFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
  handleReset: PropTypes.func,
};

export default Filters;
