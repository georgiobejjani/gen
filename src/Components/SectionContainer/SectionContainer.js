import React, { useState } from "react";
import TeamCard from "../TeamCard/TeamCard";
import ceo_Photo from "../../assets/abboudBejjaniTeam.png";
import VP from "../../assets/hichamJorioTeam.png";
import investor from "../../assets/linaAnwarTeam.png";
import mawiLogo from "../../assets/partners/mawilogo.gif";
import dnamitoLogo from "../../assets/partners/dnamitoLogo.png";
import dxnowLogo from "../../assets/partners/dxnowLogo-removebg-preview.png";
import hopeaiLogo from "../../assets/partners/hopeAiLogo.png";
import spireadvisoryLogo from "../../assets/partners/spireAdvisoryLogo.png";
import { Link } from "react-router-dom";
export default function SectionContainer() {
  const [showAllContent, setShowAllContent] = useState(false);

  const toggleExpand = () => {
    if (showAllContent) {
      setShowAllContent(false);
    } else setShowAllContent(true);
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 300">
        <path
          fill="#eeeeee"
          d="M0,64L80,90.7C160,117,320,171,480,197.3C640,224,800,224,960,208C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="sectionContainer">
        <div className="sectionContainer__team">
          <h4 className="sectionContainer__title">Our Management</h4>
          <div className="sectionContainer__teamInfo">
            <p className="sectionContainer__paragraphe">
              At the strategic intersection of healthcare, technology, and
              investment, GEN stands tall. Rooted in the dynamic metropolis of
              Dubai, GEN embodies a collective of visionary professionals, and
              luminaries in their respective domains. With a deep understanding
              of business structures and an intricate knowledge of the Middle
              East and Africa Region, our team's prowess is magnified by their
              prior affiliations with premier companies and universities,
              especially from the USA. This vast network acts as a catalyst,
              pushing the boundaries of what's achievable and setting new
              benchmarks for industry excellence.
            </p>
            <br />
            <p className="sectionContainer__paragraphe">
              The heart of GEN beats with its rich heritage and steadfast ethos.
              Our equity partners, a blend of mentors and specialists, bring
              together their expansive expertise from the fields of health
              sciences, agriscience, and technology. More than just a team, this
              integrated ensemble dedicates itself to globally uplifting
              businesses, serving as astute consultants, advisors, and board
              members. Their shared vision is clear: to shepherd companies
              through their pivotal moments, ensuring each transition is
              executed to perfection.
            </p>
            <div
              className={
                "sectionContainer__hidden " + [showAllContent ? "expandContainer" : ""]
              }
            >
              <p className="sectionContainer__paragraphe">
                The reach of GEN is unparalleled. Our team's experience is
                reflected in their past and current associations with renowned
                academic institutions like Harvard, McGill, and UCSF, and with
                corporate giants such as Philips Medical Systems, Covidien,
                Abbvie, GE, and Abbott. Over the years, GEN's seasoned
                professionals have held esteemed positions across a spectrum of
                domains, including Finance, Commercial, and other significant
                ventures. Their impact is evident, whether in leading
                transformative IPOs, facilitating game-changing acquisitions, or
                propelling businesses to the zenith of their potential.
              </p>
              <br/>
              <p className="sectionContainer__paragraphe">
                The leadership at GEN is a true reflection of this illustrious
                legacy. Encompassing a vast spectrum of experience from health
                sciences, agriscience, to technology, they resonate deeply with
                GEN's mission. The GEN network, a tapestry of interconnected
                brilliance, promotes an environment ripe for swift, top-tier
                insights and strategic recommendations.Step into the world of
                GEN, where the journey towards excellence isn't a destination
                but an inherent ethos. Welcome to the GEN legacy.
              </p>
            </div>
            <button
              onClick={toggleExpand}
              className="sectionContainer__morebutton"
            >
              {showAllContent ? "show less" : "show more"}
            </button>
          </div>
          <div className="sectionContainer__team">
            <TeamCard
              teamText="Managing Partner at Infomed – Life & Healthcare  Division"
              networkText="Board member at Julphar Pharmaceutical;
        Lead consultant for GLG and Guidepoint Middle East Region"
              peopleText="Co-Direcotr  of Harvard Healthcare Association – ME Chapter"
              experienceText="Brings over 30 years of experience, with a  successful track record at renowned Corporations like VP Abbvie, Abbott and Arthur Anderson"
              img={ceo_Photo}
              name="Aboud Bejjani"
              role="Chief Executive Officer"
            />
            <TeamCard
              teamText="Managing Partner at SPIRE Advisory,  providing strategic assistance to  enterprises;
        Lead consultant for GLG and Guidepoint Middle East Region"
              peopleText="Co-founder of biotech company Biotessia."
              experienceText="Former IBM Director of Strategic  Partnerships, specializing in AI and early  skin cancer detection."
              networkText="Co-founder of Mawitessia, a JV initiative  with Mawi DNA & Biotessia aimed for the  African market"
              img={VP}
              name="Hicham Jorio"
              role="VP Business Development"
            />
            <TeamCard
              teamText="Co-founder of NassihaCom, 1st  administration & public policy advisory  ﬁrm in Morocco"
              networkText="BA from McGill University in Poli Sci &  MSc In Business Management from  Boston University."
              peopleText="Investor Relations Director at Mawitessia"
              experienceText="Former fraud analyst expert at CIBC in  Canada & Former strategy consultant for  Azenta Life Sciences, Silicon Valley Bank & U.S Bank."
              img={investor}
              name="Lina Anwar"
              role="Investor Relations Director"
            />
          </div>
        </div>
        <div className="sectionContainer__partners">
          <h4 className="sectionContainer__titlepartners">Our Esteemed</h4>
          <Link to="/partners" className="sectionContainer__subButton">
            Learn More
          </Link>
          <div className="sectionContainer__wrapper">
            <a href="https://spireadvisorygroup.com/" target="_blank" rel="noreferrer">
            <img
              src={spireadvisoryLogo}
              alt="partnerLogo"
              className="sectionContainer__image"
            />
            </a>
            <a href="https://hopeai.org/" target="_blank" rel="noreferrer">
            <img
              src={hopeaiLogo}
              alt="partnerLogo"
              className="sectionContainer__image"
            />
            </a>
            <a href="https://www.zymotfertility.com/" target="_blank" rel="noreferrer">
            <img
              src={dxnowLogo}
              alt="partnerLogo"
              className="sectionContainer__image"
            />
            </a>
            <a href="https://dnamito.com/" target="_blank" rel="noreferrer">
            <img
              src={dnamitoLogo}
              alt="partnerLogo"
              className="sectionContainer__image"
            />
            </a>
            <a href="https://www.mawidna.com/" target="_blank" rel="noreferrer">
            <img
              src={mawiLogo}
              alt="partnerLogo"
              className="sectionContainer__image"
            />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
