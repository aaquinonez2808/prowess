import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../../docente/pages/HomePage";
import LoginDocente from '../../docente/components/Login/loginDocente';

const DocenteRoutes = () => {
  return (
    
    <div className="container-fluid">
      <div className="row">

        <main className="col-md-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginDocente" element={<LoginDocente />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default DocenteRoutes;