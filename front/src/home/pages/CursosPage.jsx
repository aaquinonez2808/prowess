import React from 'react'
import ListCurso from '../components/curso/ListCurso'
import './style.css'
import Footer from '../components/footer/Footer'

const CursosPage = () => {
  return (
    <>
    <div className='container-md'>
        <h1 className='text-center mt-5 title-curso'>CURSOS GENERALES</h1>
        <p className="text-center mb-5 descripcion-curso">
          Cursos completamente gratuitos en modalidad virtual para emprendedores
        </p>
        <ListCurso/>
    </div>
    <Footer/>
    
    </>
  )
}

export default CursosPage