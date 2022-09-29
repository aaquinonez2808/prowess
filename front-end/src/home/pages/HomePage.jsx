import React from "react";

import { Slider } from "../components/slider/Slider";
import { Servicios } from "../components/servicios/Servicios";
import './style.css'
export const HomePage = () => {
  return (
    <>
      <Slider />
        <div className="servicios mb-3">
          <Servicios />
        </div>
    </>
  );
};
