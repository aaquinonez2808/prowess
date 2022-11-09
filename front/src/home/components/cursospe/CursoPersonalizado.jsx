import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const CursoPersonalizado = ({ cursop }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink to={`/cursospersonalizados/${cursop.id}`} className="nav-link">
        <div className="card-body">
          <h5 className="card-title mb-0">{cursop.nombre}</h5>
        </div>
        <div className="imagen-contenido-curso">  
          <img
            src={cursop.image}
            className="card-img-top imagen-curso"
            alt="..."
          />
        </div>
      </NavLink>
    </div>
  );
};

export default CursoPersonalizado;