import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard({ character, name, species }) {
  return (
    <Link to={"/character/" + character.id} className="character__link">
      <img
        className="character__photo"
        src={
          character.image ||
          "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
        }
        alt={character.name}
      />
      <h4 className="character__name">{name}</h4>
      <p className="character__species">{species}</p>
    </Link>
  );
}

CharacterCard.propTypes = {
  characters: PropTypes.array,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
