import PropTypes from "prop-types";

function FilterHouse({ handleFilterHouse, filterHouse }) {
  const handleInputHouse = (event) => {
    handleFilterHouse("house", event.currentTarget.value);
  };
  return (
    <label className="filters" htmlFor="house">
      <h1 className="filters__text">SELECCIONA LA CASA:</h1>
      <select
        className="filter__select"
        value={filterHouse}
        onInput={handleInputHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="all">Todas</option>
      </select>
    </label>
  );
}

FilterHouse.propTypes = {
  handleFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
};

export default FilterHouse;
