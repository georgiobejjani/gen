import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import heroContact from "../assets/contactUs-banner.png";
import ContactUsItem from "../Components/ContactUs/ContactUsItem";
import ContactUsForm from "../Components/ContactUs/ContactUsForm";
import phoneIcon from "../assets/icons/phone-icon.png";
import emailIcon from "../assets/icons/email-icon.png";
import locationIcon from "../assets/icons/location-icon.png";
import Footer from "../Components/Footer/Footer";
export default function ContactUs() {
  return (
    <>
      <Header />
      <Hero
        bg={heroContact}
        title="contact us"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis
    scelerisque libero, a consectetur diam blandit id. Maecenas at nibh dui."
      />
      <div className="contactUs">
        <div className="contactUs__items">
          <ContactUsItem
            image={phoneIcon}
            label="Phone Number"
            value="+0123 456789 000"
          />
          <ContactUsItem
            image={emailIcon}
            label="Email Address"
            value="test@hotmail.com"
          />
          <ContactUsItem
            image={phoneIcon}
            label="Fax Address"
            value="+0123 456789 000"
          />
          <ContactUsItem
            image={locationIcon}
            label="Location"
            value="123Beirut, Lebanon"
          />
        </div>
        <ContactUsForm />
      </div>
      <Footer/>
    </>
  );
}
