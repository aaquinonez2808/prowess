import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../home/components/navbar/Navbar";
import { NavbarRedes } from "../../home/components/navbar/NavbarRedes";
import { HomePage } from "../../home/pages/HomePage";
import NosotrosPage from "../../home/pages/NosotrosPage";
import CursosPage from "../../home/pages/CursosPage";
import ContactoPage from "../../home/pages/ContactoPage";

const ClientRoutes = () => {
  return (
    <>
      <NavbarRedes />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </>
  );
};

export default ClientRoutes;
