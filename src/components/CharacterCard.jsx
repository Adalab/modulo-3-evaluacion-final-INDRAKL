import React from "react";

function CharacterCard({ character }) {
  return (
    <div>
      <img
        className="character__photo"
        src={
          character.image ||
          "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
        }
        alt={character.name}
      />

      <div>Name: {character.name}</div>
      <div>Species: {character.species}</div>
    </div>
  );
}

export default CharacterCard;
