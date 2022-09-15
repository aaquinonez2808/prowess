import React from "react";
import { Route, Routes } from "react-router-dom";
import EstudianteRoutes from "./Estudiante.routes";
import DocenteRoutes from "./docente.routes";

const ClientRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Cliente</div>} />
        <Route path="/estudiante/*" element={<EstudianteRoutes/>} />
        <Route path="/login/*" element={<DocenteRoutes/>} />
        
      </Routes>
    </>
  );
};

export default ClientRoutes;
