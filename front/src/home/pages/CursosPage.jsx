import React, { useEffect, useState } from "react";
import ListCurso from "../components/curso/ListCurso";
import "./style.css";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

const CursosPage = () => {
  const { tipos } = useParams();
  const [titulo, settitulo] = useState("");
  useEffect(() => {
    settitulo(tipos === "general" ? "GENERALES" : "PERSONALIZADOS");
  }, [tipos]);

  return (
    <>
      <div className="container-md">
        <h1 className="text-center mt-5 title-curso">CURSOS {titulo}</h1>
        <p className="text-center mb-5 descripcion-curso">
          Cursos completamente gratuitos en modalidad virtual para emprendedores
        </p>
        <ListCurso tipos={tipos} />
      </div>
      <Footer />
    </>
  );
};

export default CursosPage;
