import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Navhidden from "./Navhidden";
function Navbar({
  setSideBar,
  langu,
  setLangu,
  curancy,
  setCurancy,
  curancyLogo,
  setCurancyLogo,
}) {
  const [show, setShow] = useState(false);

  const handelShow = () => {
    return window.scrollY > 0 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelShow);

    return () => {
      window.removeEventListener("scroll", handelShow);
    };
  }, []);

  return (
    <header className={show ? "show" : ""}>
      <nav>
        <div className="container">
          <div className="topNav">
            <div className="right-side">
              <div id="toggleButton" className="Burger hiddenL">
                <img
                  src={
                    show
                      ? "imgs/Logos/hamburger-menu-icon-svg-15.jpg"
                      : "imgs/Logos/clipart1587307.png"
                  }
                  alt=""
                  onClick={() => setSideBar(true)}
                  id="toggleButton"
                />
              </div>

              <div className="logo">
                <span className="text">Fiverr</span>
                <span className="dot">.</span>
              </div>

              <div className="join_mobile">
                <button className={show ? "black" : ""}>Join</button>
              </div>
            </div>

            {show ? (
              <div className="searchBar hiddenMo">
                <input
                  type="text"
                  placeholder="What service are you looking for"
                  className="large"
                />
                <input
                  type="text"
                  placeholder="Find services"
                  className="small"
                />
                <div className="logo hiddenS">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="links">
              <span className="hiddenS FB">Fiverr Business</span>
              <span className="hiddenS">Explore</span>
              <span className="hiddenM">
                <FontAwesomeIcon icon={faGlobe} />
                {langu}
              </span>
              <span className="hiddenM">
                {curancyLogo}
                {curancy}
              </span>
              <span className="hiddenS">Become a Seller</span>
              <span className="hiddenMo">Sign in</span>
              <button className="hiddenMo">Join</button>
            </div>
          </div>
          <div className="botNav">
            <Navhidden show={show} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
