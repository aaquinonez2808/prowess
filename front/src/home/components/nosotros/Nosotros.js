import React from "react";

import {Jumbotron} from "./jumbotron/Jumbotron";
import {Detalles} from "./detalles/Detalles";

export const Nosotros = () => {
  return (
    <>
      <main role="main" className="flex-shrink-0 mt-5">

      <div className="container-xl">
      <div className="row align-items-start">
    <div className="col">
    <Jumbotron />
    </div>
    <div className="col">
    <Detalles />
    </div>
    
  </div>
</div>

      </main>

      
    </>
  );
}
export default Nosotros

