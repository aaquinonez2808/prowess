import React from 'react'
import inscripcion from '../assets/img/inscrip.jpg'
import { NavbarRedes } from '../components/navbar/NavbarRedes'
import { useForm } from "react-hook-form";

function RegistroPage() {
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (


    <div className="row ">
      <div>
        <>
          <NavbarRedes />
        </>
      </div>
      <div className=" col-md-6 col-xs-12 image-form" >
        <img width="100%" height="100%" src={inscripcion} alt="inscripcion" />
      </div>
      <div className="col-md-6 col-xs-12">
        <form className="form" id="form" >
          <p className="form-titulo">{page}/2 Regístrate</p>
          {
            page === 1 && (
              <>
                <div className="form-input myname">
                  <label htmlFor="myname">Nombre</label>
                  <input type="text" name="Nombres" placeholder="Nombre" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input surname">
                  <label htmlFor="surname">Apellidos</label>
                  <input type="text" name="Apellidos" placeholder="Apellidos" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input email">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" name="Email" placeholder="Email" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Celular</label>
                  <input type="text" name="Celular" placeholder="Celular" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input password">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="Contraseñ" placeholder="Contraseña"  ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input repeatPassword">
                  <label htmlFor="repeatPassword">Repetir Contraseña</label>
                  <input type="password" name="Contraseña" placeholder="Contraseña" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-regist-select mb-4" >
                  <select className="form-select" >
                    <option  >Pais</option>
                    <option value="">2</option>
                    <option value=""> 3</option>
                  </select>
                </div>
                <div className="form-boton d-flex justify-content-end ">
                  <button type="button" className="" target="_blank" onClick={handleNext}>Siguiente</button>
                </div>
              </>
            )
          }
          {
            page === 2 && (
              <>
                <div className="form-regist-select mb-4" >
                  <select className="form-select" >
                    <option  >Provincia</option>
                    <option value="">2</option>
                    <option value=""> 3</option>
                  </select>
                </div>
                <div className="form-regist-select mb-4" >
                  <select className="form-select" >
                    <option  >Municipio/Cuidad</option>
                    <option value="">2</option>
                    <option value=""> 3</option>
                  </select>
                </div>
                <div className="form-regist-select mb-4" >
                  <select className="form-select" >
                    <option>Edad</option>
                    <option value="18">Menos a 18 </option>
                    <option value="25">18 a 25</option>
                    <option value="35">26 a 35</option>
                    <option value="45">36 a 45</option>
                    <option value="100">Mayor a 45</option>
                  </select>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Direccion</label>
                  <input type="text" name="Direccion" placeholder="Direccion" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Celular</label>
                  <input type="number" name="Celular" placeholder="Celular" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-regist-select mb-4" >
                  <select className="form-select" >
                    <option >Diplomado</option>
                    <option value="">2</option>
                    <option value=""> 3</option>
                  </select>
                </div>
                <div className="form-regist-select mb-4">
                  <select className="form-select" >
                    <option>¿Como se entero?</option>
                    <option value="">Facebook</option>
                    <option value="">Instagram</option>
                    <option value="">Anuncio</option>
                    <option value="">Twitter</option>
                    <option value="">Volante</option>
                    <option value="">Youtube</option>
                  </select>
                </div>
                <div className="form-regist-radio mb-4 row">
                  <div className="col-6">
                    <input type="radio" id="Masculino" value="Masculino" name='sexo' />
                    <label htmlFor="Masculino">Masculino</label>
                  </div>
                  <div className="col-6" >
                    <input type="radio" id="Femenino" value="Femenino" name='sexo' />
                    <label htmlFor="Femenino">Femenino</label>
                  </div>
                </div>
                <div className=" row mb-4 gap-2 ">
                  <div className="form-check-label">
                    <input type="checkbox" name="terminos" id="terminos" value="Terminos" />
                    <a href="/terminos" target="_blank">He Leído y Acepto los Términos y Condiciones </a>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className="form-boton ">
                    <button type="button" className="" target="_blank" onClick={handlePrev}>Atras</button>
                  </div>
                  <div className="form-boton ">
                    <button type="button" className="" target="_blank" onClick={handlePrev}>Registrar</button>
                  </div>
                </div>

              </>
            )
          }
          <p className="mensajeCorrecto"></p>
        </form>
      </div>
    </div>

  )
}

export default RegistroPage;