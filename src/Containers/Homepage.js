import React from "react";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import dnaClosely from "../assets/dna-closely.jpg";
import Hero from "../Components/Hero/Hero";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import Footer from "../Components/Footer/Footer";
import image1 from "../assets/IMG-20220927-WA0007-400x267.jpg";
import image2 from "../assets/MoUMinisterofIndustry-400x267.jpeg";
import image3 from "../assets/MawiDNA-Logo.png";
import genLogo from "../assets/logoWebsite.png";
import advisoryLogo from "../assets/partners/spireAdvisoryLogo.png";
import mawidnaNews from "../assets/mawiDnaNews.png";
import Prophase_logo from "../assets/partners/prophase_Logo.svg";
import Nebula_logo from "../assets/partners/nebula_Logo.png";
export default function Homepage() {
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
      <h4 className="test2">Our</h4>
      <div className="flexContainer">
        <div className="test1">
          <div className="test1__flexbox">
            <img src={image1} alt="image1" className="imagetest" />
            <img src={image2} alt="image1" className="imagetest" />
          </div>
          <p className="test1__paragraphe">
            September 26th, 2022 – We are delighted to announce that our partner
            Mawi DNA Technologies (Mawi), a medical device company focusing on
            the development of innovative technologies for biological sample
            collection announced today that it has signed Memorandum of
            Understanding (MoU) agreements with the Moroccan Ministry of
            Investment, Convergence and Public Policies as well as with the
            Moroccan Ministry of Industry and Commerce to explore a Joint
            Venture with Mawi’s local partner Biotessia to establish a state of
            the art manufacturing facility in Morocco to serve the African
            market.
            <a
              href="https://spireadvisorygroup.com/mawidna-and-its-moroccan-partner-biotessia-sign-2-mous-with-moroccan-government/"
              target="_blank"
            >
              more...
            </a>
          </p>
        </div>
        <div className="test1">
          <div className="test1__flexbox">
            <img src={image3} alt="image1" className="imagetest" />
          </div>
          <p className="test1__paragraphe">
            December 23rd, 2021 – SPIRE Advisory Group is delighted to announce
            that it has entered an agreement with Mawi DNA (www.mawidna.com) to
            position the company’s DNA and RNA collection kits with
            international partners in Africa and the Middle East.
          </p>
        </div>
        <div className="test1">
          <div className="test1__flexbox">
            <img src={genLogo} alt="image1" className="imagetest" />
            <img src={advisoryLogo} alt="image1" className="imagetest" />
          </div>
          <p className="test1__paragraphe">
            GEN and SPIRE ADVISORY GROUP Announce Strategic Partnership
            Agreement South Ct Palo Alto California~USA. GEN, a leading
            consulting company in genomics and biotechnology, is pleased to
            announce the signing of a strategic partnership agreement with SPIRE
            ADVISORY GROUP. This partnership aims to establish a strong
            connection between the two organizations, with the objective of
            addressing unmet needs in the Middle East, Africa, and Central Asia
            regions. Through this collaboration, GEN and SPIRE ADVISORY GROUP
            will work together to foster innovation and advance the field of
            genomics and biotechnology. By leveraging their respective expertise
            and resources, both organizations seek to make a meaningful impact
            in these regions, which are poised for significant growth and
            development in the life sciences sector. The strategic partnership
            agreement signifies a commitment to establishing an active presence
            in Middle East, Africa, and Central Asia, where GEN and SPIRE
            ADVISORY GROUP believe there are substantial opportunities for
            collaboration and addressing unmet needs in genomics and
            biotechnology. <br /> "We are thrilled to announce this strategic
            partnership with SPIRE ADVISORY GROUP," said Abboud Bejjani, CEO at
            GEN. "By combining our strengths, we aim to create a powerful
            network that will foster innovation, drive progress, and ultimately
            contribute to the advancement of genomics and biotechnology in the
            Middle East, Africa, and Central Asia."
            <br /> This partnership aligns with GEN's mission to transform lives
            through groundbreaking advancements in genomics testings and
            biotechnology. By establishing a link between innovators in this
            field, GEN and SPIRE ADVISORY GROUP aim to accelerate the
            development and adoption of cutting-edge solutions that will address
            unmet needs and improve healthcare outcomes in these regions.
            {/* <a
              href="https://spireadvisorygroup.com/mawidna-and-its-moroccan-partner-biotessia-sign-2-mous-with-moroccan-government/"
              target="_blank"
            >
              more...
            </a> */}
          </p>
        </div>
        <div className="test1">
          <div className="test1__flexbox">
            <img src={mawidnaNews} alt="image1" className="imagetest" />
          </div>
          <p className="test1__paragraphe">
            Today, collecting DNA seems pretty standard, but not everyone can
            produce and adequate amount of saliva and bacteria can contaminate
            the sample causing issues to arise downstream. Why did Mawi DNA
            Technologies create the iSWAB? To improve and simplify biological
            sample collection and allow for…
            <a
              href="https://www.mawidna.com/blog/got-dna-simplifying-the-first-step-in-genomic-testing/"
              target="_blank"
            >
              more...
            </a>
          </p>
        </div>
        <div className="test1">
          <div className="test1__flexbox">
            <img src={Prophase_logo} alt="image1" className="imagetest" />
          </div>
          <h5>Source: Prophase website</h5>
          <p className="test1__paragraphe">
            Garden City, NY, March 07, 2023 (GLOBE NEWSWIRE) -- ProPhase Labs,
            Inc. (NASDAQ: PRPH) (“ProPhase”), a growth oriented and diversified
            diagnostics, genomics and biotech company, today announced that its
            wholly owned subsidiary, Nebula Genomics, Inc. (“Nebula”), has
            introduced its lowest ever standard price of $249.00 for its
            direct-to-consumer (DTC) whole genome sequencing (WGS) DNA test.
            <a
              href="https://ir.prophaselabs.com/news-events/press-releases/detail/176/prophase-labs-nebula-genomics-subsidiary-introduces"
              target="_blank"
            >
              more...
            </a>
          </p>
        </div>
        <div className="test1">
          <div className="test1__flexbox">
            <img src={Nebula_logo} alt="image1" className="imagetest" />
          </div>
          <h5>Source: Nebula website:</h5>
          <p className="test1__paragraphe">
            Nebula Genomics, a rapidly growing and wholly owned subsidiary of
            ProPhase, focuses on genomics sequencing and testing technologies, a
            comprehensive method for analyzing entire genomes, including the
            genes and chromosomes in DNA. The data obtained from genomic
            sequencing may help to identify inherited disorders and tendencies,
            help predict disease risk, help identify expected drug response, and
            characterize genetic mutations, including those that drive cancer
            progression. The Company currently offers Nebula Genomics whole
            genome sequencing products direct-to-consumer online, with plans to
            sell in food, drug and mass (FDM) stores and to provide testing for
            universities conducting genomic research.
          </p>
        </div>
        <div className="test1">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/4kuYQwfmUTc?si=5BII8NFSKCRFvsaK"
            title="Stephen's Pretty Sure George Church Said He's Going To Live Forever"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <AboutUs />
      <SectionContainer />
      <Footer />
    </>
  );
}
