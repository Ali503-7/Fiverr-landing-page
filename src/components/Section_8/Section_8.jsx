import React from "react";
import Slider from "react-slick";
import "./Section_8.scss";

function Section_8() {
  const imgsD = [
    "imgs/Section_8/descktop/annapietrangeli.webp",
    "imgs/Section_8/descktop/bruno_malagrino.webp",
    "imgs/Section_8/descktop/christophbrandl (1).webp",
    "imgs/Section_8/descktop/eveeelin.webp",
    "imgs/Section_8/descktop/fernandobengua.webp",
    "imgs/Section_8/descktop/lamonastudio-img.webp",
    "imgs/Section_8/descktop/mijalzagier.webp",
    "imgs/Section_8/descktop/noneyn.webp",
    "imgs/Section_8/descktop/passionshake.webp",
    "imgs/Section_8/descktop/skydesigner.webp",
    "imgs/Section_8/descktop/spickex.webp",
  ];

  const imgsM = [
    "imgs/Section_8/Mobile/annapietrangeli (1).webp",
    "imgs/Section_8/Mobile/bruno_malagrino (1).webp",
    "imgs/Section_8/Mobile/christophbrandl.webp",
    "imgs/Section_8/Mobile/eveeelin (1).webp",
    "imgs/Section_8/Mobile/fernandobengua (1).webp",
    "imgs/Section_8/Mobile/lamonastudio-img (1).webp",
    "imgs/Section_8/Mobile/mijalzagier (1).webp",
    "imgs/Section_8/Mobile/noneyn (1).webp",
    "imgs/Section_8/Mobile/passionshake (1).webp",
    "imgs/Section_8/Mobile/skydesigner (1).webp",
    "imgs/Section_8/Mobile/spickex (1).webp",
  ];

  const ProfileImg = [
    "imgs/Section_8/ProfileImg/1d531e54-7607-4bdb-815f-088dbc0fb971.webp",
    "imgs/Section_8/ProfileImg/AF1BF970-07CA-454B-8AF1-2F3E06838C8B.webp",
    "imgs/Section_8/ProfileImg/6b4a9867-ad06-415f-b307-11177ae30fdd.webp",
    "imgs/Section_8/ProfileImg/f79ede47-da5f-440a-bf23-57ed9ef7d363.webp",
    "imgs/Section_8/ProfileImg/db111eb4-c119-42b4-9a1d-9116601f3d22.webp",
    "imgs/Section_8/ProfileImg/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.webp",
    "imgs/Section_8/ProfileImg/750ccab0-8a64-4c91-b9a4-d10039dbf79c.webp",
    "imgs/Section_8/ProfileImg/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.webp",
    "imgs/Section_8/ProfileImg/74e5ab33-a5fc-40ae-9cee-a91b23e80237.webp",
    "imgs/Section_8/ProfileImg/2bb8af3c-4cce-42a8-a699-f11177524084.webp",
    "imgs/Section_8/ProfileImg/fiverr_profile.webp",
  ];

  const feildAndBy = [
    ["Book Design", "by annapietrangeli"],
    ["Logo Desgin", "by bruno_malagrino"],
    ["Illustration", "by christophbrandl"],
    ["Logo Desgin", "by eveeelin"],
    ["Social Media Design", "by fernandobengua"],
    ["Animated GIFs", "by lamonastudio"],
    ["Packaging Design", "by mijalzagier"],
    ["Portraits & Caricatures", "by noneyn"],
    ["Product Photography", "by passionshake"],
    ["Web & Mobile Design", "by skydesigner"],
    ["Flyer Design", "by spickex"],
  ];

  function HandleMarket() {
    const imgElements = [];

    for (let i = 0; i < imgsD.length; i++) {
      imgElements.push(
        <div className="Person" key={imgsD[i]}>
          <picture className="img">
            <source media="(max-width: 600px)" srcset={imgsM[i]} />
            <img src={imgsD[i]} alt="" />
          </picture>
          <div className="profile">
            <div className="left">
              <img src={ProfileImg[i]} alt="" />
            </div>
            <div className="right">
              <h4>{feildAndBy[i][0]}</h4>
              <h5>{feildAndBy[i][1]}</h5>
            </div>
          </div>
        </div>
      );
    }

    return imgElements;
  }

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Section_8">
      <div className="contaner">
        <Slider {...settings}>{HandleMarket()}</Slider>
      </div>
    </section>
  );
}

export default Section_8;
