import React from "react";

import {Jumbotron} from "./jumbotron/Jumbotron";
import {Detalles} from "./detalles/Detalles";

export const Nosotros = () => {
  return (
    <>
      <main role="main" className="flex-shrink-0 mt-5">

      <div class="container-xl">
      <div class="row align-items-start">
    <div class="col">
    <Jumbotron />
    </div>
    <div class="col">
    <Detalles />
    </div>
    
  </div>
</div>

      </main>

      
    </>
  );
}
export default Nosotros

