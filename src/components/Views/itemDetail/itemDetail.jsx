import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ match }) => {
  const [juego, setJuego] = useState({});
  const juegoID = match.params.gameID;
  useEffect(() => {
    axios(
      `https://mocki.io/v1/604b55c7-678e-4c04-8e3e-abe9ccbfee31/${juegoID}`
    ).then((res) => setJuego(res.data));
  }, [juegoID]);

  return (
    <div className="detalle">
      <h1>{juego.name}</h1>
      <img src={juego.img} alt="Wallpaper del juego" />
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
