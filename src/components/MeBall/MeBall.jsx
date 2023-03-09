import React, {useState} from "react";
import "./MeBall.scss";

function MeBall() {
  const [over, setOver] = useState(false);

  function toggleOver() {
    setOver((pre) => !pre);
  }
  return (
    <div className="me-ball" onMouseOver={() => toggleOver()}>
      <img src="imgs/MeBall/Yow.png" alt="" />
      <div className="cont">
        
      <div className={over ? "papper active animation" : "papper"}>
        <p>
          Coded by{" "}
          <a href="google.com" target="_blank">
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
  );
}

export default MeBall;
