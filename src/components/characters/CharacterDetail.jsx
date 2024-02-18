import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import iconAlive from "../../images/iconalive.png";
import iconDead from "../../images/icondead.webp";
import lechuza from "../../images/lechuza.jpeg";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  return (
    <div className="character__details">
      <Link to="/" className="character__return">
        VOLVER
      </Link>
      <div className="character__card">
        <img
          className="character__photo"
          src={character.image || lechuza}
          alt={character.name}
        />
        <form className="character__text">
          <h2 className="character__text__name">{character.name}</h2>
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
          <p>
            {character.alternate_names &&
              character.alternate_names.length > 0 && (
                <span>
                  Nombres alternativos: {character.alternate_names.join(", ")}
                </span>
              )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default CharacterDetail;
