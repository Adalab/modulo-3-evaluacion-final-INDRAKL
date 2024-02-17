function FilterCharacter({ handleFilterName }) {
  const handleChangeName = (event) => {
    handleFilterName(event.currentTarget.value);
  };

  return (
    <>
      <form className="filters">
        <label htmlFor="name">Busca por personaje:</label>
        <input className="" type="text" onChange={handleChangeName} />
      </form>
    </>
  );
}

export default FilterCharacter;
