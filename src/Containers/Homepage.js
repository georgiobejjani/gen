import React from "react";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import dnaClosely from "../assets/gene-banner.png";
import Hero from "../Components/Hero/Hero";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import Footer from "../Components/Footer/Footer";
import NewsBlocks from "../Components/News/NewsBlocks";
export default function Homepage() {
 
  return (
    <>
      <Header />
      <Hero bg={dnaClosely} title="Leading the Biotech Revolution" subTitle="In the Middle East" />
      <h4 className="test2">Our</h4>
      <NewsBlocks/>
      <AboutUs />
      <SectionContainer />
      <Footer />
    </>
  );
}
