import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Your Name</h1>
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
