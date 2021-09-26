import React, { useContext } from "react";
import { cartContext } from "../../cartContext/cartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { removeGame } = useContext(cartContext);
  return (
    <>
      <tr>
        <th>Título</th>
        <th>Plataforma</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </tr>
      <button onClick={removeGame()}>Quitar del carrito</button>
    </>
  );
};

export default CartWidget;
