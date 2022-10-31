import React from "react";

import raya from "../imgs/raya.png";

//<link rel="stylesheet" href="style.css">
import "./style.css";
export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">La Institución </h1>

        <img className="image" src={raya} alt="" width="500" height="50" />
        <h1 className="display-6"> PROWESS EC</h1>
        <p>
          Departamento de Ciencias Económicas, Administrativas y de Comercio –
          DCEA es responsable de la gestión de la docencia, investigación y
          vinculación en las siguientes áreas del conocimiento: Economía,
          Mercadotecnia y Publicidad, Finanzas, Dirección/Gestión,
          Administración, Hotelería, Turismo, Contabilidad, Auditoria y Comercio
          Exterior.
          <br />
          <br />
          Es por consiguiente, la unidad organizacional clave para el
          cumplimiento de la misión de la ESPE y el logro de los objetivos del
          plan estratégico institucional. Dentro del portafolio del Departamento
          de Ciencias Económicas, Administrativas y del Comercio se encuentran
          las Carreras de Licenciatura en Administración de Empresas, Ingeniería
          Comercial, Licenciatura en Contabilidad y Auditoría, Licenciatura en
          Mercadotecnia y Publicidad, Licenciatura en Comercio Exterior y
          Licenciatura en Turismo.
        </p>

        <div className="cont-menu">
          <div className="cont-enlace">
            <div className="opcion">
              <p>Opcion 1</p>
              
              <p className="icono">+</p>
            </div>
            <div className="enlace">
              <p>Opcion</p>
              <a href="#">enlase1</a>
            </div>
          </div>

          <div className="cont-enlace">
            <div className="opcion">
              <p>OPCIOPN2</p>
              <p className="icono">+</p>
            </div>
            <div className="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div className="cont-enlace">
            <div className="opcion">
              <p>OPCIOPN3</p>
              <p className="icono">+</p>
            </div>
            <div className="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div className="cont-enlace">
            <div className="opcion">
              <p>OPCIOPN4</p>
              <p className="icono">+</p>
            </div>
            <div className="enlace">
              <a href="#">enlase</a>
            </div>
          </div>
        </div>

        <h1 className="display-4">OBJETIVOS ESTRATÉGICOS </h1>
        <img className="image" src={raya} alt="" width="500" height="50" />

        <p>
          <a
            className="btn btn-primary btn-lg"
            href="https://prowessec.com/"
            rel="noopener noreferrer"
            target="_blank"
            role="button"
          >
            Visitar Web
          </a>
        </p>
      </div>
    </div>
  );
  //fin de retun
};

//animacion del boton de menu de opciones desplegable
const opcion = document.querySelectorAll(".opcion");

// Permite recorrer cada una de nuestras opciones
opcion.forEach((e) => {
  // Añadimos un evento a cada elemento seleccionado
  e.addEventListener("click", function (e) {
    // Alteranmos las clases de nuestros enlaces
    const padre = e.target.parentNode;
    padre.children[1].classList.toggle("animation");
    padre.parentNode.children[1].classList.toggle("animation");
  });
});

export default Jumbotron;
