import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Sidebar = ({claseActiva}) => {
  return (
    <nav className={`navbar navbar-expand d-flex flex-column align-item-start ${claseActiva===""? "":claseActiva}`} id="sidebar">
    <Link to={"#"} className="navbar-brand text-black mt-2">
        <div className=" font-weight-bold">Area Personal</div>
    </Link>
    <ul className="navbar-nav d-flex flex-column mt-3 w-100 gap-lg-4">
       <li className="nav-item dropdown w-100">
            <div href="#" className="nav-link dropdown-toggle text-black pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Cursos</div>
            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Crear Curso</Link></li>
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Ver Cursos</Link></li>
            </ul>
        </li>
        <li className="nav-item dropdown w-100">
            <div href="#" className="nav-link dropdown-toggle text-black pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Docentes</div>
            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Crear Docente</Link></li>
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Ver Docentes</Link></li>
            </ul>
        </li>
        <li className="nav-item w-100">
            <Link to={"#"} className="nav-link text-black pl-4">Registrar Pago Realizado</Link>
        </li>
        <li className="nav-item dropdown w-100">
            <div href="#" className="nav-link dropdown-toggle text-black pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Estudiantes</div>
            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Crear Estudiante</Link></li>
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Ver Estudiante</Link></li>
            </ul>
        </li>
        <li className="nav-item dropdown w-100">
            <div href="#" className="nav-link dropdown-toggle text-black pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Gestion de Usuarios</div>
            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Descargar Listado de Estudiantes</Link></li>
                <li><Link to={"#"} className="dropdown-item text-light pl-4 p-2">Descargar Listado de Docentes</Link></li>
            </ul>
        </li>
    </ul>
</nav>

  )
}

export default Sidebar