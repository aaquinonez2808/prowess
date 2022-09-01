import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../admin/components/home/Home';
import Navbar from '../admin/components/navbar/Navbar';
import Sidebar from '../admin/components/sidebar/Sidebar';

const AdminRoutes = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default AdminRoutes;