import React from "react";
import Navbar from "../navbar/index.jsx"
import { Outlet } from "react-router-dom";
import Footer from "../footer/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <ToastContainer position="top-right" autoClose={2000} />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
