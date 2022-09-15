import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "../../Login/login";
import LoginAdmin from '../../Login/loginAdmin';
import LoginDocente from '../../Login/loginDocente';
import LoginEstudiante from '../../Login/loginEstudiante';

const DocenteRoutes = () => {
  return (
    
    <div className="container-fluid">
      <div className="row">

        <main className="col-md-10">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/loginDocente" element={<LoginDocente />} />
            <Route path="/loginEstudiante" element={<LoginEstudiante />} />
            <Route path="/loginAdmin" element={<LoginAdmin />} />

          </Routes>
        </main>
      </div>
    </div>
  )
}

export default DocenteRoutes;