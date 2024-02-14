function FilterCharacter({ handleFilterName }) {
  const handleChangeName = (event) => {
    handleFilterName(event.currentTarget.value);
  };
  return (
    <>
      <form className="filters">
        Busca por personaje{" "}
        <input className="filter" type="text" onInput={handleChangeName} />
      </form>
      <form
        action="/procesar_formulario"
        method="post"
        className="filters__characters"
      ></form>
    </>
  );
}

export default FilterCharacter;
