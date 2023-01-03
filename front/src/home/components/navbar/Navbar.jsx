import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./css.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bgnavbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand ">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler d-xl-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2">
            <li class="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Inicio <span class="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/nosotros" className="nav-link">
                Institución
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/cursos/general" className="nav-link">
                Cursos Generales
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/register" target={"_blank"} className="nav-link">
                Inscripciones
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/cursos/personalizados" className="nav-link">
                Cursos Personalizados
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://prowessmooc.milaulas.com/login/index.php"
                target="_blank"
                className="nav-link"
                rel="noreferrer"
              >
                Campus Virtual
              </a>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Ayuda
              </NavLink>
              <div className="dropdown-menu ml-2" aria-labelledby="dropdownId">
                <NavLink to="/ayudados" className="dropdown-item">
                  Pagos en linea
                </NavLink>
                <NavLink to="/contactos" className="dropdown-item">
                  Contacto
                </NavLink>
                <NavLink to="/preguntas" className="dropdown-item">
                  Preguntas Frecuentes
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
