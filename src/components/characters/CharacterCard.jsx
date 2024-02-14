import PropTypes from "prop-types";

function CharacterCard({ name, species }) {
  return (
    <>
      <p>{name}</p>
      <p>{species}</p>
    </>
  );
}

CharacterCard.PropTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
