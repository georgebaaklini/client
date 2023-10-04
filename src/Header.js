import "./Header.css";
import logo from "./images/logo.png";
import { FaBars } from "react-icons/fa6";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-content">
        <nav className={showMenu ? "header-nav mobile" : "header-nav"}>
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="nav-mobile" onClick={toggleMenu}>
          <FaBars className="menu" />
        </div>
      </div>
      {showMenu && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};
export default Header;
