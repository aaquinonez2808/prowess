import React, { useEffect, useState } from "react";
import ListCurso from "../components/curso/ListCurso";
import "./style.css";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { getCourses } from "../../services/PruebaMoodle";

const CursosPage = () => {
  const { tipos } = useParams();
  const [titulo, settitulo] = useState("");
  const [courses, setCourses] = useState([]);

  const _getCourses = async () => {
    const response = await getCourses();
    console.log(response);

    setCourses(response.filter((course) => course.id !== 1));
  };
  useEffect(() => {
    settitulo(tipos === "general" ? "GENERALES" : "PERSONALIZADOS");
    _getCourses();
  }, [tipos]);

  return (
    <>
      <div className="container-md container-cursos mb-5">
        <h1 className="text-center mt-5 title-curso">CURSOS {titulo}</h1>
        <p className="text-center mb-5 descripcion-curso">
          Cursos completamente gratuitos en modalidad virtual para emprendedores
        </p>
        <ListCurso tipos={tipos} courses={courses} />
      </div>
      <Footer />
    </>
  );
};

export default CursosPage;
