import React from "react";
import Slider1 from "../../assets/img/sslider1.jpg";
import Slider2 from "../../assets/img/slider2.jpg";
import Slider3 from "../../assets/img/slider3.jpg";
import "./style.css";
export const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      
    >
      <div className="carousel-inner slider-img">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={Slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slider2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Slider3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};