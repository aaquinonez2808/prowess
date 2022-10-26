import React from "react";
import icon1 from "../../assets/img/icon-curse.png";
import icon2 from "../../assets/img/icon-curseM.png";
import icon3 from "../../assets/img/icon-pay.png";
import linea from "../../assets/img/linea.png";
import linea2 from "../../assets/img/linea2.png";
import ini1 from "../../assets/img/ini1.jpg";
import ini2 from "../../assets/img/ini2.jpg";
import ini3 from "../../assets/img/ini3.jpg";
import ini4 from "../../assets/img/ini4.jpg";
import icon5 from "../../assets/img/5.png";
import icon6 from "../../assets/img/6.png";
import icon7 from "../../assets/img/7.png";
import icon8 from "../../assets/img/8.png";
import icon10 from "../../assets/img/01.png";
import icon11 from "../../assets/img/i4.png";
import icon12 from "../../assets/img/i5.png";
import img9 from "../../assets/img/9.png";
import img10 from "../../assets/img/10.png";
import img11 from "../../assets/img/11.png";
import img13 from "../../assets/img/16.png";
import img14 from "../../assets/img/17.png";
import icon9 from "../../assets/img/informa.jpg";
import { NavLink } from "react-router-dom";

import "./style.css";

export const Servicios = () => {
  return (
    <div className="d-flex h-100 justify-content-center gap-5  nav ">
       
      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon "   src={icon1} alt="" />
        <NavLink to="/cursos">
          CURSOS GENERALES
        </NavLink>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src={icon2} alt="" />
        <NavLink to="/">
          CURSOS PERSONALIZADOS
        </NavLink>
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src={icon3} alt="" />
        <NavLink to="/">
          EMISIÓN DE CERTIFICADO
        </NavLink>
      </div>
      
      <div className='container-xxl '>
        <h1 className='text-center mt-5 title-curso  text-black'>CURSOS GENERALES</h1>
        <p className="text-center mb-5 descripcion-curso">
          <img className=" " src={linea} alt="" />
        </p>
        <p>
          <div class="row gx-0 ">

              <div class="col-3 card img2 ">
                <div>
                   <img className="img-fluid " src={ini1}   alt="" /> 
                </div>
                <NavLink to="/cursos/1" className="nav-link">
                  <div class="card_title title-white  ">
                      <p >Contabilidad  Básica
                      <h3>Curso Gratuito</h3>
                      </p>
                  </div>
                </NavLink>
                <div class="card_icon">
                    <img className="img-fluid " src={icon5}   alt="" /> 
                </div>
                <div className="card_but ">
                  <NavLink to={`/cursos/1`} className="nav-link " > 
                    <button type="button"  className="btn btn-outline-light border border-secondary text-body ">
                      <div class="card ">
                        <img className="img-fluid card" src={icon9}   alt="" /> 
                          <div class="card-img-overlay">
                            <p className="title-black " >Más Información</p>
                          </div>
                      </div>
                    </button>
                  </NavLink>
                </div>
              </div>

              <div class="col-3 card img2">
                <div>
                   <img className="img-fluid " src={ini2}   alt="" /> 
                </div>
                <NavLink to="/cursos/1" className="nav-link">
                  <div class="card_title title-white justify-content-center align-items-center">
                    <p>Marketing Digital Básico
                    <h3>Curso Gratuito</h3>
                    </p>
                  </div>
                </NavLink>
                <div class="card_icon">
                    <img className="img-fluid " src={icon6}   alt="" /> 
                </div>
                <div className="card_but ">
                  <NavLink to={`/cursos/7`} className="nav-link " > 
                    <button type="button"  className="btn btn-outline-light border border-secondary text-body ">
                      <div class="card ">
                        <img className="img-fluid card" src={icon9}   alt="" /> 
                          <div class="card-img-overlay">
                            <p className="title-black " >Más Información</p>
                          </div>
                      </div>
                    </button>
                  </NavLink>
                </div>
              </div>

              <div class="col-3 card img2">
                <div>
                   <img className="img-fluid " src={ini3}   alt="" /> 
                </div>
                <NavLink to="/cursos/1" className="nav-link">
                  <div class="card_title title-white justify-content-center align-items-center">
                    <p>Auxiliar 
                      <p>Contable
                      <h3>Curso Gratuito</h3>
                      </p>
                    </p>
                  </div>
                </NavLink>
                <div class="card_icon">
                    <img className="img-fluid " src={icon7}   alt="" /> 
                </div>
                <div className="card_but ">
                  <NavLink to={`/cursos/4`} className="nav-link " > 
                    <button type="button"  className="btn btn-outline-light border border-secondary text-body ">
                      <div class="card ">
                        <img className="img-fluid card" src={icon9}   alt="" /> 
                          <div class="card-img-overlay">
                            <p className="title-black " >Más Información</p>
                          </div>
                      </div>
                    </button>
                  </NavLink>
                </div>
              </div>

              <div class="col-3 card img2">
                <div >
                   <img className="img-fluid " src={ini4}   alt="" /> 
                </div>
                <NavLink to="/cursos/1" className="nav-link">
                  <div class="card_title title-white justify-content-center align-items-center">
                    <p>Conoce todos nuestros cursos
                    <h3>Curso Gratuito</h3>
                    </p>
                  </div>
                </NavLink>
                <div class="card_icon">
                    <img className="img-fluid " src={icon8}   alt="" /> 
                </div>
                <div className="card_but ">
                  <NavLink to={`/cursos`} className="nav-link " > 
                    <button type="button"  className="btn btn-outline-light border border-secondary text-body ">
                      <div class="card ">
                        <img className="img-fluid card" src={icon9}   alt="" /> 
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
            <img className="img-fluid " src={img9}   alt="" /> 
          </div>  
        </div>

        <div class="col-4 ">
          <div >
            <img className="img-fluid " src={img10}   alt="" /> 
          </div>  
        </div>  
        <div class="col-4 ">
          <div >
            <img className="img-fluid " src={img11}   alt="" /> 
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
                  <div class="">
                    <img className="img-fluid " src={icon10}   alt="" /> 
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
                  <div class="">
                    <img className="img-fluid " src={icon11}   alt="" /> 
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
                    <div class="">
                      <img className="img-fluid " src={icon12}   alt="" /> 
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
              <h5 className="text-white text-center titleC">
                Te ofrecemos cursos
                con tutores capacitados,
                y certificados avalados
                por la universidad de las
                fuerzas armadas "ESPE
              </h5>
            </div>
            
            <div class="col">
                <div class="row gx-2  container-xxl ">
                  <div class="col-8">
                    <div className="col">
                      <img className="img-fluid " src={img13}   alt="" /> 
                    </div> 
                  </div>

                  <div className="col-8">
                    <div className="col">
                      <img className="img-fluid " src={img14}   alt="" /> 
                    </div>  
                  </div>  

                  <div className="col-8">
                    <div className="col">
                    </div>  
                  </div>  
                  
                </div>            
            </div>
          </div>
            
        </div>        

        
      </div>
      <div>
      </div>
    </div>

  );
};

export default Servicios;
