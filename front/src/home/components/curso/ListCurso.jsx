import React from 'react'
import Curso from './Curso'
import {cursos} from './datosCursos';


const ListCurso = () => {
  return (
    <div className='row mt-3 gap-lg-5 mx-auto'>
      {
        cursos.map(curso => (
          <div className="card col-4" style={{width: "18rem"}} key={curso.id}>
          <Curso curso={curso}/>
          </div>
        ))
      }
    </div>
  )
}

export default ListCurso