import { useState } from "react";

function FilterCharacter({ handleFilterName, filteredCharactersByName }) {
  const [inputValue, setInputValue] = useState(filteredCharactersByName);
  const handleInput = (event) => {
    const newValue = event.currentTarget.value;
    setInputValue(newValue);
    handleFilterName(newValue);
    console.log(inputValue);
  };

  return (
    <>
      <form className="filters">
        <label htmlFor="name">Busca por personaje:</label>
        <input
          className=""
          type="text"
          onChange={handleInput}
          value={inputValue}
        />
      </form>
    </>
  );
}

export default FilterCharacter;
