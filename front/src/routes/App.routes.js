import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminRoutes from './admin.routes'
import ClientRoutes from './client/client.routes'


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/*" element={<ClientRoutes/>} />
            <Route path="/admin/*" element={<AdminRoutes/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes;