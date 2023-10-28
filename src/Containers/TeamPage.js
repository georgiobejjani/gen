import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import TeamCard from '../Components/TeamCard/TeamCard'
import ceo_Photo from "../assets/abboudBejjaniTeam.png";
import VP from "../assets/hichamJorioTeam.png";
import investor from "../assets/linaAnwarTeam.png";
import Hero from '../Components/Hero/Hero';
import TeamBanner from '../assets/ourteam_Banner.jpg';
export default function TeamPage() {
  return (
    <>
    <Header/>
    <Hero bg={TeamBanner} title='Bridging Brilliance' subTitle="The GEN team" />

    <div className="sectionContainer__team">
            <TeamCard
              teamText="Managing Partner at Infomed – Life & Healthcare  Division"
              networkText="Board member at Julphar Pharmaceutical;
        Lead consultant for GLG and Guidepoint Middle East Region"
              peopleText="Co-Direcotr  of Harvard Healthcare Association – ME Chapter"
              experienceText="Brings over 30 years of experience, with a  successful track record at renowned Corporations like VP Abbvie, Abbott and Arthur Anderson"
              img={ceo_Photo}
              profile="https://www.linkedin.com/in/abboud-bejjani-971504511816?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
              profile="https://www.linkedin.com/in/hichamjorio?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              name="Hicham Jorio"
              role="VP Business Development"
            />
            <TeamCard
              teamText="Co-founder of NassihaCom, 1st  administration & public policy advisory  ﬁrm in Morocco"
              networkText="BA from McGill University in Poli Sci &  MSc In Business Management from  Boston University."
              peopleText="Investor Relations Director at Mawitessia"
              experienceText="Former fraud analyst expert at CIBC in  Canada & Former strategy consultant for  Azenta Life Sciences, Silicon Valley Bank & U.S Bank."
              img={investor}
              profile="https://www.linkedin.com/in/lina-anwar-8b4543171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              name="Lina Anwar"
              role="Investor Relations Director"
            />
          </div>
    <Footer/>
    </>
  )
}
