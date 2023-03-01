import React from "react";
import "./Section_10.scss";
function Section_10() {
  return (
    <section className="Section_10">
      <div className="contaner">
        <div className="BG">
          <picture>
            <source
              media="(max-width: 1150px)"
              srcset="../../../public/imgs/Section_10/Tablet/bg-signup-1160-x1.webp"
            />
            <img
              src="../../../public/imgs/Section_10/descktop/bg-signup-1400-x1.webp"
              alt=""
            />
          </picture>
        </div>
        <div className="signUp">
          <h1>
            Find the <span>talent </span>
            needed to get your business <span>growing</span>.
          </h1>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Section_10;
