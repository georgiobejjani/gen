import React from 'react'
import { NewsObject } from '../../assets/NewsObject';
import News from './News';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function NewsBlocks() {
    const settings = {
        rows: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              rows: 1,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
        ],
      };
  return (
    <div className='newsBlocks'>
        <Slider {...settings}>

    {NewsObject.map((value) => {
        return (
          <News
            images={value.images}
            paragraphe={value.news}
            link={value.link}
            inPageLink={value.inPageLink}
            id={value.id}
            source={value.source}
          />
        );
      })}

      <div className="newsBlocks__Iframe">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/4kuYQwfmUTc?si=5BII8NFSKCRFvsaK"
          title="Stephen's Pretty Sure George Church Said He's Going To Live Forever"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      </Slider>

      </div>
  )
}
