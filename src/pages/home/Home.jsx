import React, { useState,  useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Section_1 from "../../components/landing-section/section-1";
import Section_2 from "../../components/SliderSection_2/section_2";
import SideBar from "../../components/SideBar/SideBarM";
import "./Home.scss";
import Section_3 from "../../components/Section_3/Section_3";
import Section_4 from "../../components/Section_4/Section_4";
import Section_5 from "../../components/Section_5/Seciton_5"
function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [BgOpacty, setBgOpacty] = useState(false);
  const sidebarRef = useRef(null);

  const commonProps = {
    SideBar: sideBar,
    setSideBar: setSideBar,
  };

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
        <img src="../../../public/imgs/Brand/facebook.31d5f92.png" alt="" />
        <img src="../../../public/imgs/Brand/google.517da09.png" alt="" />
        <img src="../../../public/imgs/Brand/netflix.e3ad953.png" alt="" />
        <img src="../../../public/imgs/Brand/pandg.8b7310b.png" alt="" />
        <img
          src="../../../public/imgs/Brand/paypal.ec56157.png"
          alt=""
          className="hiddneMH"
        />
      </div>
      <Section_2 />
      <Section_3 setBgOpacty={setBgOpacty} BgOpacty={BgOpacty} />
      <Section_4 />
      <Section_5 />
      {sideBar ? (
        <div className="grayBg" onClick={() => setSideBar((pre) => !pre)}></div>
      ) : null}
    </div>
  );
}

export default Home;
