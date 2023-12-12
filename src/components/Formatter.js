import React from "react";
import { Outlet } from "react-router";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Footer from "./Footer";
import Header from "./Header";

function Formatter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Formatter;
