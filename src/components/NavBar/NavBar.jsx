import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Gnome from "../../Assets/Gnome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-center nav" activeKey="/home">
        <Nav.Item>
          <NavLink to="/inicio" id="link">
            Inicio
          </NavLink>
        </Nav.Item>
        <NavDropdown title="Productos" id="link">
          <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PlayStation 5</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Xbox Series X</NavDropdown.Item>
        </NavDropdown>
        <img src={Gnome} className="logo" alt="logo" />
        <Nav.Item>
          <NavLink to="/acerca-de" id="link">
            Acerca de
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/contacto" id="link">
            Contacto
          </NavLink>
        </Nav.Item>
        <NavLink to="/carrito">
          <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
        </NavLink>
      </Nav>
    </div>
  );
};

export default NavBar;
