import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({menu}) => {
  return (
    <div>
        {(!menu.submenus) ? (
            <Link className='nav-item item nav-link' to={menu.path}>{menu.icon} {menu.title}</Link>
            ) : (
                <li className='menu'>{menu.icon} {menu.title}</li>)
        }
        {
            (menu.submenus) ? (
                menu.submenus.map((item, index) => {
                return (
                    <li className='nav-item' key={index}> <Link className='nav-link submenu' to={item.path}>{item.title}</Link></li>
                )
            }
            )
            ) : (
                <></>
            )
        }

    </div>
  )
}

export default SubMenu