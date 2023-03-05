import React from "react";
import "./Section_9.scss";
function Section_9() {
  const data = [
    [
      "imgs/Section_9/guide-start-online-business-552-x2.webp",
      "Start an online business and work from home",
      "A complete guide to starting a small business online",
    ],
    [
      "imgs/Section_9/guide-digital-marketing-552-x2.webp",
      "Digital marketing made easy",
      "A practical guide to understand what is digital marketing",
    ],
    [
      "imgs/Section_9/guide-create-a-logo-552-x2.webp",
      "Create a logo for your business",
      "A step-by-step guide to create a memorable business logo",
    ],
  ];

  function Handelbox() {
    const imgElements = [];

    for (let i = 0; i < data.length; i++) {
      imgElements.push(
        <div className="box">
          <picture className="img">
            <img src={data[i][0]} alt="" />
          </picture>
          <div className="textB">
            <h4>{data[i][1]}</h4>
            <p>{data[i][2]}</p>
          </div>
        </div>
      );
    }

    return imgElements;
  }

  return (
    <section className="Section_9">
      <div className="contaner">
        <div className="header">
          <h1>Fiverr guides</h1>
          <span>
            See More Guides
            <span>
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
              </svg>
            </span>
          </span>
        </div>
        <div className="boxes">{Handelbox()}</div>
      </div>
    </section>
  );
}

export default Section_9;
