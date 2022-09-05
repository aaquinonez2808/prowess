import React from 'react'

const HomePage = ({claseActiva}) => {

  return (
    <div className={`p-4 my-container ${claseActiva===""? "":claseActiva}`}>
        AREA PERSONAL
    </div>
  )
}
export default HomePage;