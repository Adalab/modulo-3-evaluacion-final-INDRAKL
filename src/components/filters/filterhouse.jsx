import PropTypes from "prop-types";

function FilterHouse({ handleFilterHouse }) {
  const handleInputHouse = (event) => {
    handleFilterHouse("house", event.currentTarget.value);
  };
  return (
    <label className="filters" htmlFor="house">
      Selecciona la casa
      <select className="filter__select" onInput={handleInputHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="all">Todas</option>
      </select>
    </label>
  );
}

export default FilterHouse;
