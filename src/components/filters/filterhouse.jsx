import PropTypes from "prop-types";

function FilterHouse() {
  return (
    <label className="filters" htmlFor="character">
      Selecciona la casa
      <select className="filter__select">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="all">Todas</option>
      </select>
    </label>
  );
}

FilterHouse.propTypes = {};

export default FilterHouse;
