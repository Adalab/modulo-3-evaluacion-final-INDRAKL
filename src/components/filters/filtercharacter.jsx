import { useState } from "react";

function FilterCharacter({
  handleFilterName,
  filteredCharactersByName,
  filterName,
}) {
  const [inputValue, setInputValue] = useState(filteredCharactersByName);
  const handleInput = (event) => {
    const newValue = event.currentTarget.value;
    setInputValue(newValue);
    handleFilterName(newValue);
  };

  return (
    <>
      <form className="filters">
        <label htmlFor="name">
          <h1 className="filters__text">Busca por personaje: </h1>
        </label>
        <input
          className=""
          id="name"
          name="name"
          type="text"
          onChange={handleInput}
          value={filterName}
        />
      </form>
    </>
  );
}

export default FilterCharacter;
