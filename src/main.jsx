import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ShopContextProvider } from "./context/shop-context/index2.jsx";
import { Provider } from "react-redux";
import store from "../src/store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </Provider>
  </StrictMode>
);
