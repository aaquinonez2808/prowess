import React from "react";
import { Route, Routes } from "react-router-dom";

const client = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Cliente</div>} />
      </Routes>
    </>
  );
};

export default client;
