import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing-section/section-1'
import './Home.scss'
function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Landing />
    </div>
  )
}

export default Home