import "./Header.css";
import logo from "./logo.png"

const Header = () => {
  return (
    
      
    <header className="header">
        <img src={logo} alt="logo" className="logo"/>
      <nav className="header-nav">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
};
export default Header;
