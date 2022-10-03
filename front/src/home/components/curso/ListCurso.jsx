import React from "react";
import Curso from "./Curso";
import { cursos } from "./datosCursos";

const ListCurso = () => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        cursos.map(curso => {
        return <Curso key={curso.id} curso={curso} />;
      })
      }
    </div>
  );
};

export default ListCurso;
