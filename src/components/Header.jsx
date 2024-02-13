import HarryPotter from "../images/harrypotter.png";

function Header() {
  return (
    <div className="header__photo">
      <img src={HarryPotter} alt="Harry Potter" />
    </div>
  );
}

export default Header;
