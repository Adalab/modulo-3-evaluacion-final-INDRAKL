function fetchCharacters() {
  return fetch(`https://hp-api.onrender.com/api/characters`)
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
          alternate_names: eachCharacter.alternate_names,
        };
      });
    });
}

export default fetchCharacters;
