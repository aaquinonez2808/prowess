import React, { memo, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../admin/components/navbar/Navbar";
import Sidebar from "../admin/components/sidebar/Sidebar";
import HomePage from "../admin/pages/HomePage";
import '../admin/pages/style.css'

const AdminRoutes = memo(() => {
    const [sidebar, setSidebar] = useState("");
    const [container, setContainer] = useState("");
    const [cargaBoton, setCargaBoton] = useState(false);
    const [widh, setWidth] = useState(window.innerWidth);
    const [pushboton, setPushBoton] = useState(false);
    useEffect(() => {
      console.log("hola")
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
      if(widh<600){
        setCargaBoton(true);
        setSidebar("");
        setContainer("")
      }else{
        setSidebar("active-nav");
        setContainer("active-cont")
        setCargaBoton(false);
      }
      if(pushboton===true){
        setSidebar("active-nav")
      }
      return () => {
        window.removeEventListener("resize", () => {
          setWidth(window.innerWidth);
        });
      }
    }, [sidebar, container, cargaBoton, widh, pushboton]);

  const handleSideberChange = () => {
    setPushBoton(!pushboton)
    if(sidebar === "active-nav" ){
        setSidebar("");
        setContainer("");
    }else if(sidebar === ""){
        setSidebar("active-nav");
        setContainer("active-cont");
    }
  }

  return (
    <>
      <Navbar />
      <>
      {
        cargaBoton ? (
          <button className="btn my-1" onClick={handleSideberChange}>Menu</button>
        ) : (
          <>

          </>
        )
      }
        <Sidebar claseActiva={sidebar}/>
        <Routes>
          <Route path="/" element={<HomePage claseActiva={container} />} />
        </Routes>
      </>
    </>
  );
});

export default AdminRoutes;
