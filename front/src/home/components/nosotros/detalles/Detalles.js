import React from "react";
import boton from "../imgs/aq.png";
export const Detalles = () => {
  return (
    <div className="container">
      <h2>Nuestra Filosofía</h2>
      <br></br>
      <br></br>

      <h3>Misión</h3>
      <p>
        Es por consiguiente, la unidad organizacional clave para el cumplimiento
        de la misión de la ESPE y el logro de los objetivos del plan estratégico
        institucional. Dentro del portafolio del Departamento de Ciencias
        Económicas, Administrativas y del Comercio se encuentran las Carreras de
        Licenciatura en Administración de Empresas, Ingeniería Comercial,
        Licenciatura en Contabilidad y Auditoría, Licenciatura en Mercadotecnia
        y Publicidad, Licenciatura en Comercio Exterior y Licenciatura en
        Turismo.
      </p>

      <h2>Visión </h2>
      <p>
        Al 2024 potenciar el alcance de los emprendimientos desarrollados dentro
        del proyecto, brindándoles soporte mediante conocimientos dictados en
        los cursos de capacitación por los estudiantes por la Universidad de las
        Fuerzas Armadas ESPE de la mano de las herramientas tecnológicas.
      </p>
      
      <img className="image" src={boton} alt="" width="400" height="300" />

    </div>
  );
};
