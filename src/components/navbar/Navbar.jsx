import React, { useRef, useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import Navhidden from './Navhidden';

function Navbar({ setSideBar, SideBar }) {

  const [show, setShow] = useState(false)


  const handelShow = () => {
    return window.scrollY > 0 ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handelShow)
    
    return () => {
      window.removeEventListener('scroll', handelShow)
    }
  }, [])


  return (
    <header className={show ? "show" : ""} >
      <nav className={SideBar ? 'opacity' : ''}>
        <div className='container'>
          <div className='topNav'>
            <div className="right-side">
              <div id="toggleButton" className='Burger hiddenL' >
                <img src="../../../public/imgs/Logos/hamburger-menu-icon-svg-14.jpg" alt="" onClick={() => setSideBar(true)} id="toggleButton"/>
              </div>
              
              <div className="logo">
                <span className='text'>Fiverr</span>
                <span className='dot'>.</span>
              </div>
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
              <span className='hidden'>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className='icon'
                />
                English
              </span>
              <span className='hidden'>
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
