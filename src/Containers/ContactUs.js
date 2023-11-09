import React from "react";
import Header from "../Components/Header/Header2";
import Hero from "../Components/Hero/Hero";
import contactBanner from "../assets/banners/contactUs-banner.jpg";
import ContactUsItem from "../Components/ContactUs/ContactUsItem";
import ContactUsForm from "../Components/ContactUs/ContactUsForm";
import phoneIcon from "../assets/icons/phone-icon.png";
import emailIcon from "../assets/icons/email-icon.png";
import Footer from "../Components/Footer/Footer";
export default function ContactUs() {
  return (
    <>
      <Header />
      <Hero
        bg={contactBanner}
      />
      <div className="contactUs">
        <div className="contactUs__items">
          <ContactUsItem
            image={phoneIcon}
            label="Phone Number"
            value="+971 50 4511816"
          />
          <ContactUsItem
            image={emailIcon}
            label="Email Address"
            value="contact-us@gen-mea.com"
          />
        </div>
        <ContactUsForm />
      </div>
      <Footer/>
    </>
  );
}
