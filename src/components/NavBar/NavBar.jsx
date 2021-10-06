import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Gnome from "../../Assets/Gnome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../cartContext/CartContext";

const NavBar = () => {
  const { gameFilter } = useCartContext();

  return (
    <div>
      <Nav className="justify-content-center nav" activeKey="/home">
        <Nav.Item>
          <NavLink to="/inicio" id="link">
            Inicio
          </NavLink>
        </Nav.Item>
        <NavDropdown title="Categorías" id="link">
          <NavDropdown.Item onClick={gameFilter}>Acción</NavDropdown.Item>
          <NavDropdown.Item onClick={gameFilter}>Aventura</NavDropdown.Item>
          <NavDropdown.Item onClick={gameFilter}>Deporte</NavDropdown.Item>
          <NavDropdown.Item onClick={gameFilter}>Rol</NavDropdown.Item>
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
