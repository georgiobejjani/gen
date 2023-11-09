import React from "react";
import NewsBlocks from "../Components/News/NewsBlocks";
import Header from "../Components/Header/Header2";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import dnaBanner from "../assets/banners/dna-news.jpg";
import dnaNews from "../assets/banners/genNews.png"
export default function NewsPage() {
 
  return (
    <>
      <Header />
      <section className='heroSection'>
      <Hero bg={dnaBanner}/>
    <img src={dnaNews} alt='news gen' className='heroSection__caption newsLabel'/>
    </section>
      <NewsBlocks />
      <Footer />
    </>
  );
}
