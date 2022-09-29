import React from "react";
import icon1 from "../../assets/img/icon-curse.png";
import icon2 from "../../assets/img/icon-curseM.png";
import icon3 from "../../assets/img/icon-pay.png";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Servicios = () => {
  return (
    <div className="d-flex h-100 justify-content-center gap-5">
      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src={icon1} alt="" />
        <NavLink to="/cursos">
          CURSOS MASIVOS
        </NavLink>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src={icon2} alt="" />
        <NavLink to="/">
          CURSOS NORMALES
        </NavLink>
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center servicio">
        <img className="icon " src={icon3} alt="" />
        <NavLink to="/">
          PAGO DEL CERTIFICADO
        </NavLink>
      </div>
    </div>
  );
};

export default Servicios;
