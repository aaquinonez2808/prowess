import React from "react";

import raya from "../imgs/raya.png";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import i2 from "../imgs/1.png";
import i3 from "../imgs/2.png";
import i4 from "../imgs/3.png";

//<link rel="stylesheet" href="style.css">
import "./style.css";
import AccordionItem from "./AccordionItem";
export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">La Institución </h1>
        <img className="image img-fluid" src={raya} alt="" />
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

        <div class="accordion" id="accordionExample">
          <AccordionItem
            id={"item1"}
            headingId={"heading1"}
            expanded={"true"}
            show={"show"}
            icon={<FolderCopyIcon />}
            title={"Opción 1"}
            text={
              "Certificación del Sistema de Gestión de Calidad con alcance alos programas técnicos y diplomados virtuales"
            }
          />
          <AccordionItem
            id={"item2"}
            headingId={"heading2"}
            expanded={"false"}
            show={""}
            icon={
              <img className="icon" src={i2} alt="" width="30" height="30" />
            }
            title={"Opción 2"}
            text={
              "Certificación Internacional del Sistema de Gestión de Calidad"
            }
          />
          <AccordionItem
            id={"item3"}
            headingId={"heading3"}
            expanded={"false"}
            show={""}
            icon={
              <img className="icon" src={i3} alt="" width="30" height="30" />
            }
            title={"Opción 3"}
            text={
              "Certificación de Calidad como Institución de Educación Para el Trabajo y el Desarrollo Humano"
            }
          />
          <AccordionItem
            id={"item4"}
            headingId={"heading4"}
            expanded={"false"}
            show={""}
            icon={
              <img className="icon" src={i4} alt="" width="30" height="30" />
            }
            title={"Opción 4"}
            text={
              "Certificación de Calidad de los Programas Técnicos Laborales."
            }
          />
        </div>

        <h2 className="mt-4">OBJETIVOS ESTRATÉGICOS </h2>
        <img className="image img-fluid" src={raya} alt="" />

        <p>
          <a
            className="btn btn-success"
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
