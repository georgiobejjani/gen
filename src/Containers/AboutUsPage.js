import React from 'react'
import Header from '../Components/Header/Header2'
import Footer from '../Components/Footer/Footer'
import AboutUs from '../Components/AboutUs/AboutUs'
import Hero from '../Components/Hero/Hero'
import aboutBanner from '../assets/banners/about-banner.jpg';
import aboutGen from '../assets/banners/genStory.png';
export default function AboutUsPage() {
  return (
    <>
    <Header/>
    <section className='heroSection'>
    <Hero bg={aboutBanner}/>
    <img src={aboutGen} alt='about gen' className='heroSection__caption'/>
    </section>
    <AboutUs/>
    <Footer/>
    </>
  )
}
