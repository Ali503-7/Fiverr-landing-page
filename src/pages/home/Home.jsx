import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing-section/section-1'
import SideBar from '../../components/SideBar/SideBarM'
import './Home.scss'
function Home() {
  const [sideBar, setSideBar] = useState(false)
  const sidebarRef = useRef(null)

    useEffect(() => {
    // Attach a click event listener to the document object
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== 'toggleButton'
      ) {
        setSideBar(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sidebarRef]);

  const commonProps = {
    SideBar: sideBar,
    setSideBar: setSideBar
  }

  return (
    <div className={sideBar ? 'Home opacty' : 'Home'}>
      <SideBar {...commonProps} ref={sidebarRef} />
      <Navbar {...commonProps} />
      <Landing />
    </div>
  )
}

export default Home