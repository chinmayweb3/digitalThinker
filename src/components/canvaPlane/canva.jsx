import React, { useEffect } from "react";
import "./canva.scss";
import "./canvaPlane.js";
import { canvasPlane } from "./canvaPlane.js";
const Canva = () => {
  useEffect(() => {
    canvasPlane();
  }, []);
  return <section className="fixed z-[2] full-screen bg-transparent"></section>;
};

export default Canva;
