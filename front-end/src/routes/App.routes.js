import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminRoutes from './admin.routes'
import Client from './client'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Client/>} />
            <Route path="/admin" element={<AdminRoutes/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes