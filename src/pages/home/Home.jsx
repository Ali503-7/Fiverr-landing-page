import React, { useState, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Section_1 from "../../components/landing-section/section-1";
import Section_2 from "../../components/SliderSection_2/section_2";
import SideBar from "../../components/SideBar/SideBarM";
import Section_3 from "../../components/Section_3/Section_3";
import Section_4 from "../../components/Section_4/Section_4";
import Section_5 from "../../components/Section_5/Seciton_5";
import Section_6 from "../../components/Section_6/Section_6";
import Section_7 from "../../components/Section_7/Section_7";
import Section_8 from "../../components/Section_8/Section_8";
import Section_9 from "../../components/Section_9/Section_9";
import Section_10 from "../../components/Section_10/Section_10";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [BgOpacty, setBgOpacty] = useState(false);
  const [S3SV, setS3SV] = useState(false);
  const sidebarRef = useRef(null);

  const commonProps = {
    SideBar: sideBar,
    setSideBar: setSideBar,
  };

  function HandelGBG() {
    if (sideBar) setSideBar((pre) => !pre);
  }

  if (sideBar || BgOpacty || S3SV) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <div
      className={sideBar ? "Home noScroll" : "Home"}
      style={BgOpacty ? { overflow: "hidden" } : null}
    >
      <SideBar {...commonProps} ref={sidebarRef} />
      <Navbar {...commonProps} />
      <Section_1 />
      <div className="trastedBy">
        <span className="hiddneMH">Trusted by:</span>
        <img src="imgs/Brand/facebook.31d5f92.png" alt="" />
        <img src="imgs/Brand/google.517da09.png" alt="" />
        <img src="imgs/Brand/netflix.e3ad953.png" alt="" />
        <img src="imgs/Brand/pandg.8b7310b.png" alt="" />
        <img
          src="imgs/Brand/paypal.ec56157.png"
          alt=""
          className="hiddneMH"
        />
      </div>
      <Section_2 />
      <Section_3 setBgOpacty={setBgOpacty} BgOpacty={BgOpacty} />
      <Section_4 />
      <Section_5 />
      <Section_6 setS3SV={setS3SV} S3SV={S3SV} />
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Section_10 />
      <Footer />
      {sideBar ? (
        <div className="grayBg" onClick={() => HandelGBG()}></div>
      ) : null}
    </div>
  );
}
