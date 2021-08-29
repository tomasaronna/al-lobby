import React from "react";
import "./itemCount.css";

const ItemCount = ({ stock }) => {
  var [cantidad, setCantidad] = React.useState(0);

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
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;
