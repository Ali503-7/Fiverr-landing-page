import React, { useEffect, useState } from "react";
import "./section-1.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Section_1() {
  const [imageIndex, setImageIndex] = useState({
    one: 1,
    two: 0,
    tree: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setImageIndex({
          one: 0,
          two: 1,
          tree: 0,
        });
      }, 0);
      setTimeout(() => {
        setImageIndex({
          one: 0,
          two: 0,
          tree: 1,
        });
      }, 5000);
      setTimeout(() => {
        setImageIndex({
          one: 1,
          two: 0,
          tree: 0,
        });
      }, 10000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="section_1">
      <div className="contaner">
        <div className="backgroundImgs">
          <div
            className="hero00 hero"
            style={imageIndex.one ? { opacity: "1" } : { opacity: "0" }}
          >
            <span className="Names star">
              Moon, <b>Marketing Export</b>
            </span>
          </div>
          <div
            className="hero01 hero"
            style={imageIndex.two ? { opacity: "1" } : { opacity: "0" }}
          >
            <span className="Names">
              Zack, <b>Bar Owner</b>
            </span>
          </div>
          <div
            className="hero02 hero"
            style={imageIndex.tree ? { opacity: "1" } : { opacity: "0" }}
          >
            <span className="Names star">
              Valentina, <b>Ai Artist</b>
            </span>
          </div>
        </div>

        <div className="landing">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="input">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input type="text" />
            </div>
            <button>Search</button>
          </div>
          <div className="Pop hiddenM">
            <p>Popular:</p>
            <span className="Popslist">Website Design</span>
            <span className="Popslist">WordPress</span>
            <span className="Popslist">Logo Design</span>
            <span className="Popslist">Ai Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_1;
