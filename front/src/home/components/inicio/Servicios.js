import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export const Servicios = () => {
  return (
  <>
    <div className="d-flex h-100 justify-content-center gap-5  nav ">

      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622564/modulomocc/home/icon_curse.png" alt="" />
        <NavLink to="/cursos/general">
          CURSOS GENERALES
        </NavLink>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622568/modulomocc/home/icon-curseM.png" alt="" />
        <NavLink to="/cursos/personalizados">
          CURSOS
          PERSONALIZADOS
        </NavLink>
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622568/modulomocc/home/icon-pay.png" alt="" />
        <NavLink to="/">
          EMISIÓN DE CERTIFICADO
        </NavLink>
      </div>
    </div>
    </>
  );
};

