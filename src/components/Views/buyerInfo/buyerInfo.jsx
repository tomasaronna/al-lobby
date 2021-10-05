import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./buyerInfo.css";

const BuyerInfo = () => {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputMail, setInputMail] = useState("");

  const handleOnChange = (e) => {
    if (e.target.name === "nombre") {
      setInputName(e.target.value);
    } else if (e.target.name === "apellido") {
      setInputLastName(e.target.value);
    } else if (e.target.name === "mail") {
      setInputMail(e.target.value);
    }
  };

  return (
    <>
      <h1>Confirmación de compra</h1>
      <p>
        Por favor complete los siguientes datos para continuar con su compra
      </p>
      <form>
        <div className="name">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ej: Tomás"
            value={inputName}
            onChange={handleOnChange}
          />
        </div>
        <div className="lastName">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Ej: Aronna San Martín"
            value={inputLastName}
            onChange={handleOnChange}
          />
        </div>
        <div className="mail">
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="taronna@gmail.com"
            value={inputMail}
            onChange={handleOnChange}
          />
        </div>
        <Link to="/compra-realizada">
          <button type="submit" className="confirm">
            Confirmar compra
          </button>
        </Link>
      </form>
    </>
  );
};

export default BuyerInfo;
