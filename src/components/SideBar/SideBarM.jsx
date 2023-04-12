import { faAngleDown, faDollar, faEuro, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './SideBarM.scss';

const SideBarM = React.forwardRef(({ SideBar }, ref) => {
  const [browse, setBrowse] = useState(false);
  const [explore, setExplore] = useState(false);
  const [lang, setLang] = useState(false);
  const [mony, setMony] = useState(false);
  const [graphics, setGraphics] = useState(false);
  const [langu, setLangu] = useState("English")
  const [curancy, setCurancy] = useState("USD");
  const [curancyLogo, setCurancyLogo] = useState(<FontAwesomeIcon icon={faDollar} />);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)&&
        event.target.id !== 'toggleButton') {
        setBrowse(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <aside className={SideBar ? "SideBar active" : "SideBar"} ref={ref}>
      <div className="button">
        <button>Join Fiverr</button>
      </div>

      <div className="links">
        <span>Sign in</span>

        <div className={browse ? "slide show1" : "slide"}>
          <p onClick={() => setBrowse((pre) => !pre)} className="twosideflex">
            Browse Categories
            <FontAwesomeIcon icon={faAngleDown} />
          </p>

          <div className="FirstLayear">
            <div className={graphics ? "slide show2" : "slide"}>
              <p
                onClick={() => setGraphics((pre) => !pre)}
                className="twosideflex"
              >
                Graphics & Design
                <FontAwesomeIcon icon={faAngleDown} />
              </p>

              <div className="secendLayear">
                <div>Logo Design</div>
                <div>Game Art</div>
                <div>Softwere Web dev</div>
              </div>
            </div>
            <div>Digital Marketing</div>
            <div>Writing & Translation</div>
            <div>Video & Animation</div>
            <div>Music & Audio</div>
            <div>Programming & Tech</div>
            <div>Data</div>
            <div>Business</div>
            <div>Lifestyle</div>
            <div>Photography</div>
            <div>
              AI Services <span className="new">NEW</span>
            </div>
          </div>
        </div>

        <div className={explore ? "slide show3" : "slide"}>
          <p onClick={() => setExplore((pre) => !pre)} className="twosideflex">
            Explore
            <FontAwesomeIcon icon={faAngleDown} />
          </p>
          <div className="FirstLayear">
            <div>Discover</div>
            <div>Guides</div>
            <div>Learn</div>
            <div>Logo Maker</div>
            <div>Community</div>
            <div>Podcast</div>
            <div>Blog</div>
            <div>Fiverr Workspace</div>
          </div>
        </div>

        <div className="Business">Fiverr Business</div>
      </div>

      <div>
        <div className="general">General</div>
        <div>Home</div>
        <div className={lang ? "slide show4" : "slide"}>
          <p className="twosideflex" onClick={() => setLang((pre) => !pre)}>
            <span>
              {langu} <FontAwesomeIcon icon={faGlobe} />
            </span>
            <FontAwesomeIcon icon={faAngleDown} />
          </p>
          <div className="FirstLayear">
            <div
              value="English"
              onClick={(e) => setLangu(e.target.getAttribute("value"))}
            >
              English
            </div>
            <div
              value="Arabic"
              onClick={(e) => setLangu(e.target.getAttribute("value"))}
            >
              Arabic
            </div>
            <div
              value="italiano"
              onClick={(e) => setLangu(e.target.getAttribute("value"))}
            >
              italiano
            </div>
            <div
              value="Português"
              onClick={(e) => setLangu(e.target.getAttribute("value"))}
            >
              Português
            </div>
          </div>
        </div>

        <div className={mony ? "slide show5" : "slide"}>
          <p className="twosideflex" onClick={() => setMony((pre) => !pre)}>
            <span>
              {curancyLogo} {curancy}
            </span>
            <FontAwesomeIcon icon={faAngleDown} />
          </p>
          <div className="FirstLayear">
            <div value="USD" onClick={(e) => {
              setCurancy(e.target.getAttribute("value"))
              setCurancyLogo(<FontAwesomeIcon icon={faDollar} />);
          }}>
              USD - <FontAwesomeIcon icon={faDollar} />
            </div>
            <div value="EUR" onClick={(e) => {
              setCurancy(e.target.getAttribute("value"));
              setCurancyLogo(<FontAwesomeIcon icon={faEuro} />);
            }}>
              EUR - <FontAwesomeIcon icon={faEuro} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});

export default SideBarM
