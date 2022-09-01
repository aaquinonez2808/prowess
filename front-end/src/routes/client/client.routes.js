import React from "react";
import { Route, Routes } from "react-router-dom";
import EstudianteRoutes from "./Estudiante.routes";

const ClientRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Cliente</div>} />
        <Route path="/estudiante/*" element={<EstudianteRoutes/>} />
      </Routes>
    </>
  );
};

export default ClientRoutes;
