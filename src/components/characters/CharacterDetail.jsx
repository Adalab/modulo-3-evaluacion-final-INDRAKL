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
        <h2 className="">{character.name}</h2>
        <p>Esatus: {character.status ? "vivo" : "muerto"}</p>{" "}
        {/* Muestra "Vivo" si el estado es true, "Muerto" si es false */}
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Casa: {character.house}</p>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {};

export default CharacterDetail;
