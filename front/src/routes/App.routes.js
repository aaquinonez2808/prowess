import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistroPage from '../home/pages/RegistroPage'
import AdminRoutes from './admin.routes'
import ClientRoutes from './client/client.routes'


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/*" element={<ClientRoutes/>} />
            <Route path="/admin/*" element={<AdminRoutes/>} />
            <Route path="/register" element={<RegistroPage/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes;