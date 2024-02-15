import HarryPotter from "../images/harrypotter.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <div className="header__photo">
        <img src={HarryPotter} alt="Harry Potter" />
      </div>
    </Link>
  );
}

export default Header;
