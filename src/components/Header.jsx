import HarryPotter from "../images/harrypotter.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <div className="header">
        <img className="header__image" src={HarryPotter} alt="Harry Potter" />
      </div>
    </Link>
  );
}

export default Header;
