import React, { useEffect } from "react";
import "./canva.scss";
import { useCanvasPlane } from "./canvaPlane.js";
const Canva = ({ preloader, setPreloader }) => {
  useCanvasPlane(preloader);

  return <section id="canvas-plane" className="fixed z-[20] full-screen"></section>;
};

export default Canva;
