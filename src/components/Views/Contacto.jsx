import React, { useState } from "react";
import "./Views.css";

const Contacto = () => {
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

  const prevDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>¡Contactanos!</h1>
      <p>Completá los siguientes campos para enviarnos tu consulta.</p>
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
        <div>
          <textarea
            className="consulta"
            placeholder="escriba su consulta aquí"
          ></textarea>
        </div>
        <button type="submit" className="send" onClick={prevDefault}>
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Contacto;
