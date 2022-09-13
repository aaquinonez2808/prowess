import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../../docente/pages/HomePage";
import Orders from '../../docente/components/Login/Orders'
import Products from '../../docente/components/Login/Products'
import LoginDocente from '../../docente/components/Login/loginDocente';

const DocenteRoutes = () => {
  return (
    
    <div className="container-fluid">
      <div className="row">

        <main className="col-md-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/loginDocente" element={<LoginDocente />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default DocenteRoutes;