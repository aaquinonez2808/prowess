import React from "react";

import { Slider } from "../components/slider/Slider";
import { Servicios } from "../components/inicio/Servicios";
import './style.css'
import Footer from "../components/footer/Footer";
import { NavLink } from "react-router-dom";
import linea from "../assets/img/linea.png";
import linea2 from "../assets/img/linea2.png";
import ini1 from "../assets/img/ini1.jpg";
import ini2 from "../assets/img/ini2.jpg";
import ini3 from "../assets/img/ini3.jpg";
import ini4 from "../assets/img/ini4.jpg";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";
import icon7 from "../assets/img/7.png";
import icon8 from "../assets/img/8.png";
import icon10 from "../assets/img/01.png";
import icon11 from "../assets/img/i4.png";
import icon12 from "../assets/img/i5.png";
import img9 from "../assets/img/9.png";
import img10 from "../assets/img/10.png";
import img11 from "../assets/img/11.png";
import img12 from "../assets/img/15.png";
import img13 from "../assets/img/16.png";
import img14 from "../assets/img/17.png";
import icon9 from "../assets/img/informa.jpg";

export const HomePage = () => {
  return (
    <>
      <Slider />
        <div className="servicios mb-3">
          <Servicios />
        </div>
        <div className='container-xxl '>
        <h1 className='text-center mt-5 title-curso  text-black'>CURSOS GENERALES</h1>
        <p className="text-center mb-5 descripcion-curso">
          <img className=" " src={linea} alt="" />
        </p>
        <p>
          <div class="row gx-0 ">

            <div class="col-3 card img3 ">
              <div>
                <img className="img-fluid " src={ini1} alt="" />
              </div>
              <NavLink to="/cursos/1" className="nav-link">
                <div class="card_title title-white  ">
                  <p >Contabilidad  Básica
                    <h3>Curso Gratuito</h3>
                  </p>
                </div>
              </NavLink>
              <div class="card_icon">
                <img className="img-fluid " src={icon5} alt="" />
              </div>
              <div className="card_but ">
                <NavLink to={`/cursos/1`} className="nav-link " >
                  <button type="button" className="btn btn-outline-light border border-secondary text-body ">
                    <div class="card ">
                      <img className="img-fluid card" src={icon9} alt="" />
                      <div class="card-img-overlay">
                        <p className="title-black " >Más Información</p>
                      </div>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>

            <div class="col-3 card img3">
              <div>
                <img className="img-fluid " src={ini2} alt="" />
              </div>
              <NavLink to="/cursos/1" className="nav-link">
                <div class="card_title title-white justify-content-center align-items-center">
                  <p>Marketing Digital Básico
                    <h3>Curso Gratuito</h3>
                  </p>
                </div>
              </NavLink>
              <div class="card_icon">
                <img className="img-fluid " src={icon6} alt="" />
              </div>
              <div className="card_but ">
                <NavLink to={`/cursos/7`} className="nav-link " >
                  <button type="button" className="btn btn-outline-light border border-secondary text-body ">
                    <div class="card ">
                      <img className="img-fluid card" src={icon9} alt="" />
                      <div class="card-img-overlay">
                        <p className="title-black " >Más Información</p>
                      </div>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>

            <div class="col-3 card img3">
              <div>
                <img className="img-fluid " src={ini3} alt="" />
              </div>
              <NavLink to="/cursos/1" className="nav-link">
                <div class="card_title title-white justify-content-center align-items-center">
                  <p className="mb-0">Auxiliar</p>
                  <p className="mb-0">Contable</p>
                  <h3>Curso Gratuito</h3>
                </div>
              </NavLink>
              <div class="card_icon">
                <img className="img-fluid " src={icon7} alt="" />
              </div>
              <div className="card_but ">
                <NavLink to={`/cursos/4`} className="nav-link " >
                  <button type="button" className="btn btn-outline-light border border-secondary text-body ">
                    <div class="card ">
                      <img className="img-fluid card" src={icon9} alt="" />
                      <div class="card-img-overlay">
                        <p className="title-black " >Más Información</p>
                      </div>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>

            <div class="col-3 card img3">
              <div >
                <img className="img-fluid " src={ini4} alt="" />
              </div>
              <NavLink to="/cursos/1" className="nav-link">
                <div class="card_title title-white justify-content-center align-items-center">
                  <p>Conoce todos nuestros cursos
                    <h3>Curso Gratuito</h3>
                  </p>
                </div>
              </NavLink>
              <div class="card_icon">
                <img className="img-fluid " src={icon8} alt="" />
              </div>
              <div className="card_but ">
                <NavLink to={`/cursos`} className="nav-link " >
                  <button type="button" className="btn btn-outline-light border border-secondary text-body ">
                    <div class="card ">
                      <img className="img-fluid card" src={icon9} alt="" />
                      <div class="card-img-overlay">
                        <p className="title-black " >Más Información</p>
                      </div>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>


          </div>
        </p>
      </div>

      <div class="row gx-3 callout container-xxl text-center">
        <div>
          <p className="text-center mb-5 descripcion-curso">
            <img className=" " src={linea2} alt="" />
          </p>
        </div>

        <div class="row  card2 p-3  ">
          <div class="col text-center title-curso text-black">
            <p>
              INFORMACIÓN DE NUESTROS CURSOS
            </p>
          </div>

          <div class="col text-center  text-body titleC  text-black">
            <p>
              PROWESS OFRECE CURSOS DE CAPACITACIÓN EN LAS SIGUENTES AREAS.
            </p>

          </div>
        </div>

      </div>

      <div class="row gx-3  container-xxl ">
        <div class="col-4 ">
          <div >
            <img className="img-fluid img3 " src={img9} alt="" />
          </div>
        </div>

        <div class="col-4 ">
          <div >
            <img className="img-fluid img3" src={img10} alt="" />
          </div>
        </div>
        <div class="col-4 ">
          <div >
            <img className="img-fluid img3 " src={img11} alt="" />
          </div>
        </div>


      </div>

      <div class="row gx-3 callout container-xxl text-center">
        <div>
          <p className="text-center mb-5 descripcion-curso">
            <img className=" " src={linea2} alt="" />
          </p>
          <div class="row  card1 p-3 title-white  ">

            <div class="col ">

              <div class="col text-center titleC  title-white">
                <p>Administracíon</p>
                <div class="card_cert">
                  <img className="img-fluid " src={icon10} alt="" />
                </div>
                <p></p>
              </div>
              <h5>
                Desarrollar bases sólidas para la
                implementación de un negocio,
                a través de estrategias
                financieras y administrativas,
                generando negocios rentables.
              </h5>
            </div>
            <div class="col">
              <div class="col text-center titleC title-white ">
                <p>Creación de páginas web</p>
                <div class="card_cert">
                  <img className="img-fluid " src={icon11} alt="" />
                </div>
                <p></p>
              </div>
              <h5>
                Brindar capacitaciones y bases a
                las personas para la creación de
                páginas web y blogs con la ayuda
                de la herramienta de WordPress
                la cual facilita la creación del
                contenido y manejo del mismo.
              </h5>

            </div>
            <div class="col">
              <div class="col text-center titleC  title-white">
                <p>Marketing digital</p>
                <div class="card_cert">
                  <img className="img-fluid " src={icon12} alt="" />
                </div>
                <p></p>
              </div>
              <h5>
                Formar emprendedores con
                conocimientos y destrezas
                destinadas al cumplimiento de
                sus objetivos empresariales
                dentro de un ambiente de
                mercadeo digital.
              </h5>

            </div>
          </div>
          <p className='text-center mt-5 title-curso   text-black'>CERTIFICADOS DE CALIDAD</p>
          <div class="row  card1 p-3  ">
            <div class="col text-center    text-white">
              <h1 className="title-curso text-white ">
                <h1>
                  ¿POR QUÉ ESTUDIAR CON NOSOSTROS?
                </h1>
              </h1>
              <p className="text-white text-center titleC">
                Te ofrecemos cursos
                con tutores capacitados,
                y certificados avalados
                por la universidad de las
                fuerzas armadas "ESPE"
              </p>
            </div>

            <div class="col">
              <div class="card_cert">
                <div className="col">
                  <img className="img-fluid " src={img13} alt="" />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img className="img-fluid " src={img12} alt="" />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img className="img-fluid " src={img14} alt="" />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img className="img-fluid " src={img11} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </>
  );
};
