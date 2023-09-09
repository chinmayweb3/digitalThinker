import React, { useEffect } from "react";
import "./canva.scss";
import "./canvaPlane.js";
import { canvasPlane } from "./canvaPlane.js";
const Canva = () => {
  useEffect(() => {
    canvasPlane();
  }, []);
  return <section id="canvas-plane" className="fixed z-[20] full-screen"></section>;
};

export default Canva;
