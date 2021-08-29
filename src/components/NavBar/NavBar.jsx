import React from "react";
// import Nav from "react-bootstrap/Nav";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Gnome from "../../Assets/Gnome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const Navigation = () => {
  return (
    <div>
      <Nav className="justify-content-center nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Productos" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PlayStation 5</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Xbox Series X</NavDropdown.Item>
        </NavDropdown>
        <img src={Gnome} className="logo" alt="logo" />
        <Nav.Item>
          <Nav.Link>Acerca de</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contacto</Nav.Link>
        </Nav.Item>
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
      </Nav>
    </div>
  );
};

export default Navigation;
