import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import lechuza from "../../images/lechuza.jpeg";

function CharacterCard({ character, name, species }) {
  return (
    <Link to={"/character/" + character.id} className="character__link">
      <img
        className="character__photo"
        src={character.image || lechuza}
        alt={character.name}
      />
      <h4 className="character__name">{name}</h4>
      <p className="character__species">{species}</p>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
