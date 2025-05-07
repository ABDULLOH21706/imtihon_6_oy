import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Like from "../pages/likes";
import Shop from "../pages/shop";
import MainLayout from '../components/main-layout/index.jsx'
import Katalog from "../pages/katalog/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/katalog",
        element: <Katalog />,
      },
    ],
  },
]);
