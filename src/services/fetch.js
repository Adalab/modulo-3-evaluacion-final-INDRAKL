export function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          species: eachCharacter.species,
        };
      });
    });
}
