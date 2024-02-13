function FilterCharacter() {
  return (
    <>
      <form className="filters">
        Busca por personaje <input className="filter" type="text" />
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
