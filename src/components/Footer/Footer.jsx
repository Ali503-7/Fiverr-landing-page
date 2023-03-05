import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"; // <-- import styles to be used
import {
  faAngleDown,
  faDollar,
  faGlobe,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
function Footer() {
  const [categories, setCategories] = useState(false);
  const [about, setAbout] = useState(false);
  const [support, setSupport] = useState(false);
  const [community, setCommunity] = useState(false);
  const [MFV, setMFV] = useState(false);

  const toogleit = (e) => {
    const grow = () => {
      e.target.parentNode.parentNode.style.height = getComputedStyle(
        e.target.parentNode.parentNode.children[1]
      ).height;
    };

    const chrenk = () => {
      e.target.parentNode.parentNode.style.height = getComputedStyle(
        e.target.parentNode.parentNode.children[0]
      ).height;
    };
    if (e.target.id == "Categories") {
      setCategories((pre) => !pre);
      if (categories) {
        grow();
      } else {
        chrenk();
      }
    } else if (e.target.id == "About") {
      setAbout((pre) => !pre);
      if (about) {
        grow();
      } else {
        chrenk();
      }
    } else if (e.target.id == "Support") {
      setSupport((pre) => !pre);
      if (support) {
        grow();
      } else {
        chrenk();
      }
    } else if (e.target.id == "Community") {
      setCommunity((pre) => !pre);
      if (community) {
        grow();
      } else {
        chrenk();
      }
    } else if (e.target.id == "More From Fiverr") {
      setMFV((pre) => !pre);
      if (MFV) {
        grow();
      } else {
        chrenk();
      }
    }
  };

  const footData = {
    Categories: [
      "Categories",
      [
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "Music & Audio",
        "Programming & Tech",
        "Data",
        "Business",
        "Lifestyle",
        "Photography",
        "Sitemap",
      ],
    ],
    About: [
      "About",
      [
        "Careers",
        "Press & News",
        "Partnerships",
        "Privacy Policy",
        "Terms of Service",
        "Intellectual Property Claims",
        "Investor Relations",
      ],
    ],
    Support: [
      "Support",
      [
        "Help & Support",
        "Trust & Safety",
        "Selling on Fiverr",
        "Buying on Fiverr",
      ],
    ],
    Community: [
      "Community",
      [
        "Customer Success Stories",
        "Community hub",
        "Forum",
        "Events",
        "Blog",
        "Influencers",
        "Affiliates",
        "Podcast",
        "Invite a Friend",
        "Become a Seller",
        "Community Standards",
      ],
    ],
    MoreFromFiverr: [
      "More From Fiverr",
      [
        "Fiverr Business",
        "Fiverr Pro",
        "Fiverr Logo Maker",
        "Fiverr Guides",
        "Get Inspired",
        "Fiverr Select",
        ["ClearVoice", "Content Marketing"],
        ["Fiverr Workspace", "Invoice Software"],
        ["Learn", "Online Courses"],
        "Working Not Working",
      ],
    ],
  };

  function handelFdata(dataObj) {
    const dataArray = Object.values(dataObj);
    return dataArray.map((data) => {
      return (
        <div className="catigory" key={data[0]} onClick={(e) => toogleit(e)}>
          <div className="head">
            <h3 id={data[0]}>
              {data[0]} <FontAwesomeIcon icon={faAngleDown} />
            </h3>
          </div>
          <div className="detals">
            {data[1].map((item) => {
              if (Array.isArray(item)) {
                return (
                  <div className="twoSide">
                    <div>{item[0]}</div>
                    <div className="smaller">{item[1]}</div>
                  </div>
                );
              } else {
                return <div className="oneSide">{item}</div>;
              }
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <footer>
      <div className="contaner">
        <div className="top-side">{handelFdata(footData)}</div>
        <hr />
        <div className="bottom-side">
          <div className="left">
            <svg
              width="91"
              height="27"
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
              </g>
            </svg>
            <p>© Fiverr International Ltd. 2023</p>
          </div>
          <div className="right">
            <div className="social">
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faPinterest} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className="group">
              <div className="languge">
                <FontAwesomeIcon icon={faGlobe} />
                <p>English</p>
              </div>
              <div className="curancy">
                <FontAwesomeIcon icon={faDollar} />
                <p>USD</p>
              </div>
              <div className="accsaplty">
                <FontAwesomeIcon icon={faUniversalAccess} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//Source: https://stackoverflow.com/questions/46592833
