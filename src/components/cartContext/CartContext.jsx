import React, { useState, createContext, useContext } from "react";
import { query, collection, getDocs } from "firebase/firestore";
import db from "../Firebase/Firebase";
import { useParams } from "react-router";
import CardItem from "../CardItem/CardItem";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState();

  const addGame = (data, qty) => {
    const existingGame = cart.findIndex((game) => game.id === data.id);
    if (existingGame >= 0) {
      setCart(
        cart.map((game, index) => {
          if (index === existingGame) {
            return { ...cart[existingGame], qty: cart[existingGame].qty + qty };
          }
          return game;
        })
      );
    } else {
      setCart([...cart, { ...data, qty }]);
    }
  };

  const removeGame = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  const [generos, setGeneros] = useState([]);
  const { genre } = useParams();

  const gameFilter = async () => {
    const datos = query(collection(db, "games").where("genre", "==", "rol"));
    const info = [];
    const querySnapshot = await getDocs(datos);
    querySnapshot.forEach((datos) => {
      info.push({ ...datos.data(), id: datos.id });
    });
    info.forEach((game) => {
      if (game.genre === genre) {
        setGeneros(info);
        return <CardItem />;
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        addGame,
        removeGame,
        cart,
        setCart,
        setCartQty,
        cartQty,
        gameFilter,
        generos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
