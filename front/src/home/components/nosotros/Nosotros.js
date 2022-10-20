import React from "react";

import {Jumbotron} from "./jumbotron/Jumbotron";
import {Detalles} from "./detalles/Detalles";
import Footer from "../footer/Footer";

export const Nosotros = () => {
  return (
    <>
      <main role="main" className="flex-shrink-0 mt-5">
        <Jumbotron />
        <Detalles />
      </main>

      <Footer />
    </>
  );
}
export default Nosotros

