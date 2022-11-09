import React from "react";
import CursoPersonalizado from "./CursoPersonalizado";
import { cursosper } from "./datosCP";

const ListCursoP = () => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        cursosper.map(cursop => {
        return <CursoPersonalizado key={cursop.id} cursop={cursop} />;
      })
      }
    </div>
  );
};
 
export default ListCursoP;