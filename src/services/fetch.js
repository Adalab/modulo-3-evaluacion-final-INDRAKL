function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          status: eachCharacter.alive,
        };
      });
    });
}

export default fetchCharacters;
