import { useState } from "react";
import PropTypes from "prop-types";

function FilterCharacter({
  handleFilterName,
  filteredCharactersByName,
  filterName,
}) {
  const [inputValue, setInputValue] = useState(filteredCharactersByName);
  const handleInput = (event) => {
    event.preventDefault();
    const newValue = event.currentTarget.value;
    setInputValue(newValue);
    handleFilterName(newValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleFilterName(filterName);
    }
  };

  return (
    <>
      <form className="filters">
        <label htmlFor="name">
          <h1 className="filters__text">BUSCA POR PERSONAJE: </h1>
        </label>
        <input
          className=""
          id="name"
          name="name"
          type="text"
          placeholder="Ej: Malfoy"
          onChange={handleInput}
          value={filterName}
          onKeyPress={handleKeyPress}
        />
      </form>
    </>
  );
}

FilterCharacter.propTypes = {
  handleFilterName: PropTypes.func,
  filteredCharactersByName: PropTypes.array,
  filterName: PropTypes.string,
};

export default FilterCharacter;
