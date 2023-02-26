import React from "react";
import "./Section_4.scss";

function Section_4() {

  const imgs = [
    "../../../public/imgs/Section_4/graphics-design.d32a2f8.svg",
    "../../../public/imgs/Section_4/online-marketing.74e221b.svg",
    "../../../public/imgs/Section_4/writing-translation.32ebe2e.svg",
    "../../../public/imgs/Section_4/video-animation.f0d9d71.svg",
    "../../../public/imgs/Section_4/music-audio.320af20.svg",
    "../../../public/imgs/Section_4/programming.9362366.svg",
    "../../../public/imgs/Section_4/business.bbdf319.svg",
    "../../../public/imgs/Section_4/lifestyle.745b575.svg",
    "../../../public/imgs/Section_4/data.718910f.svg",
    "../../../public/imgs/Section_4/photography.01cf943.svg",
  ];

  const p = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Business",
    "Lifestyle",
    "Data",
    "Photography",
  ];

  function HandleMarket() {
    const imgElements = [];

    for (let i = 0; i < imgs.length; i++) {
      imgElements
        .push(
          <div className="feild" key={p[i]}>
            <img src={imgs[i]} />
            <p>{p[i]}</p>
          </div>
        );
    }

    return imgElements;
  }

  return (
    <section className="Section_4">
      <div className="contaner">
        <div className="header">
          <h1>Explore the marketplace</h1>
        </div>
        <div className="Marketplace">{HandleMarket()}</div>
      </div>
    </section>
  );
}

export default Section_4;
