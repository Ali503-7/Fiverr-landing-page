import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import './Section_3.scss'

function Section_3({ setBgOpacty, BgOpacty }) {
  const h4 = [
    "The best for every budget",
    "Quality work done quickly",
    "Protected payments, every time",
    "24/7 support",
  ];

  const p = [
    "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    "Find the right freelancer to begin working on your project within minutes",
    "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    "Questions? Our round-the-clock support team is available to help anytime, anywhere.",
  ];

  function HandelBest() {
    const imgElements = [];

    for (let i = 0; i < h4.length; i++) {
      imgElements.push(
        <div className="best" key={p[i]}>
          <h4>
            <FontAwesomeIcon icon={faCircleCheck} /> {h4[i]}
          </h4>
          <p>{p[i]}</p>
        </div>
      );
    }

    return imgElements;
  }

  const toggleVideo = () => {
    setBgOpacty((pre) => !pre);
  };

  return (
    <section className="Seciton_3">
      <div className="contaner">
        <div className="leftSide">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="bestOfUs">{HandelBest()}</div>
        </div>
        <div className="vedioSide">
          <div className="img" onClick={toggleVideo}>
            <img src="../../../public/imgs/Section_3/selling-proposition-still-1400-x1.webp" />
          </div>
        </div>
        {BgOpacty ? (
          <div className="video" onClick={toggleVideo}>
            <video
              src="../../../public/video/vmvv3czyk2ifedefkau7.mp4"
              controls
            ></video>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Section_3