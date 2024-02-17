import { useState } from "react";

function FilterCharacter({ handleFilterName }) {
  const handleChangeName = (event) => {
    handleFilterName(event.currentTarget.value);
  };

  return (
    <>
      <form className="filters">
        <label htmlFor="name">Busca por personaje:</label>
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
