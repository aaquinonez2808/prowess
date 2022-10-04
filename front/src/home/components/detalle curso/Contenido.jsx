import React from "react";

const Contenido = ({ contenido }) => {
  return (
    <div className="row 6">
      
        <div className="imagen-contenido-curso">  
          <img 
            src={contenido.imagen}
            className="card-img-top imagen-curso"
            alt="..."
          />
        </div>
    </div>
  );
};

export default Contenido;