import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";


const HomePageLayout = () => {
  return (
    <>
      <section>
        <Banner></Banner>
        <Doctors></Doctors>
      </section>
    </>
  );
};

export default HomePageLayout;