import React from 'react'
import inscripcion from '../assets/img/inscrip.jpg'

function RegistroPage() {
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };
  
  return (


    <div className="row">
      <div className="col-6" >
        <img width="100%" height="100%" src={inscripcion} alt="inscripcion" />
      </div>
      <div className="col-6">
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
                <div className="form-input repeatPassword">
                  <label htmlFor="repeatPassword">Pais</label>
                  <input type="text" name="Pais" placeholder="Pais" ></input>
                  <p className="mensajeError"></p>
                </div>

                <div className="form-boton">
                  <button type="button" className="btn btn-primary" target="_blank" onClick={handleNext}>Siguiente</button>
                </div>
              </>
            )
          }
          {
            page === 2 && (
              <>
                <div className="form-input myname">
                  <label htmlFor="myname">Departamento/Estado/Provincia</label>
                  <input type="text" name="Departamento/Estado/Provincia" placeholder="Departamento/Estado/Provincia" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input surname">
                  <label htmlFor="surname">Municipo/Cuidad</label>
                  <input type="text" name="Municipo/Cuidad" placeholder="Municipo/Cuidad" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input email">
                  <label htmlFor="email">Edad</label>
                  <input type="text" name="Edad" placeholder="Edad" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Direccion</label>
                  <input type="text" name="Direccion" placeholder="Direccion" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Celular</label>
                  <input type="text" name="Celular" placeholder="Celular" ></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="mobile">Diplomado</label>
                  <input type="text" name="Diplomado" placeholder="Diplomado"></input>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-input mobile">
                  <select name="¿Como se entero?">
                    <option value="value1"> 1</option>
                    <option value="value2">2</option>
                    <option value="value3"> 3</option>
                  </select>
                </div>
                <div className="form-input mobile">
                  <label htmlFor="Masculino">Masculino</label>
                  <input type="checkbox" name="Masculino" id="Masculino" value="Masculino" />
                  <p className="mensajeError"></p>
                </div>

                <div className="form-termsAndConditions termsAndConditions">
                  <label htmlFor="termsAndConditions">He leído y acepto los </label>
                  <a href="#">Términos y Condiciones</a>
                  <p className="mensajeError"></p>
                </div>
                <div className="form-boton">
                  <button type="button" className="btn btn-primary" target="_blank" onClick={handlePrev}>Atras</button>
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