import React from 'react'
import './style.css'
import Footer from '../components/footer/Footer'
import { NavLink } from "react-router-dom";


const AyudosP = () => {
  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <img src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670884073/modulomocc/ayudas/22.png" className="w-100" alt="" />
        </div>
        <div className='col-6'>
          <h1 className='text-center'>PAGOS EN LINEA</h1>
          <p>
            Estimad@ estudiantes, por favor verifique que el pago a realizar si corresponda para nuestra institución, ya que por ningún motivo se realizan devoluciones de dinero.
            <br />
            <br />
            Al iniciar el pago, acepto los términos y políticas.
            <br /><br />
            Para iniciar el proceso de pago debe digitar su número de documento (sin espacios, puntos y comas) y luego dar clic en el botón "Continuar".


          </p>
          <br />
          <br />
          <br />
          <input type="text" className='w-75 d-block mx-auto mt-5' />
          <div className=" btn-register">
            <NavLink to={`/register`} className="nav-link" target="_blank" rel="noreferrer">
              <button className="button">CONTINUAR</button>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default AyudosP