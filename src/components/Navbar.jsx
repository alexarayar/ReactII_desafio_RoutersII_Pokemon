import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <header>
      <nav className="navegar">
        <NavLink to="/" className={setActive} end>
          <FontAwesomeIcon icon={faHome} className="icon" />
          Home
        </NavLink>
        <NavLink to="/pokemones" className={setActive}>
          <FontAwesomeIcon icon={faList} className="icon" />
          Pokédex
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
