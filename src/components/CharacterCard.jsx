import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <>
      <li className="character__li">
        <img
          className="character__photo"
          src={
            character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
          }
          alt={character.name}
        />

        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
      </li>
    </>
  );
}

export default CharacterCard;
