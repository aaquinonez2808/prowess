import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import "./css.css";
export const Navbar = () => {
  return (
    <div className="bgnavbar">
      <div className="px-3 pt-3">
        <NavLink to="/" className="navbar-brand ">
          <img className="logo" src={logo} alt="" />
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-md navbar-light justify-content-around ">
        <ul className="navbar-nav mx-auto gap-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/nosotros" className="nav-link">
              Institución
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cursos/general" className="nav-link">
              Cursos Generales
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" target={"_blank"} className="nav-link">
              Inscripciones
            </NavLink>
          </li>
          <li className="nav-item">
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
          <li className="nav-item">
            <NavLink to="/ayuda" className="nav-link">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ayuda
                    </NavLink>
                    <ul class="dropdown-menu">
                        <li className="nav-item">
                          <NavLink to="/ayudados" className="nav-link">
                            Pagos en linea
                          </NavLink>
                        </li>
    
                        <li className="nav-item">
                          <NavLink to="/Contacto" className="nav-link">
                            Contacto
                          </NavLink>
                        </li>
                        <li class="dropdown-divider"></li>
                       
                        <li className="nav-item">
                          <NavLink to="/preguntas" className="nav-link">
                            Preguntas Frecuentes
                          </NavLink>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};
