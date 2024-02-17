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
        />
      </form>
    </>
  );
}

export default FilterCharacter;
