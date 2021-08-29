import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/604b55c7-678e-4c04-8e3e-abe9ccbfee31")
      .then((response) => response.json())
      .then((data) => setJuegos(data));
  }, []);
  return (
    <div>
      {juegos.map((juego) => {
        return <CardItem key={juego.gameID} data={juego} />;
      })}
      ;
    </div>
  );
};

export default ItemListContainer;
