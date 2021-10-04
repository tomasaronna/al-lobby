import React, { useContext } from "react";
import { cartContext } from "../../cartContext/cartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { cart, cartQty } = useContext(cartContext);
  console.log("CART", cart);
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
            </div>
            <button className="finalizarCompra">Finalizar compra</button>
          </>
        );
      })}
    </>
  );
};

export default CartWidget;
