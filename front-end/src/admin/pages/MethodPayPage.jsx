import React from "react";
import MethodPay from "../components/pagos/MethodPay";
import imagePago from '../../assets/images/imagePago.jpg'
import './style.css'

const MethodPayPage = () => {
  return (
    <div className={`p-4 my-container`}>
      <h1 className="text-center">Metodo de Pago </h1>
      <div className="img-pago">
        <img src={imagePago} alt="pago" />
      </div>
      <MethodPay />
    </div>
  );
};

export default MethodPayPage;
