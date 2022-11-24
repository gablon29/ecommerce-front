import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../registro/Registro";
import Dashboard from "../pages/Dashboard";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
