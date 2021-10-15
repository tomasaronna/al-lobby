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

  const addGame = (title, platform, qty, price) => {
    const existingGame = cart.findIndex((game) => game.title === title);
    if (existingGame >= 0) {
      cart[existingGame] = {
        ...cart[existingGame],
        qty: cart[existingGame].qty + qty,
      };
    } else {
      setCart([
        ...cart,
        {
          title: title,
          platform: platform,
          qty: qty,
          price: price,
        },
      ]);
    }
  };

  const removeGame = (gameInCart) => {
    const existingGame = cart.findIndex(
      (game) => game.title === gameInCart.title
    );
    const cartCopy = Array.from(cart);
    if (existingGame >= 0) {
      cartCopy.splice(existingGame, 1);
      setCart(cartCopy);
    }
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
