import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Service from "../Service/Service";


const HomePageLayout = () => {
  return (
    <>
      <section>
        <Banner></Banner>
        <Doctors></Doctors>
        <Service></Service>
      </section>
    </>
  );
};

export default HomePageLayout;