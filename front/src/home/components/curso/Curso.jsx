import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Curso = ({ curso }) => {
  const [urlImg, setUrlImg] = useState("");

  const _getImg = () => {
    if (curso.overviewfiles.length > 0)
      setUrlImg(`${curso.overviewfiles[0].fileurl}`.replace("/webservice", ""));
  };

  useEffect(() => {
    _getImg();
  });

  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink
        to={`/cursos/${curso.categoryname}/${curso.id}`}
        className="nav-link"
      >
        <div className="card-body">
          <h5 className="card-title mb-0">{curso.fullname}</h5>
        </div>
        <div className="imagen-contenido-curso">
          <img src={urlImg} className="card-img-top imagen-curso" alt="..." />
        </div>
      </NavLink>
    </div>
  );
};

export default Curso;
