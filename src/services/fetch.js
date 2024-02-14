function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
        };
      });
    });
}

export default fetchCharacters;
