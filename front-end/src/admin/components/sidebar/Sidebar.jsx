import React from 'react'
import { Link } from 'react-router-dom'
import menus from './menu'
import './style.css'
import SubMenu from './SubMenu'


const Sidebar = ({claseActiva}) => {
  return (
    <nav className={`navbar navbar-expand d-flex flex-column align-item-start ${claseActiva===""? "":claseActiva}`} id="sidebar">
    <Link to={"/admin"} className="navbar-brand text-black">
        <div className=" font-weight-bold">Area Personal</div>
    </Link>
    <ul className="navbar-nav d-flex flex-column mt-2 w-100 gap-lg-2">
        {
            menus.map((menu, index) => {
                return (
                    <SubMenu key={index} menu={menu} />
                )
            })
        }
    </ul>
</nav>

  )
}

export default Sidebar