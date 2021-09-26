import React, { useState, useEffect } from "react";
import { query, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router";
import db from "../../Firebase/Firebase";
import ItemCount from "../../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = () => {
  const [selectedGame, setSelectedGame] = useState([]);
  const { id } = useParams();
  const data = [];
  const getDetail = async () => {
    const datos = query(collection(db, "games"));

    const querySnapshot = await getDocs(datos);
    querySnapshot.forEach((datos) => {
      data.push({ ...datos.data(), id: datos.id });
    });
    data.forEach((item) => {
      if (item.id === id) {
        setSelectedGame(item);
      }
    });
  };
  useEffect(() => {
    getDetail();
  }, [id]);
  console.log("DATA", selectedGame.stock);
  return (
    <>
      <div className="main">
        <img src={selectedGame.img} alt="wallpaper del juego" />
        <h1>{selectedGame.title}</h1>
        <h2>{selectedGame.price}</h2>
        <h3>Plataforma: {selectedGame.platform}</h3>
        <p>Pueden aplicarse cargos extra dependiendo el país</p>
      </div>
      <div className="additionalData">
        <p>{selectedGame.description}</p>
        <p>Modos de juego: {selectedGame.gameModes}</p>
        <p>{selectedGame.gameInfo}</p>
      </div>
      <h3>Stock: {selectedGame.stock}</h3>
      <ItemCount stock={selectedGame.stock} />
    </>
  );
};

export default ItemDetail;
