import React from 'react'
import {Route, Routes } from 'react-router-dom'


const EstudianteRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<h1>Hola esta es la pagina inicial del estudiante</h1>} />
      </Routes>
    </>
  )
}

export default EstudianteRoutes;