import React from 'react'
import ListContenido from '../components/detalle curso/ListContenido'

const CursoPage = () => {
  return (
    <div className='container bg-light'>
        <h1 className='text-center my-5'>
          <p className=' text-center'> Contenido </p>
          <h2 align="center"> Curso de Contabilidad Basica </h2>
          <ListContenido/>
        </h1>
        <button >Incribirse</button>
    </div>
  )
}

export default CursoPage