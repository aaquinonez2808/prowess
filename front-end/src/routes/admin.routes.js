import {Box, CssBaseline, Toolbar } from "@mui/material";
import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../admin/components/navbar/Navbar";
import Sidebar from "../admin/components/sidebar/Sidebar";
import CoursePageForm from "../admin/pages/CoursePageForm";
import CoursePageList from "../admin/pages/CoursePageList";
import HomePage from "../admin/pages/HomePage";
import '../admin/pages/style.css'
import TeacherPageForm from "../admin/pages/TeacherPageForm";


const AdminRoutes = memo(() => {
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =() => window.document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar  container={container} drawerWidth = {drawerWidth} mobileOpen = {mobileOpen} handleDrawerToggle = {handleDrawerToggle}/>
      <Sidebar  container={container} drawerWidth = {drawerWidth} mobileOpen = {mobileOpen} handleDrawerToggle = {handleDrawerToggle}/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage drawerWidth={drawerWidth} />} />
          <Route path="/cursos/crear" element={<CoursePageForm drawerWidth={drawerWidth}/>} />
          <Route path="/cursos/ver" element={<CoursePageList drawerWidth={drawerWidth}/>} />
          <Route path="/docentes/crear" element={<TeacherPageForm drawerWidth={drawerWidth}/>} />
        </Routes>
      </Box>
    </Box>
  );

});

export default AdminRoutes;
