import React from "react";
import CapabilitiesItem from "../Components/CapabilitiesItem/CapabilitiesItem";
import finance_icon from "../assets/capabilities/finance.png";
import hr_icon from "../assets/capabilities/hr.png";
import it_icon from "../assets/capabilities/it.png";
import legal_icon from "../assets/capabilities/legal-and-compliance.png";
import market_icon from "../assets/capabilities/market-access.png";
import medical_icon from "../assets/capabilities/medical-affairs.png";
import pharmaco_icon from "../assets/capabilities/Pharmacovigilance.png";
import quality_icon from "../assets/capabilities/quality.png";
import sales_icon from "../assets/capabilities/sales-and-marketing.png";
import supplychain_icon from "../assets/capabilities/supplychain-and-logistics.png";
import Header from "../Components/Header/Header2";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import capabilitiesBanner from "../assets/banners/capabilities-banner.jpg";
import capabilitesLabel from "../assets/banners/genCapabilities.png";
export default function Capabilities() {
  const capabilitiesObject = [
    { title: "finance", image: finance_icon },
    { title: "human Resources", image: hr_icon },
    { title: "information technology", image: it_icon },
    { title: "legal & compliance", image: legal_icon },
    { title: "market access", image: market_icon },
    { title: "medical affairs", image: medical_icon },
    { title: "pharmacovigilance", image: pharmaco_icon },
    { title: "quality", image: quality_icon },
    { title: "sales & marketing", image: sales_icon },
    { title: "supply chain & logistics", image: supplychain_icon },
  ];
  return (
    <>
      <Header />
      <section className="heroSection">
        <Hero bg={capabilitiesBanner} />
        <img
          src={capabilitesLabel}
          alt="capabilities gen"
          className="heroSection__caption capabilitiesLabel"
        />
      </section>{" "}
      <div className="capabilities">
        {capabilitiesObject.map((value, index) => {
          return (
            <CapabilitiesItem
              key={index}
              image={value.image}
              title={value.title}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
