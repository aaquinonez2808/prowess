import React from 'react'
import './style.css'
const HomePage = ({claseActiva}) => {

  return (
    <div className={`p-4 my-container ${claseActiva===""? "":claseActiva}`}>
        AREA PERSONAL
    </div>
  )
}
export default HomePage;