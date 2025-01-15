import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/*this will output the rest of page  */}
      <ToastContainer />
      {/* ToastContainer - Can be put anywhere in return as it's absolute positioned. */}
    </>
  );
};

export default MainLayout;
