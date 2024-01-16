import React from "react";
import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "white" : "#31304D",
    };
  };
  return (
    <nav className="navbar">
      <Link className="nav-name-container" to="/">
        <p className="first-name">ankush</p>
        <p className="last-name">SINGH</p>
      </Link>
      <div className="nav-menu-container">
        <NavLink to="/" style={navLinkStyles} className="navlink">
          HOME
        </NavLink>
        <NavLink to="/about" style={navLinkStyles} className="navlink">
          ABOUT
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles} className="navlink">
          CONTACT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
