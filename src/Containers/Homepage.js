import React from "react";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import dnaClosely from "../assets/dna-closely.jpg";
import Hero from "../Components/Hero/Hero";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import Footer from "../Components/Footer/Footer";

export default function Homepage() {
  const title1 = (
    <span>
      Leading the Biotech Revolution <br />
      in the Middle East
    </span>
  );
  return (
    <>
      <Header />
      <Hero bg={dnaClosely} title={title1} subTitle="" />
      <AboutUs />
      <SectionContainer />
      <Footer />
    </>
  );
}
