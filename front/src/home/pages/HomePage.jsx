import React from "react";

import { Slider } from "../components/slider/Slider";
import { Inicio } from "../components/inicio/Inicio";
import './style.css'

export const HomePage = () => {
  return (
    <>
      <Slider />
        <div className="servicios mb-3">
          <Inicio />
        </div>
       
    </>
  );
};
