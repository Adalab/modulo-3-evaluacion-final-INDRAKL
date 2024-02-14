import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard({ character, name, species }) {
  return (
    <Link to={"/character/" + character.id}>
      <div>
        <img
          className="character__photo"
          src={
            character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
          }
          alt={character.name}
        />
        <div>
          <p>{name}</p>
          <p>{species}</p>
        </div>
      </div>
    </Link>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
