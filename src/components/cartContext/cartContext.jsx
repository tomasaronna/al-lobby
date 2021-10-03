import React, { useState, createContext } from "react";

export const cartContext = createContext();

export const GameProvider = ({ children }) => {
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

  return (
    <cartContext.Provider
      value={{ addGame, removeGame, cart, setCart, setCartQty, cartQty }}
    >
      {children}
    </cartContext.Provider>
  );
};
