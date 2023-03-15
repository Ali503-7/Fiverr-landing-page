import React, { useState } from "react";
import "./MeBall.scss";

function MeBall() {
  const [over, setOver] = useState(false);
  const [papper, setPapper] = useState(false);

  function toggleOver(pram) {
    setOver(pram);
  }

  function papperAction(time, Boolean) {
    setTimeout(() => {
      setPapper(Boolean);
    }, time);
  }

  function open() {
    toggleOver(true);
    papperAction(1000, true);
  }

  function close() {
    papperAction(10, false);
    setTimeout(() => {
      toggleOver(false);
    }, 1000);
  }

  const styleO = {
    width: "130px",
    marginLeft: "210px",
    padding: "5px 10px",
  };


  return (
    <div
      className="me-ball"
      onMouseEnter={() => open()}
      onMouseLeave={() => close()}
    >
      <img src="imgs/MeBall/Yow.png" alt="" />
      <div className="cont">
        <div
          className={over ? "papper push" : "papper"}
          style={papper ? styleO : null}
        >
          <div className="textcon">
            <p>
              Coded by{" "}
              <a href="https://github.com/Ali503-7" target="_blank">
                Ali Mohamed
              </a>
            </p>
            <p>
              Challenge by{" "}
              <a href="https://www.fiverr.com/?source=top_nav" target="_blank">
                Fiverr.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeBall;
