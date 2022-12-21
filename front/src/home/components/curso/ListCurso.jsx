import React from "react";
import Curso from "./Curso";
import { cursos } from "./datosCursos";

const ListCurso = ({ tipos }) => {
  const cursosD = cursos.filter((curso) => curso.tipo === tipos);
  return (
    <div className="row g-5 mx-auto">
      {cursosD.map((curso) => {
        return <Curso key={curso.id} curso={curso} />;
      })}
    </div>
  );
};
export default ListCurso;
