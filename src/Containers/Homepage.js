import React from "react";
import Header from "../Components/Header/Header2";
import AboutUs from "../Components/AboutUs/AboutUs";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import Footer from "../Components/Footer/Footer";
import NewsBlocks from "../Components/News/NewsBlocks";
import homepageVideo from '../assets/banners/homepageVideo.mp4';
export default function Homepage() {
 
  return (
    <>
      <Header />
      <section className="header-video">
      <video muted="true" autoplay="{true}" playsinline="" loop="{true}">
        <source src={homepageVideo} type="video/mp4" />
      </video>
      </section>
      <h4 className="homepageHeader">Our</h4>
      <NewsBlocks/>
      <AboutUs />
      <SectionContainer />
      <Footer />
    </>
  );
}
