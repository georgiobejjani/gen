import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import genLogo from "../assets/logoWebsite.png";
import advisoryLogo from "../assets/partners/spireAdvisoryLogo.png";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function NewsPageItem() {
  const location = useLocation();
  const news = JSON.parse(location.state.newsGen);
  const [newsItem,setNewsItem] = useState([]);
  console.log("news", news);
  const id3News = (
    <span>
      GEN and SPIRE ADVISORY GROUP Announce Strategic Partnership Agreement
      South Ct Palo Alto California~USA. GEN, a leading consulting company in
      genomics and biotechnology, is pleased to announce the signing of a
      strategic partnership agreement with SPIRE ADVISORY GROUP. <br />
      This partnership aims to establish a strong connection between the two
      organizations, with the objective of addressing unmet needs in the Middle
      East, Africa, and Central Asia regions. <br />
      Through this collaboration, GEN and SPIRE ADVISORY GROUP will work
      together to foster innovation and advance the field of genomics and
      biotechnology. <br />
      By leveraging their respective expertise and resources, both organizations
      seek to make a meaningful impact in these regions, which are poised for
      significant growth and development in the life sciences sector. <br />
      The strategic partnership agreement signifies a commitment to establishing
      an active presence in Middle East, Africa, and Central Asia, where GEN and
      SPIRE ADVISORY GROUP believe there are substantial opportunities for
      collaboration and addressing unmet needs in genomics and biotechnology.{" "}
      <br />
      'We are thrilled to announce this strategic partnership with SPIRE
      ADVISORY GROUP,' said Abboud Bejjani, CEO at GEN. 'By combining our
      strengths, we aim to create a powerful network that will foster
      innovation, drive progress, and ultimately contribute to the advancement
      of genomics and biotechnology in the Middle East, Africa, and Central
      Asia.' <br />
      This partnership aligns with GEN's mission to transform lives through
      groundbreaking advancements in genomics testings and biotechnology. By
      establishing a link between innovators in this field, GEN and SPIRE
      ADVISORY GROUP aim to accelerate the development and adoption of
      cutting-edge solutions that will address unmet needs and improve
      healthcare outcomes in these regions.
    </span>
  );

  const inPageNews1 = [
    {
      id: 3,
      news: id3News,
      images: [genLogo, advisoryLogo],
      link: "",
      inPageLink: "",
    },
  ];

  useEffect(() => {
if(news===3) {
    setNewsItem(inPageNews1);
} else setNewsItem([]);
  },[news])
  
  return (
    <>
    <Header/>
      {newsItem ? newsItem.map((value) => {
        return (
            <div className="container">
             <div className="newsPageItem">
      <div className="newsPageItem__image-container">
        {value.images.map((value) => {
          return (
            <img src={value} alt="image1" className="newsPageItem__image" />
          );
        })}
      </div>
      <p className="newsPageItem__paragraphe">
        {value.news}
      </p>
    </div>
    </div>
        );
      }) : ''}
      <Footer/>
    </>
  );
}
