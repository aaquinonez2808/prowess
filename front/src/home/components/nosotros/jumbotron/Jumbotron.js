import React from "react";

import raya from "../imgs/raya.png";
import i1 from "../imgs/carpeta.png";
import i2 from "../imgs/1.png";
import i3 from "../imgs/2.png";
import i4 from "../imgs/3.png";


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


        <div class="accordion" id="accordionExample">
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >  
              <img className="icon" src={i1} alt=""  width="30" height="30"  />
                            Opcion 1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                 sorry{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <img className="icon" src={i2} alt=""  width="30" height="30"  />
               Opcion 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                 the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingtre">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsetre"
                aria-expanded="false"
                aria-controls="collapsetre"
              >
               <img className="icon" src={i3} alt=""  width="30" height="30"  />
               Opcion 3
              </button>
            </h2>
            <div
              id="collapsetre"
              class="accordion-collapse collapse"
              aria-labelledby="headingtre"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                 the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <img className="icon" src={i4} alt=""  width="30" height="30"  />
                opcion4
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
               o within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          

        
        </div>





        <h1 className="display-6">OBJETIVOS ESTRATÉGICOS </h1>
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
/**        <div class="cont-menu">
          <div class="cont-enlace">
            <div class="opcion">
              <p>Opcion 1</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <p>Opcion</p>
              <a href="#">enlase1</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN2</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN3</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN4</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>
        </div>
 */

export default Jumbotron;
