import React, { useState } from "react";
import mission_icon from "../../assets/icons/mission-icon.png";
import vission_icon from "../../assets/icons/vision-icon.png";
export default function AboutUs() {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    if (expand) {
      setExpand(false);
    } else setExpand(true);
  };
  return (
    <>
      <div className="aboutUs">
        <h4 className="aboutUs__title">About</h4>
        <div className="aboutUs__infowrapper">
          <p className="aboutUs__paragraphe">
            Nestled in the vibrant heart of Dubai, UAE, GEN emerges as a beacon
            of excellence within the pharmaceutical domain of the Middle East,
            Africa, and Central Area Regions. We are not just a pharmaceutical
            entity; we are a regional pillar, fervently navigating the expansive
            and ever-evolving terrain of specialty pharmaceutical services
            Recognizing the complex challenges that biotech companies encounter
            in delivering pioneering medical solutions to the most underserved
            regions is central to our values. This deep insight propels our
            mission: to overcome the evident access gaps in these locales.
            Beyond merely providing solutions, we forge impactful collaborations
            with biotech leaders, guaranteeing they have a solid commercial and
            manufacturing foundation.
          </p>
          <br/>
          <p className="aboutUs__paragraphe">
            Our dedication remains steadfast – a commitment to excellence, an
            unwavering drive for innovation, and a profound knowledge of the
            region. This places GEN in a unique light, poised to reshape the
            pharmaceutical landscape, ensuring transformative therapeutic
            breakthroughs are accessible to everyone.
          </p>
          <br/>
          <div
            className={"aboutUs__hidden " + [expand ? "expandContainer" : ""]}
          >
            <p className="aboutUs__paragraphe">
              The GEN network is unparalleled in its expanse and depth. It is
              meticulously designed to enable our partners to interconnect
              seamlessly, fostering rapid brainstorming and the crystallization
              of top-tier insights and recommendations. Our emphasis is on
              empowering entrepreneurs, and providing holistic support
              throughout a company's lifecycle. This involves tapping into our
              reservoir of seasoned entrepreneurs, equipped with a vast skill
              set spanning product development, strategy, management, marketing,
              business development, finance, operations, HR, and M&A. Moreover,
              our outreach is extensive. Introductions to prospective customers
              or partners become seamless, thanks to our vast connections,
              including C-level executive affiliations. Furthermore, GEN and its
              affiliates offer unparalleled access to capital. Whether through
              our Affiliate Network or GEN’s vast consortium of seed and
              early-stage investment firms, financial support is always within
              arm's reach for promising ventures.
            </p>
            <p className="aboutUs__paragraphe">
              Step into a future sculpted by pharmaceutical excellence and
              entrepreneurial brilliance. Step into the world of GEN.
            </p>
          </div>
          <button onClick={toggleExpand} className="aboutUs__morebutton">
            {expand ? "show less" : "show more"}
          </button>
        </div>
      </div>
      <div className="values-container">
        <div className="wrapper">
          <img src={mission_icon} alt="icon" className="wrapper__image" />
          <h4 className="wrapper__title mission">Our</h4>
          <p className="wrapper__paragraphe">
            To address the healthcare disparities in the Middle East, Africa,
            and Central Asia through strategic joint ventures, distribution
            channels, and local manufacturing opportunities. By connecting
            investors, innovators, and executors, we prioritize empowering
            biotech companies with state-of-the-art commercial and manufacturing
            capabilities. Our emphasis is on introducing cutting-edge
            technologies, particularly in the fields of genetics and biology,
            ensuring impactful solutions reach the region’s most in need.
          </p>
        </div>
        <div className="wrapper">
          <img src={vission_icon} alt="icon" className="wrapper__image" />
          <h4 className="wrapper__title vission">Our</h4>
          <p className="wrapper__paragraphe">
            To be recognized as the prime catalyst for pharmaceutical and
            entrepreneurial advancement in the Middle East, Africa, and Central
            Asia. GEN envisions a future where state-of-the-art therapeutic
            solutions, especially in genetics and biology, are not just
            available but are shaping the healthcare narrative. We aim to lead
            with innovation, ensuring every venture is primed for success, and
            addressing the distinct challenges of our focus regions.
          </p>
        </div>
      </div>
    </>
  );
}
