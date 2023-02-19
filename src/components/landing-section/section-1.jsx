import React, { useEffect } from 'react'
// import APIIMG from '../../assets/APIs/imgs'
import './section-1.scss'

function Landing() {

  useEffect(() => {
    fetch('../../assets/APIs/imgs')
      .then((data) => console.log(data.json()))
      .then((imgs) => console.log(imgs))
  })


  return (
    <div>Landing</div>
  )
}

export default Landing