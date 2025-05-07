import React, { createContext, useReducer } from "react";

export const ShopContext = createContext();

const initialState = {
  cart: [],
  likedProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_product":
      const exists = state.cart.find((item) => item.id === action.data.id);
      if (exists) return state;
      return {
        ...state,
        cart: [...state.cart, { ...action.data, amount: 1 }],
      };
    case "increase_amount":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.data.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case "decrease_amount":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.data.id && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item.filter((item) => item.amount > 0)
        ),
      };

    case "toggle_like":
      const isAlreadyLiked = state.likedProducts.some(
        (p) => p.id === action.data.id
      );
      return {
        ...state,
        likedProducts: isAlreadyLiked
          ? state.likedProducts.filter((p) => p.id !== action.data.id)
          : [...state.likedProducts, action.data],
      };

    default:
      return state;
  }
};

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
