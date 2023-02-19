import React, { useRef, useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import Navhidden from './Navhidden';
import SideBarM from './MediaQuiry/SideBarM';

function Navbar() {

  const [show ,setShow] = useState(false)

  const handelShow = () => {
    return window.scrollY > 0 ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handelShow)
    
    return () => {
      window.removeEventListener('scroll', handelShow)
    }
  }, [])


  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 400,
    variableWidth: true
  };

  return (
    <header className={show ? "show" : ""}>
      <nav>
      <SideBarM />
        <div className='container'>
          <div className='topNav'>
            <div className="logo">
              <span className='text'>Fiverr</span>
              <span className='dot'>.</span>
            </div>
            {
              show ? <div className="searchBar">
              <input
                type="text"
                placeholder='What service are you looking for'
              />
              <div className="logo">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                />
              </div>
            </div> : ''
            }
            <div className="links">
              <span>Fiverr Business</span>
              <span>Explore</span>
              <span>
                <FontAwesomeIcon 
                  icon={faGlobe} 
                  className='icon' 
                />
                English
              </span>
              <span>
                <FontAwesomeIcon 
                  icon={faDollar} 
                  className='icon' 
                />
                USD
              </span>
              <span>Become a Seller</span>
              <span>Sign in</span>
              <button>Join</button>
            </div>
          </div>
          <div className='botNav'>
            <Navhidden show={show} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
