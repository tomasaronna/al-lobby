import React, { useState } from "react";
import { useCartContext } from "../cartContext/CartContext";
import "./itemCount.css";

const ItemCount = ({ stock, data }) => {
  var [cantidad, setCantidad] = useState(0);
  const { addGame } = useCartContext();
  const { setCartQty } = useCartContext();

  const contadorSuma = (stock) => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      setCartQty(cantidad);
    }
  };
  const contadorResta = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setCartQty(cantidad);
    }
  };

  const functionTrigger = () => {
    addGame(data.title, data.platform, cantidad, data.price);
  };

  return (
    <div className="contador">
      <button onClick={contadorResta} className="menos botonContador">
        -
      </button>
      <label>{cantidad}</label>
      <button onClick={() => contadorSuma(stock)} className="mas botonContador">
        +
      </button>
      <button className="addCart" onClick={functionTrigger}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
