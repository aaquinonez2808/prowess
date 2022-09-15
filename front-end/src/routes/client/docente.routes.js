import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "../../Login/login";
import LoginDocente from '../../Login/loginDocente';

const DocenteRoutes = () => {
  return (
    
    <div className="container-fluid">
      <div className="row">

        <main className="col-md-10">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/loginDocente" element={<LoginDocente />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default DocenteRoutes;