import React from 'react'
import listacursop from '../components/cursospe/listcursop'
import './style.css'
import Footer from '../components/footer/Footer'

const CursosP = () => {
  return (
    <>
    <div className='container-md'>
        <h1 className='text-center mt-5 title-curso'>CURSOS PERSONALIZADDOS</h1>
        <p className="text-center mb-5 descripcion-curso">
        </p>
        <listacursop/>
    </div>
    <Footer/>
    
    </>
  )
}

export default CursosP