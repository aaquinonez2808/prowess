import React from 'react'
import ListCurso from '../components/curso/ListCurso'

const CursoPage = () => {
  return (
    <div className='container bg-light'>
        <h1 className='text-center my-5'>Listado de Cursos a Ofertar</h1>
        <ListCurso/>
    </div>
  )
}

export default CursoPage