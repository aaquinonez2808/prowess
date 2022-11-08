import React from "react";
import Contenidop from "./Contenidop";
import { cursosper } from "./datosCP";

const ListCursoP = () => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        cursosper.map(cursop => {
        return <Contenidop key={cursop.id} curso={cursop} />;
      })
      }
    </div>
  );
};

export default ListCursoP;