import React from "react";
import NewsBlocks from "../Components/News/NewsBlocks";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import dnaNews from "../assets/gene-banner.png";
export default function NewsPage() {
    const title1 = (
        <span>
          Leading the Biotech Revolution <br />
          in the Middle East
        </span>
      );
  return (
    <>
      <Header />
      <Hero bg={dnaNews} title="News and Updates" subTitle="" />
      <NewsBlocks />
      <Footer />
    </>
  );
}
