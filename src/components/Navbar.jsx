import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navigation = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <NavLink 
        to="/" 
        className="flex-sm-fill text-sm-center nav-link" 
        end
      >
        About
      </NavLink>
      <NavLink 
        to="/portfolio" 
        className="flex-sm-fill text-sm-center nav-link"
      >
        Portfolio
      </NavLink>
      <NavLink 
        to="/contact" 
        className="flex-sm-fill text-sm-center nav-link"
      >
        Contact
      </NavLink>
      <NavLink 
        to="/resume" 
        className="flex-sm-fill text-sm-center nav-link"
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navigation;