import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./Section_6.scss";

function Section_6({ S3SV, setS3SV }) {
  const [videoIndex, setVideoIndex] = useState(0)

  const imgs = [
    "imgs/Section_6/testimonial-video-still-naadam.webp",
    "imgs/Section_6/testimonial-video-still-rooted.webp",
    "imgs/Section_6/testimonial-video-still-lavender.webp",
    "imgs/Section_6/testimonial-video-still-haerfest.webp",
  ];

  const logos = [
    "imgs/Section_6/Logos/naadam-logo-x2.0a3b198.png",
    "imgs/Section_6/Logos/rooted-logo-x2.321d79d.png",
    "imgs/Section_6/Logos/lavender-logo-x2.89c5e2e.png",
    "imgs/Section_6/Logos/haerfest-logo-x2.03fa5c5.png",
  ];

  const names = [
    "Caitlin Tormey, Chief Commercial Officer",
    "Kay Kim, Co-Founder",
    "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
    "Tim and Dan Joo, Co-Founders",
  ];

  const Quote = [
    `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
    `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
    `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
    `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
  ];

  const video = [
    "video/Section_6/plfa6gdjihpdvr10rchl.mp4",
    "video/Section_6/yja2ld5fnolhsixj3xxw.mp4",
    "video/Section_6/rb8jtakrisiz0xtsffwi.mp4",
    "video/Section_6/bsncmkwya3nectkensun.mp4",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function ToggleVideo() {
    setS3SV((pre) => !pre);
  }
  

  function onClickF(index) {
    return setVideoIndex(index)
  }

  
  function HandleStorys() {
    const imgElements = [];

    for (let i = 0; i < imgs.length; i++) {
      imgElements.push(
        <div key={names[i]}>
          <div className="Storys">
            <div className="StoryVideo">
              <div
                className="vedioSide"
                onClick={() => ToggleVideo()}
                key={imgs[i]}
              >
                <picture className="img" onClick={() => onClickF(i)}>
                  <img src={imgs[i]} key={imgs[i]} />
                </picture>
              </div>
              <div className="right">
                <div className="Names">
                  <h5>
                    <span>{names[i]}</span>
                    <span>
                      <img src={logos[i]} />
                    </span>
                  </h5>
                </div>
                <div className="Qoulte">
                  <p>{Quote[i]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return imgElements;
  }


  return (
    <section className="Section_6">
      <div className="contaner">
        <Slider {...settings}>{HandleStorys()}</Slider>
        {S3SV ? (
          <div className="video" onClick={ToggleVideo}>
            <video src={video[videoIndex]} controls></video>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Section_6;
