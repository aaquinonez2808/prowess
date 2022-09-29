import React from 'react'
import Curso from './Curso'

const cursos = [
  {
    id: 1,
    nombre: 'Curso de React',
    descripcion: 'Curso de React',
    precio: 100,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 2,
    nombre: 'Curso de Angular',
    descripcion: 'Curso de Angular',
    precio: 200,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 3,
    nombre: 'Curso de Vue',
    descripcion: 'Curso de Vue',
    precio: 300,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 4,
    nombre: 'Curso de Node',
    descripcion: 'Curso de Node',
    precio: 400,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 5,
    nombre: 'Curso de Laravel',
    descripcion: 'Curso de Laravel',
    precio: 500,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 6,
    nombre: 'Curso de PHP',
    descripcion: 'Curso de PHP',
    precio: 600,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  },
  {
    id: 7,
    nombre: 'Curso de Python',
    descripcion: 'Curso de Python',
    precio: 700,
    imagen: 'https://i.imgur.com/4ZQ9Z0M.png',
    categoria: 'Programacion',
    profesor: 'Juan',
  }]

const ListCurso = () => {
  return (
    <div className='row mt-3 gap-lg-3'>
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