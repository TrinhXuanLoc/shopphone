import React from 'react'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      appendDots: (dots) => {
        return <ul style={{margin:"0px"}}>{dots}</ul>
      },
    };
  return (
    <>
    <Slider {...settings}>
    {
      Sdata.map((value, index) => {
        return (
          <div className="box d_flex " key={index}>
            <div className="left">
            </div>
            <div className="right">
              <img src={value.cover} alt="" />
            </div>
          </div>
        )
      })
    }
    </Slider>
    </>
  )
}

export default SlideCard