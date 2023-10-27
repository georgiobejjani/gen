import React, { useEffect, useState } from "react";
import mawiLogo from "../assets/partners/mawilogo.gif";
import dnamitoLogo from "../assets/partners/dnamitoLogo.png";
import dxnowLogo from "../assets/partners/dxnowLogo-removebg-preview.png";
import hopeaiLogo from "../assets/partners/hopeAiLogo.png";
import spireadvisoryLogo from "../assets/partners/spireAdvisoryLogo.png";
import PartnerCard from "../Components/PartnerCard/PartnerCard";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import dnaClosely from "../assets/dna-closely.jpg";
export default function Partners() {
  const [active, setActive] = useState(1);
  const [page, setPage] = useState();
  const partnersGroup = [
    { name: "Spire Advisory Group", id: 1 },
    { name: "MAWI-DNA", id: 2 },
    { name: "HOPE AI", id: 3 },
    { name: "DNAmito", id: 4 },
    { name: "DxNow", id: 5 },
  ];
  const mawi = (
    <span>
      MawiDNA is a United States based company developing unique biosample
      collection technologies enabling universal sample collection from any
      population segment including animals, that also allow samples to be
      transported and stored at room temperature. <br />
      The innovative design of our iSWAB™ biosample collection products allow
      for release of cells captured from almost any swab into a proprietary
      buffer. <br />
      iSWAB samples can be used for simple or complex applications in
      multiomics-based analysis.The company has overcome the problems of low
      recovery, high bacterial content, low quality DNA, and excessive
      resampling costs common to most current sample collection methods.
    </span>
  );
  const dnamito = (
    <span>
      DNAmito enables precise cancer treatment through its proprietary DNA
      technology and cloud platform. <br />
      Their products leverage existing and open standards in the industry.{" "}
      <br />
      DNAmito is vendor agnostic.
    </span>
  );
  const hopeai = (
    <span>
      Hope Artificial Intelligence Inc. (HopeAI.org), is a 501(c)(3) nonprofit
      corporation focusing on offering secure and scalable online learning to
      incarcerated students in the US prison system for technical career courses
      and professional certifications to optimize re-entry in society.
    </span>
  );
  const dxnow = (
    <span>
      DxNow is combining novel, portable bio-imaging systems with
      microfluidic-based consumables for life science applications leveraging
      exclusively licensed technologies developed in the Demirci Bio-Acoustic
      MEMS in Medicine Labs (BAMM Labs) at Harvard Medical School/Brigham &
      Women’s Hospital and Stanford Medicine. <br />
      Their initial products address significant market needs in fertility
      clinics and forensics labs.
    </span>
  );
  const spireGroup = (
    <span>
      The SPIRE Advisory partners have extensive and complementary experience in
      business strategy for start-ups and midsize companies looking for
      strategic partnerships and global exposure. <br />
      The SPIRE Advisory Network is a group of dedicated equity partners who
      work together in a closed network, serving companies as international
      consultants, advisors and board members. <br />
      Spire Advisory facilitates key transitions across a company’s lifecycle.{" "}
      <br />
      The SPIRE Advisory expertise spans from the life science field to
      Agroscience, but also includes AI, DeepTech and blockchain through a wide
      network of experts in the San Francisco Bay Area as well as strategically
      located worldwide. <br />
      The unique SPIRE Advisory model enables our partners to quickly connect
      with each other and to efficiently develop the best insights and
      recommendations.
    </span>
  );
  useEffect(() => {
    switch (active) {
      case 1: {
        setPage(
          <PartnerCard image={spireadvisoryLogo} paragraphe={spireGroup} />
        );
        break;
      }
      case 2: {
        setPage(<PartnerCard image={mawiLogo} paragraphe={mawi} />);
        break;
      }
      case 3: {
        setPage(<PartnerCard image={hopeaiLogo} paragraphe={hopeai} />);
        break;
      }
      case 4: {
        setPage(<PartnerCard image={dnamitoLogo} paragraphe={dnamito} />);
        break;
      }
      case 5: {
        setPage(<PartnerCard image={dxnowLogo} paragraphe={dxnow} />);
        break;
      }
      default: {
        setPage(<PartnerCard image={mawiLogo} paragraphe={mawi} />);
        break;
      }
    }
  }, [active]);
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

      <div className="partners-page">
        <ul className="partners-page__menu">
          {partnersGroup.map((value) => {
            return (
              <li
                className={
                  "partners-page__menuItem " +
                  [active === value.id ? "activatedItem" : ""]
                }
                onClick={() => setActive(value.id)}
              >
                {value.name}
              </li>
            );
          })}
        </ul>
        {page}
      </div>
      <Footer />
    </>
  );
}
