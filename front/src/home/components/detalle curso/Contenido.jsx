import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Contenido = ({ curso }) => {
  return (
    <div className="row" id="principal">
      <div className="col-12 col-lg-6 p-3">
        <h1 className="title-nombre"> CURSO DE {curso.nombre}</h1>
        <h4 align="left" className="text-modalidad">
          {" "}
          Modalidad del Curso: {curso.modalidad}
        </h4>
        <ul className="list-group">
          {curso.aprender &&
            curso.aprender.map((aprend, index) => {
              return (
                <li className="list-group-item text-start bg-none" key={index}>
                  {aprend}
                </li>
              );
            })}
        </ul>
        <div className="">
          <NavLink
            to={`/register`}
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-success button mt-2">
              INSCRÍBETE YA
            </button>
          </NavLink>
        </div>
      </div>
      <div className="col-12 col-lg-6 detalle_cursos_img-container">
        <img src={curso.imagenCurso} className="detalle_cursos_img" alt="..." />
      </div>
    </div>
  );
};

export default Contenido;
