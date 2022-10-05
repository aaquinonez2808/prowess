import React from 'react'
import ListContenido from '../components/detalle curso/ListContenido'

const CursoPage = () => {
  return (
    <div className='container bg-light'>
        <h1 className='text-center my-5'>
          <ListContenido/>
        </h1>
    </div>
  )
}

export default CursoPage