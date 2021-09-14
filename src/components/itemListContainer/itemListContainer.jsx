import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem";
import { query, collection, getDocs } from "firebase/firestore";
import db from "../Firebase/Firebase";

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  console.log(juegos);
  const data = [];
  const getDatos = async () => {
    const datos = query(collection(db, "games"));

    const querySnapshot = await getDocs(datos);
    querySnapshot.forEach((datos) => {
      data.push({ ...datos.data(), id: datos.id });
    });
    setJuegos(data);
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <div>
      {juegos.map((juego) => {
        return (
          <div>
            <CardItem key={juego.id} data={juego} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
