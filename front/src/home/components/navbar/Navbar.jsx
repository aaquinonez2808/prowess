import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./css.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bgnavbar sticky-top ">
        <div className="container nav__banner mb-2 mt-2">
          <NavLink to="/" className="navbar-brand ">
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <NavLink to="/" className="navbar-brand ">
            <img className="logo" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="container d-flex justify-content-center">
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
            <ul className="navbar-nav me-auto mt-2 gap-2 gap-xl-4 ">
              <li class="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Inicio
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink to="/nosotros" className="nav-link">
                  Institución
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink to="/cursos/general" className="nav-link">
                  Cursos Generales
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink to="/register" target={"_blank"} className="nav-link">
                  Inscripciones
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink to="/cursos/personalizados" className="nav-link">
                  Cursos Personalizados
                  <div className="line"></div>
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
                  <div className="line"></div>
                </a>
              </li>

              <li className="nav-item dropdown ">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Ayuda
                  <div className="line"></div>
                </NavLink>
                <div
                  className="dropdown-menu ml-2"
                  aria-labelledby="dropdownId"
                >
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
    </>
  );
};
