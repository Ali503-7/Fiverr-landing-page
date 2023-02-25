import React from 'react'
import Slider from 'react-slick';
import './section_2.scss'

function section_2() {
  const imgs = [
    '../../../public/imgs/Section_2 Slider/ai-artists-2x.webp',
    '../../../public/imgs/Section_2 Slider/logo-design-2x.webp',
    '../../../public/imgs/Section_2 Slider/wordpress-2x.webp',
    '../../../public/imgs/Section_2 Slider/voiceover-2x.webp',
    '../../../public/imgs/Section_2 Slider/animated-explainer-2x.webp',
    '../../../public/imgs/Section_2 Slider/social-2x.webp',
    '../../../public/imgs/Section_2 Slider/seo-2x.webp',
    '../../../public/imgs/Section_2 Slider/translation-2x.webp',
    '../../../public/imgs/Section_2 Slider/data-entry-2x.webp',
    '../../../public/imgs/Section_2 Slider/book-covers-2x.webp',
  ]

  const imgsP = [
    "Add talent to AI",
    "Build your brand",
    "Customize your site",
    "Share your message",
    "Engage your audience",
    "Reach more customers",
    "Unlock growth online",
    "Color your dreams",
    "Go global",
    "Learn your business",
    "Showcase your story",
  ];

  const imgsH4 = [
    "AI Artists",
    "Logo Design",
    "WordPress",
    "Voice Over",
    "Video Explainer",
    "Social Media",
    "SEO",
    "Illustration",
    "Translation",
    "Data Entry",
    "Book Covers",
  ];

  function HandelImgs() {
    const imgElements = [];

    for (let i = 0; i < 10; i++) {
      imgElements.push(
        <div className="imgContaner" key={i}>
          <div className="header">
            <p>{imgsP[i]}</p>
            <h4>{imgsH4[i]}</h4>
          </div>
          <div className="img">
            <img src={imgs[i]} />
          </div>
        </div>
      );
    }

    return imgElements;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="Section_2">
      <div className="contaner">
        <div className="header">
          <h1>Popular professional services</h1>
        </div>
        <div className="slider">
          <Slider {...settings}>{HandelImgs()}</Slider>
        </div>
      </div>
    </section>
  );
}

export default section_2