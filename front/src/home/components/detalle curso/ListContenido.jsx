import React from "react";
import Contenido from "./Contenido";
import contenidos from './datosContenido';

const ListContenido = () => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        contenidos.map(contenido => {
        return <Contenido key={contenido.id} contenido={contenido} />;
      })
      }
    </div>
  );
};

export default ListContenido;