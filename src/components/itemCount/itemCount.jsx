import React, { useContext } from "react";
import { cartContext } from "../cartContext/cartContext";
import "./itemCount.css";

const ItemCount = ({ stock }) => {
  var [cantidad, setCantidad] = React.useState(0);
  const { addGame } = useContext(cartContext);

  const contadorSuma = (stock) => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const contadorResta = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
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
      <button onClick={addGame()}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;
