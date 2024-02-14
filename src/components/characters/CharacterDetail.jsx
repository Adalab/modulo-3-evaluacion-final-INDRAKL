import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  return (
    <div className="">
      <img
        className="character__photo"
        src={
          character.image ||
          "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
        }
        alt={character.name}
      />
      <div>
        <h2 className="card__title">{character.name}</h2>
        <p>Estado de vida: {character.status ? "Vivo" : "Muerto"}</p>{" "}
        {/* Muestra "Vivo" si el estado es true, "Muerto" si es false */}
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.house}</p>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {};

export default CharacterDetail;
