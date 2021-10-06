import React from "react";
import { useCartContext } from "../../cartContext/CartContext";
import { Link } from "react-router-dom";
import "./cartWidget.css";

const CartWidget = () => {
  const { cart, cartQty, removeGame } = useCartContext();

  return (
    <>
      {cart.map((carrito) => {
        return (
          <>
            <div className="detalle">
              <h1>{carrito.title}</h1>
              <h3>{carrito.platform}</h3>
              <h3>{cartQty}</h3>
              <h2>{carrito.price}</h2>
              <button className="quitarCarrito" onClick={removeGame}>
                Quitar del carrito
              </button>
            </div>
            <Link to="/datos-del-usuario">
              <button className="finalizarCompra">Finalizar compra</button>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default CartWidget;
