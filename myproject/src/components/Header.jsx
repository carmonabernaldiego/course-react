import Nav from "./Nav";
import logo from "../assets/img/logo.png";
import "../assets/style/header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} width="150" alt=""></img>
        <a href="#">Diego Carmona Bernal</a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
