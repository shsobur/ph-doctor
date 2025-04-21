import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";

const Routes = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Routes;
