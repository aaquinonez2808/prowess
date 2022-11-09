import React from "react";
import { NavLink } from "react-router-dom";

const Contenidop = ({ cursop }) => {
  return (
    <>
    <div className="row " id="principal">
        <div className="col-md-6 col-xs-12 p-4 cabecera" >
            <h1 className="title-nombre"> CURSO DE {cursop.nombre}</h1>
            <h4 align="left" className="text-modalidad "> Modalidad del Curso: {cursop.modalidad}</h4>
            <ul className="list-group"> 
              {
                cursop.aprender && cursop.aprender.map((aprend, index) => {
                  return <li className="list-group-item text-start bg-none" key={index}>{aprend}</li>
                })
              }
            </ul>
            <div className=" btn-register">
            <NavLink to={`/register`} className="nav-link" target="_blank" rel="noreferrer">  
              <button className="button">INSCRÍBETE YA</button>
            </NavLink>
            </div>  
        </div>
        <div className="col-md-6 col-xs-12" id="prueba">  
          <img 
            src={cursop.imagenCurso}
            className=" p-0 w-100 h-100 "
            alt="..."
          />
        </div>
    </div>
    </>
  );
};

export default Contenidop;