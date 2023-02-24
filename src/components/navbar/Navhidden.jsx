import React from 'react'
import './Navhidden.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Navhidden.scss'


function Navhidden({ show }) {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
    variableWidth: true,
  };

  return (
      show ? <div className="hiddenBar hiddenMo">
          <div className="links">
            <Slider {...settings} >
              <div>Graphics & Design</div>
              <div>Digital Marketing</div>
              <div>Writing & Translation</div>
              <div>Video & Animation</div>
              <div>Music & Audio</div>
              <div>Programming & Tech</div>
              <div>Business</div>
              <div>divfestyle</div>
              <div>Ai Services <span className='new'>NEW</span></div>
            </Slider>
          </div>
        </div> : ""
  )
}

export default Navhidden