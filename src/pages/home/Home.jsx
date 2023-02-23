import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Section_1 from "../../components/landing-section/section-1";
import Section_2 from "../../components/SliderSection_2/section_2";
import SideBar from "../../components/SideBar/SideBarM";
import "./Home.scss";
function Home() {
  const [sideBar, setSideBar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Attach a click event listener to the document object
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== "toggleButton"
      ) {
        setSideBar(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef]);

  const commonProps = {
    SideBar: sideBar,
    setSideBar: setSideBar,
  };

  return (
    <div className={sideBar ? "Home opacty" : "Home"}>
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
    </div>
  );
}

export default Home;
