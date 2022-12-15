import React from "react";

import { Slider } from "../components/slider/Slider";
import { Servicios } from "../components/inicio/Servicios";
import "./style.css";
import Footer from "../components/footer/Footer";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <div className="servicios mb-3">
        <Servicios />
      </div>
      <div className="container-xxl ">
        <h1 className="text-center mt-5 title-curso  text-black">
          CURSOS GENERALES
        </h1>
        <div className="text-center mb-5 descripcion-curso">
          <img
            className=" "
            src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622586/modulomocc/home/linea.png"
            alt=""
          />
        </div>
        <div class="row gx-0">
          <div class="col-3 card img3">
            <div>
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622578/modulomocc/home/ini1.jpg"
                alt=""
              />
            </div>
            <NavLink to="/cursos/1" className="nav-link">
              <div class="card_title title-white  ">
                <p>
                  Contabilidad Básica
                  <h3>Curso Gratuito</h3>
                </p>
              </div>
            </NavLink>
            <div class="card_icon">
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622479/modulomocc/home/5.png"
                alt=""
              />
            </div>
            <div className="card_but ">
              <NavLink to={`/cursos/1`} className="nav-link ">
                <button
                  type="button"
                  className="btn btn-outline-light border border-secondary text-body "
                >
                  <div class="card ">
                    <img
                      className="img-fluid card"
                      src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622572/modulomocc/home/informa.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay">
                      <p className="title-black ">Más Información</p>
                    </div>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>

          <div class="col-3 card img3">
            <div>
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622580/modulomocc/home/ini2.jpg"
                alt=""
              />
            </div>
            <NavLink to="/cursos/1" className="nav-link">
              <div class="card_title title-white justify-content-center align-items-center">
                <p>
                  Marketing Digital Básico
                  <h3>Curso Gratuito</h3>
                </p>
              </div>
            </NavLink>
            <div class="card_icon">
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/6.png"
                alt=""
              />
            </div>
            <div className="card_but ">
              <NavLink to={`/cursos/7`} className="nav-link ">
                <button
                  type="button"
                  className="btn btn-outline-light border border-secondary text-body "
                >
                  <div class="card ">
                    <img
                      className="img-fluid card"
                      src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622572/modulomocc/home/informa.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay">
                      <p className="title-black ">Más Información</p>
                    </div>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>

          <div class="col-3 card img3">
            <div>
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622585/modulomocc/home/ini3.jpg"
                alt=""
              />
            </div>
            <NavLink to="/cursos/1" className="nav-link">
              <div class="card_title title-white justify-content-center align-items-center">
                <p className="mb-0">Auxiliar</p>
                <p className="mb-0">Contable</p>
                <h3>Curso Gratuito</h3>
              </div>
            </NavLink>
            <div class="card_icon">
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/7.png"
                alt=""
              />
            </div>
            <div className="card_but ">
              <NavLink to={`/cursos/4`} className="nav-link ">
                <button
                  type="button"
                  className="btn btn-outline-light border border-secondary text-body "
                >
                  <div class="card ">
                    <img
                      className="img-fluid card"
                      src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622572/modulomocc/home/informa.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay">
                      <p className="title-black ">Más Información</p>
                    </div>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>

          <div class="col-3 card img3">
            <div>
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622586/modulomocc/home/ini4.jpg"
                alt=""
              />
            </div>
            <NavLink to="/cursos/1" className="nav-link">
              <div class="card_title title-white justify-content-center align-items-center">
                <p>
                  Conoce todos nuestros cursos
                  <h3>Curso Gratuito</h3>
                </p>
              </div>
            </NavLink>
            <div class="card_icon">
              <img
                className="img-fluid "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622479/modulomocc/home/8.png"
                alt=""
              />
            </div>
            <div className="card_but ">
              <NavLink to={`/cursos`} className="nav-link ">
                <button
                  type="button"
                  className="btn btn-outline-light border border-secondary text-body "
                >
                  <div class="card ">
                    <img
                      className="img-fluid card"
                      src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622572/modulomocc/home/informa.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay">
                      <p className="title-black ">Más Información</p>
                    </div>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-3 callout container-xxl text-center">
        <div>
          <p className="text-center mb-5 descripcion-curso">
            <img
              className=" "
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622587/modulomocc/home/linea2.png"
              alt=""
            />
          </p>
        </div>

        <div class="row  card2 p-3  ">
          <div class="col text-center title-curso text-black">
            <p>INFORMACIÓN DE NUESTROS CURSOS</p>
          </div>

          <div class="col text-center  text-body titleC  text-black">
            <p>PROWESS OFRECE CURSOS DE CAPACITACIÓN EN LAS SIGUENTES AREAS.</p>
          </div>
        </div>
      </div>

      <div class="row gx-3  container-xxl ">
        <div class="col-4 ">
          <div>
            <img
              className="img-fluid img3 "
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622656/modulomocc/home/9.png"
              alt=""
            />
          </div>
        </div>

        <div class="col-4 ">
          <div>
            <img
              className="img-fluid img3"
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622567/modulomocc/home/10.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-4 ">
          <div>
            <img
              className="img-fluid img3 "
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/11.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="row gx-3 callout container-xxl text-center">
        <div>
          <p className="text-center mb-5 descripcion-curso">
            <img
              className=" "
              src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622587/modulomocc/home/linea2.png"
              alt=""
            />
          </p>
          <div class="row  card1 p-3 title-white  ">
            <div class="col ">
              <div class="col text-center titleC  title-white">
                <p>Administracíon</p>
                <div class="card_cert">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/01.png"
                    alt=""
                  />
                </div>
                <p></p>
              </div>
              <h5>
                Desarrollar bases sólidas para la implementación de un negocio,
                a través de estrategias financieras y administrativas, generando
                negocios rentables.
              </h5>
            </div>
            <div class="col">
              <div class="col text-center titleC title-white ">
                <p>Creación de páginas web</p>
                <div class="card_cert">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622558/modulomocc/home/i4.png"
                    alt=""
                  />
                </div>
                <p></p>
              </div>
              <h5>
                Brindar capacitaciones y bases a las personas para la creación
                de páginas web y blogs con la ayuda de la herramienta de
                WordPress la cual facilita la creación del contenido y manejo
                del mismo.
              </h5>
            </div>
            <div class="col">
              <div class="col text-center titleC  title-white">
                <p>Marketing digital</p>
                <div class="card_cert">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622562/modulomocc/home/i5.png"
                    alt=""
                  />
                </div>
                <p></p>
              </div>
              <h5>
                Formar emprendedores con conocimientos y destrezas destinadas al
                cumplimiento de sus objetivos empresariales dentro de un
                ambiente de mercadeo digital.
              </h5>
            </div>
          </div>
          <p className="text-center mt-5 title-curso   text-black">
            CERTIFICADOS DE CALIDAD
          </p>
          <div class="row  card1 p-3  ">
            <div class="col text-center    text-white">
              <h1 className="title-curso text-white ">
                <h1>¿POR QUÉ ESTUDIAR CON NOSOSTROS?</h1>
              </h1>
              <p className="text-white text-center titleC">
                Te ofrecemos cursos con tutores capacitados, y certificados
                avalados por la universidad de las fuerzas armadas "ESPE"
              </p>
            </div>

            <div class="col">
              <div class="card_cert">
                <div className="col">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622601/modulomocc/home/16.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622565/modulomocc/home/15.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622590/modulomocc/home/17.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="card_cert">
                <div className="col">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/11.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
