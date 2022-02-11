import { getByTitle } from "@testing-library/react";
import "./Navbar.css";
import Button from "../button/button";
import CartWidget from "../multimedia/CartWidget";
import Logo from "../multimedia/logo";

const Navbar = ({ title, color }) => {
  const Inicio = () => {
    console.log("Pagina Principal");
  };
  const Login = () => {
    console.log("Ingresando");
  };
  const Contact = () => {
    console.log("telefonos y mails");
  };
  const AboutUs = () => {
    console.log("sobre nosotros");
  };
  return (
    <nav>
      <div>
        <Logo />
        <li>{title}</li>
      </div>
      <div>
        <Button
          style={{ backgroundColor: color }}
          label="Home"
          handleClick={Inicio}
        />
        <Button label="About us" handleClick={AboutUs} />
        <Button label="Contacto" handleClick={Contact} />
        <Button label="Log in" handleClick={Login} />
        <CartWidget />
      </div>
    </nav>
  );
};
export default Navbar;
