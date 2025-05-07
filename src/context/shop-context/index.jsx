import { createContext, useReducer } from "react";

const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add_product":
        if (state.data.find((value) => value.id === action.data.id)) {
          let updateData = state.data.map((value) => {
            if (value.id === action.data.id) {
              console.log("ok");
              console.log(value.count);
              return {
                ...value,
                count: value.count + 1,
                userPrice: (value.count + 1) * action.data.discount,
              };
            }
            return value;
          });
          localStorage.setItem("data", JSON.stringify(updateData));
          return { data: updateData };
        } else {
          let newData = {
            data: [
              ...state.data,
              { ...action.data, count: 1, userPrice: action.data.discount },
            ],
          };
          localStorage.setItem("data", JSON.stringify(newData.data));
          return newData;
        }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
