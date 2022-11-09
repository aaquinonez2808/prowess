import React from 'react'
import './style.css'
import Footer from '../components/footer/Footer'
import ListCursoP from '../components/cursospe/Listcursop'

const CursosP = () => {
  return (
    <>
    <div className='container-md'>
        <h1 className='text-center mt-5 title-curso'>CURSOS PERSONALIZADOS</h1>
        <p className="text-center mb-5 descripcion-curso">
        </p>
        <ListCursoP/> 
    </div>
    <Footer/>
    
    </>
  )
}

export default CursosP