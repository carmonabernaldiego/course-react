import logo from "../assets/img/dominos.svg";
import "../assets/style/header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="images/logo.jpg" width="150" alt=""></img>
        <a href="#">Diego Carmona Bernal</a>
      </div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Porfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
