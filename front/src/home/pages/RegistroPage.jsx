import React from 'react'

function RegistroPage() {
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (

    <div className='container'>
      <div class="row">
        <div className="col-12 text-center">
          <h1>Inscripciones para los Cursos a Ofertar</h1>
        </div>
        <div className="col-4" >
          <img width="550px" height="600px" src="https://www.cedro.org/images/default-source/0blog/05-04.jpg?sfvrsn=db2172a6_4" class="rounded" alt="..."></img>
        </div>
        <div className="col-8">
          <div class="container">
            <form action="" class="form" id="form" autocomplete="off">
              <p class="form-titulo">{page}/2 Regístrate</p>
              {
                page === 1 && (
                  <>
                  <div class="form-input myname">
                <label for="myname">Nombre</label>
                <input type="text" name="Nombres" placeholder="Nombre" autocomplete="on"></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-input surname">
                <label for="surname">Apellidos</label>
                <input type="text" name="Apellidos" placeholder="Apellidos" autocomplete="on"></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-input email">
                <label for="email">Correo electrónico</label>
                <input type="email" name="Email" placeholder="Email" autocomplete="on"></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-input mobile">
                <label for="mobile">Celular</label>
                <input type="text" name="Celular" placeholder="Celular" autocomplete="on"></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-input password">
                <label for="password">Contraseña</label>
                <input type="password" name="Contraseñ" placeholder="Contraseña" autocomplete="on" ></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-input repeatPassword">
                <label for="repeatPassword">Repetir Contraseña</label>
                <input type="password" name="Contraseña" placeholder="Contraseña" autocomplete="on"></input>
                <p class="mensajeError"></p>
              </div>
              <div class="form-termsAndConditions termsAndConditions">
                <label for="termsAndConditions">He leído y acepto los </label>
                <a href="#">Términos y Condiciones</a>
                <p class="mensajeError"></p>
              </div>
              <div class="form-boton">
                <button type="button" class="btn btn-primary" target="_blank" onClick={handleNext}>Siguiente</button>
              </div>
              </>
                )
              }
              {
                page === 2 && (
                  <>
                  </>
                )
              }
              <p class="mensajeCorrecto"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroPage;