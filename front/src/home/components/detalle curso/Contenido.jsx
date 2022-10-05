import React from "react";
import "./style.css";

const Contenido = ({ contenido }) => {
  return (
    <div className="row " id="principal">
        <div className="col-md-6 col-xs-12">
            <h1 className="title-nombre">{contenido.nombre}</h1>
            <h4 align="left" className="text-modalidad "> {contenido.modalidad}</h4>
            <h4 align="left" className="text-aprender "> {contenido.aprender}</h4>
            <button className="button">INSCRIBETE YA</button>
        </div>
        <div className="col-md-6 col-xs-12">  
          <img 
            src={contenido.imagen}
            className="p-0 w-100 h-100 "
            alt="..."
          />
        </div>
    </div>
  );
};

export default Contenido;