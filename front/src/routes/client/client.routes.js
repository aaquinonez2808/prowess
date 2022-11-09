import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../home/components/navbar/Navbar";
import { NavbarRedes } from "../../home/components/navbar/NavbarRedes";
import { HomePage } from "../../home/pages/HomePage";
import NosotrosPage from "../../home/pages/NosotrosPage";
import CursosPage from "../../home/pages/CursosPage";
import CursosPe from "../../home/pages/CursosPersonalizados";
import CursoPage from "../../home/pages/CursoPage";
import CursoPe from "../../home/pages/CursoPerPage";
import AyudaPage from "../../home/pages/AyudaPage";

const ClientRoutes = () => {
  return (
    <>
      <NavbarRedes />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/ayuda" element={<AyudaPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/cursos/:id" element={<CursoPage/>}/>
        <Route path="/cursospersonalizados" element={<CursosPe/>} />
        <Route path="/cursospersonalizados/:id" element={<CursoPe/>}/>
        <Route path="/terminos"></Route>
      </Routes>
    </>
  );
};

export default ClientRoutes;
