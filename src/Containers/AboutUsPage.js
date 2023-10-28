import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AboutUs from '../Components/AboutUs/AboutUs'
import Hero from '../Components/Hero/Hero'
import aboutUsBanner from '../assets/aboutus_Banner.jpg';
export default function AboutUsPage() {
  return (
    <>
    <Header/>
    <Hero bg={aboutUsBanner} title="Gen story" subTitle="shaping the future"/>
    <AboutUs/>
    <Footer/>
    </>
  )
}
