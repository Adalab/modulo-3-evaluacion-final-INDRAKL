import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import iconAlive from "../../images/iconalive.png";
import iconDead from "../../images/icondead.webp";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  return (
    <div className="character__details">
      <Link to="/" className="character__return">
        ←Volver
      </Link>
      <div>
        <img
          className="character__photo"
          src={
            character.image ||
            "https://via.placeholder.com/210x295/%C8%C8%C8/666666/?text=HarryPotter"
          }
          alt={character.name}
        />
        <h2>{character.name}</h2>
        <p>
          Estado: {character.status ? "vivo" : "muerto"}
          {character.status ? (
            <img className="character__icon" src={iconAlive} alt="Alive" />
          ) : (
            <img className="character__icon" src={iconDead} alt="Dead" />
          )}
        </p>
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Casa: {character.house}</p>
      </div>
    </div>
  );
}

export default CharacterDetail;
