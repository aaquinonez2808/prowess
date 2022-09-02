import React from 'react'
import './style.css'
import logo from './logo.png'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <>
		<div className='d-flex justify-content-between p-2 align-content-center nav_bar'>
        <img src={logo} alt={"logo"} className='logo' />
        <div>
          Administrador <button className='logout'><LogoutIcon style={{color:'red'}}/></button>
        </div>
    </div>
	</>
  )
}

export default Navbar